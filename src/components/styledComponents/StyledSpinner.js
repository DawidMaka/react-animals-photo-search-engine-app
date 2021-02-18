import styled from 'styled-components'

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  div {
    margin: 0 auto;
    display: block;
    width: 2rem;
    height: 2rem;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 0.75s linear infinite;    
  }

  @keyframes spinner-border {
    to {
      transform: rotate(360deg);
    }
  }
`

const StyledSpinner = () => (
  <Spinner
    aria-busy="true"
    role="progressbar"
  >
    <div>
      <span className="sr-only">Loading content...</span>
    </div>
  </Spinner>
)

export default StyledSpinner
