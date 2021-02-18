import styled from 'styled-components'

const StyledPhoto = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;

  div {
    display: block;
    padding: 8px;
    cursor: pointer;
  }

  @media(min-width: 550px) {
    div {
      flex-basis: 50%;
      max-width: 50%;
      height: 300px;
    }
  }

  @media(min-width: 800px) {
    div {
      flex-basis: 33.3333%;
      max-width: 33.3333%;
      height: 350px;
    }
  }
`

export default StyledPhoto
