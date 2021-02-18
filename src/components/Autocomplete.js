import React from 'react'
import StyledAutocomplete from 'components/styledComponents/StyledAutocomplete'

const Autocomplete = React.memo(({
  list, activeElement, onMouseDown,
}) => (
  <StyledAutocomplete>
    {list.map((item, index) => (
      <li
        role="option"
        key={item}
        className={activeElement === index ? 'isActive' : null}
        onMouseDown={onMouseDown}
      >
        {item}
      </li>
    ))}
  </StyledAutocomplete>
))

export default Autocomplete
