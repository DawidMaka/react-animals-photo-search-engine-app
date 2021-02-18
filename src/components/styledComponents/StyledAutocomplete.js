import styled from 'styled-components'

const StyledAutocomplete = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0; 

  li {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: -1px;
    padding: 0.75rem 1.25rem;

    :first-child {
      border-top-left-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }

    :last-child {
      border-bottom-right-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      margin-bottom: 0;
    }

    &:hover {
      background-color: #e9e9e9;
      cursor: pointer;
    }

    &.isActive {
      background-color: #198754;
      border-color: #198754;
      color: white;
    }
  }
`

export default StyledAutocomplete
