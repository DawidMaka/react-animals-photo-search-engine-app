import api from 'api'
import { useQuery } from 'react-query'
import React, { useRef, useEffect } from 'react'
import { useDetectOutsideClick } from 'utils/useDetectOutsideClick'
import StyledSpinner from 'components/styledComponents/StyledSpinner'
import { StyledButtonCross, StyledButtonLeft, StyledButtonRight } from 'components/styledComponents/StyledButton'
import StyledErrorMessage from 'components/styledComponents/StyledErrorMessage'
import {
  StyledModalBackdrop,
  StyledModal,
  StyledModalDialog,
  StyledModalContentWrapper,
  StyledModalContent,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
} from 'components/styledComponents/StyledModal'

const fetchSinglePhoto = async (id) => {
  const { data } = await api.get(`https://api.unsplash.com/photos/${id}`)

  return data
}

const Modal = React.memo(({
  history, match, index, setIndex, photos, setIsModalVisible,
}) => {
  const modalRef = useRef(null)
  useDetectOutsideClick(modalRef, setIsModalVisible)

  const {
    status, data, error,
  } = useQuery(
    ['singlePhoto', match.params.id],
    () => fetchSinglePhoto(match.params.id),
  )

  useEffect(() => {
    const closeModal = (e) => {
      if(e.code === 'Escape'){
        setIsModalVisible(false)
      }
    }

    window.addEventListener('keydown', closeModal)
    return () => window.removeEventListener('keydown', closeModal)
  }, [])  

  useEffect(() => {
    fetchSinglePhoto(match.params.id)
  }, [match.params.id])

  return (
    <>
      {status === 'error' ? (
        <StyledErrorMessage>
          Error:
          {' '}
          {error.message}
        </StyledErrorMessage>
      ) : null}
      <StyledModalBackdrop aria-hidden="true" />
      <StyledModal tabIndex={-1}>
        <StyledModalDialog>
          <StyledModalContentWrapper ref={modalRef}>
            <StyledModalContent>
              {data ? (
                <>
                  <StyledModalHeader>
                    <h2>
                      <span className="sr-only">Author of the picture:</span>
                      {data.user.first_name}
                      {' '}
                      {data.user.last_name}
                    </h2>
                  </StyledModalHeader>
                  <StyledModalBody>
                    <img
                      src={data.urls.regular}
                      alt={data.alt_description}
                    />
                    {data.location.title ? (
                      <p>
                        <span className="sr-only">Location of the picture:</span>
                        {data?.location.title}
                      </p>
                    ) : null}
                  </StyledModalBody>
                </>
              ) : <StyledSpinner />}
              <StyledModalFooter>
                <StyledButtonCross
                  onClick={() => setIsModalVisible(false)}
                  component="modal"
                >
                  <span className="sr-only">Close</span>
                </StyledButtonCross>
                <StyledButtonLeft
                  disabled={index === 0}
                  onClick={() => {
                    setIndex((prevState) => prevState - 1)
                    const newIndex = index - 1
                    history.push(`/photos/${match.params.query}/${photos[newIndex].id}`)
                  }}
                >
                  <span className="sr-only">Previous photos</span>
                </StyledButtonLeft>
                <StyledButtonRight
                  disabled={index === photos.length - 1}
                  onClick={() => {
                    setIndex((prevState) => prevState + 1)
                    const newIndex = index + 1
                    history.push(`/photos/${match.params.query}/${photos[newIndex].id}`)
                  }}
                >
                  <span className="sr-only">Next photos</span>
                </StyledButtonRight>
              </StyledModalFooter>
            </StyledModalContent>
          </StyledModalContentWrapper>
        </StyledModalDialog>
      </StyledModal>
    </>
  )
})

export default Modal
