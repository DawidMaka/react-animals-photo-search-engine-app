import styled from 'styled-components'

const StyledSearchForm = styled.form`
  margin: 0 auto 50px;
  width: 90%;
  position: relative;

  ul {
    width: 100%;
    position: absolute;
    top: 40px;
  } 

  input {
    padding: 0.375rem 0.75rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    line-height: 1.5;
    display: block;

    &:disabled {
      opacity: 0.65;
    }
  }

  p {
    position: absolute;
  }

  @media(min-width: 550px) {
    width: 60%;
  }
`

export default StyledSearchForm
