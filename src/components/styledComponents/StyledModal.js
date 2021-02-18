import styled from 'styled-components'

const StyledModalBackdrop = styled.div`
  background-color: #000;
  height: 100vh;
  left: 0;
  opacity: .6;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1040;
`

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  display: flex;
  align-items: center;
`

const StyledModalDialog = styled.div`
  width: 81vw;
  margin: 0 auto;
  position: relative;

  @media(min-width: 576px) {
    width: 71vw;
  }

  @media(min-width: 992px) {
    width: 63vw;
  }
`

const StyledModalContentWrapper = styled.div`
  background: linear-gradient(0deg,#7176F7 0%,#CA75F1 100%);
  width: 100%;
  height: 100%; 
`

const StyledModalContent = styled.div`
  min-height: 40vh;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  position: relative;
  pointer-events: auto;  
  outline: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 576px) {
    min-height: 60vh;
  }

  @media(min-width: 992px) {
    min-height: 90vh;
  }
`

const StyledModalHeader = styled.div`
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);

  h2 {
    margin: 0;
    font-weight: 500;
    font-size: 17px;
  }
`

const StyledModalBody = styled.div`
  position: relative;
  max-height: 90vh;  

  img {
    padding: 4px;
    min-height: 200px;

    @media(min-width: 992px) {
      min-height: 397px;
    }
  }

  p {
    margin: 0;
    padding: 10px;
    font-size: 15px;
  }

  @media(min-width: 550px) {
    padding: 1rem;
  }
`

const StyledModalFooter = styled.div`
  button {
    filter: brightness(0) invert(1);
    position: fixed;
    opacity: .6;

    &:hover {
      opacity: 1;
    }
  }
`

export {
  StyledModalBackdrop,
  StyledModal,
  StyledModalDialog,
  StyledModalContentWrapper,
  StyledModalContent,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
}
