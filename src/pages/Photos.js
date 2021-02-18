import api from 'api'
import { useQuery, useQueryClient } from 'react-query'
import { useEffect, useState } from 'react'
import Modal from 'components/Modal'
import SearchForm from 'components/SearchForm'
import StyledSpinner from 'components/styledComponents/StyledSpinner'
import { StyledButtonDown } from 'components/styledComponents/StyledButton'
import StyledPhoto from 'components/styledComponents/StyledPhoto'
import StyledErrorMessage from 'components/styledComponents/StyledErrorMessage'

const fetchPhotos = async (query, page) => {
  const { data } = await api.get(`https://api.unsplash.com/search/photos/?page=${page}&per_page=12&query=${query}&client_id=dxjGIFqOGskBueOEpKeCQtZRMaGT3bvejFB8dVRuuQY`)

  return data
}

const Photos = ({ history, match }) => {
  const queryClient = useQueryClient()
  const [index, setIndex] = useState(0)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState(match.params.query)
  const [photos, setPhotos] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const {
    status, data, error,
  } = useQuery(
    ['photos', query, page],
    () => fetchPhotos(query, page),
  )

  useEffect(() => {
    if ((data?.total_pages) >= page) {
      queryClient.prefetchQuery(['photos', query, page + 1], () => fetchPhotos(query, page + 1))
      setPhotos((prevState) => [...prevState, ...data.results])
    }
  }, [data, page, queryClient])

  return (
    <main>
      <h1>{match.params.query}</h1>
      <SearchForm
        history={history}
        match={match}
        setQuery={setQuery}
        setPhotos={setPhotos}
        setPage={setPage}
      />
      {status === 'loading' ? <StyledSpinner /> : null}
      {status === 'error' ? (
        <StyledErrorMessage>
          Error:
          {' '}
          {error.message}
        </StyledErrorMessage>
      ) : null}
      {data ? (
        <StyledPhoto>
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              onClick={() => {
                setIndex(i)
                setIsModalVisible(true)
                history.push(`/photos/${query}/${photo.id}`)
              }}
            >
              <span className="sr-only">Get more details about this picture</span>
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
              />
            </div>
          ))}
        </StyledPhoto>
      ) : null}
      {isModalVisible ? (
        <Modal
          history={history}
          match={match}
          index={index}
          setIndex={setIndex}
          photos={photos}
          setIsModalVisible={setIsModalVisible}
        />
      ) : null}
      {data ? (
        <StyledButtonDown
          onClick={() => setPage((prevState) => prevState + 1)}
          disabled={data.total <= photos.length}
        >
          <span className="sr-only">More photos</span>
        </StyledButtonDown>
      ) : null}
    </main>
  )
}

export default Photos
