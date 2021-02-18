import styled, { css } from 'styled-components'
import cross from 'assets/cross.svg'
import arrowDown from 'assets/arrow-down.svg'
import arrowLeft from 'assets/arrow-left.svg'
import arrowRight from 'assets/arrow-right.svg'

const StyledButton = styled.button`  
  width: 33px;
  height: 33px;
  cursor: pointer;
  background-repeat: no-repeat;

  &:disabled {
    opacity: .1;
    cursor: auto;

    &:hover {
      opacity: .1;
    }
  }

  &:focus {
    opacity: 1;
    outline: none;
  }
`

const StyledButtonCross = styled(StyledButton)`  
  background-image: url(${cross});
  
  ${({ component }) => component === 'form'
    && css`
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);

      &:focus {
        outline: -webkit-focus-ring-color auto 1px;
      }
  `}

  ${({ component }) => component === 'modal'
    && css`
      top: 3px;
      right: 2px;
      width: 20px;
      height: 20px;
      
      @media(min-width: 600px) {
        top: 10px;
        right: 10px;
      }
  `}
`

const StyledButtonDown = styled(StyledButton)`
  background-image: url(${arrowDown});
  position: relative;
  bottom: 5px;

  &:focus {
    outline: -webkit-focus-ring-color auto 1px;
  }
`

const StyledButtonLeft = styled(StyledButton)`  
  background-image: url(${arrowLeft});
  top: 50%;
  left: -5px;

  @media(min-width: 600px) {
    left: 30px;
  }

  @media(min-width: 992px) {
    left: 90px;
  }
`

const StyledButtonRight = styled(StyledButton)`   
  background-image: url(${arrowRight});
  top: 50%;
  right: -5px;

  @media(min-width: 600px) {
    right: 30px;
  }

  @media(min-width: 992px) {
    right: 90px;
  } 
`

export {
  StyledButtonCross, StyledButtonDown, StyledButtonLeft, StyledButtonRight,
}
