import React, { useState } from 'react'
import keywords from 'base/variables'
import Autocomplete from 'components/Autocomplete'
import StyledSearchForm from 'components/styledComponents/StyledSearchForm'
import { StyledButtonCross } from 'components/styledComponents/StyledButton'

const isQueryInArray = (query, arr) => arr.includes(query.toLowerCase())

const filterByLetter = (arr, value) => (
  value.length < 3
    ? []
    : arr.filter((item) => item.toLowerCase().slice(0, value.length) === value.toLowerCase())
)

const SearchForm = React.memo(({
  history, match, setQuery, setPhotos, setPage,
}) => {
  const [animals, setAnimals] = useState([])
  const [isAutocompleteVisible, setAutocompleteVisibility] = useState(false)
  const [activeElement, setActiveElement] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    const { value } = e.target
    setAnimals(filterByLetter(keywords, value))
    setActiveElement(-1)
    setInputValue(value)
    setAutocompleteVisibility(true)
  }

  const handleMouseDown = (e) => {
    const { innerText } = e.target
    setInputValue(innerText)

    if (history.location.pathname !== '/' && innerText !== match.params.query) {
      setPhotos([])
      setPage(1)
      setQuery(innerText)
    }

    history.push(`/photos/${innerText}`)
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      setActiveElement(-1)
      setAnimals([])
      setInputValue('')
    } else if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      e.preventDefault()
      const { value } = e.target
      const currentValue = animals[activeElement] ? animals[activeElement] : value
      setInputValue(currentValue)
      const isQuery = isQueryInArray(currentValue, keywords)

      if (isQuery) {
        setAutocompleteVisibility(false)
        if (history.location.pathname !== '/' && currentValue !== match.params.query) {
          setPhotos([])
          setPage(1)
          setQuery(currentValue)
        }
        history.push(`/photos/${currentValue}`)
      }
    } else if (e.code === 'ArrowUp') {
      if (activeElement <= 0) {
        setActiveElement(animals.length)
      }

      setActiveElement((prevState) => prevState - 1)
    } else if (e.code === 'ArrowDown') {
      if (activeElement === animals.length - 1) {
        setActiveElement(-1)
      }

      setActiveElement((prevState) => prevState + 1)
    }
  }

  return (
    <StyledSearchForm
      role="search"
    >
      <label
        htmlFor="username"
        className="sr-only"
      >
        Photo:
      </label>
      <input
        aria-autocomplete="list"
        aria-controls="animals-listbox"
        aria-expanded={animals.length ? 'true' : 'false'}
        autoComplete="off"
        id="username"
        onBlur={() => {
          setAnimals([])
          setAutocompleteVisibility(false)
        }}
        onFocus={(e) => {
          setAnimals(filterByLetter(keywords, e.target.value))
          setAutocompleteVisibility(true)
        }}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="e.g Buffalo"
        role="combobox"
        type="text"
        value={inputValue}
      />
      {inputValue ? (
        <StyledButtonCross
          onClick={() => setInputValue('')}
          component="form"
        >
          <span className="sr-only">Clear</span>
        </StyledButtonCross>
      ) : null}
      {isAutocompleteVisible ? (
        <>
          <Autocomplete
            activeElement={activeElement}
            aria-label="Animals"
            id="animals-listbox"
            role="listbox"
            onMouseDown={handleMouseDown}
            list={animals}
          />
          {animals.length === 0 && inputValue.length > 2 ? (<p>No matches!</p>) : null}
        </>
      ) : null}
    </StyledSearchForm>
  )
})

export default SearchForm
