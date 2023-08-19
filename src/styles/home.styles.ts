import styled from "styled-components";

export const HomeInset = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: auto 0;
`

export const HomeSearch = styled.div`
  
  align-self: center;

  .MuiAutocomplete-root {

    .MuiFormLabel-root {
      color: var(--primary-highlight);
    }

    .MuiInputBase-input {
      color: var(--secondary-color);
    }

    .MuiInput-underline:before {
      border-color: var(--primary-color);
    }

    .MuiInput-underline:after {
      border-color: var(--primary-color);
    }
  }


`

export const BorderContainer = styled.div`
  background-color: var(--opacity-background);
  backdrop-filter: blur(3px);
  padding: 75px 36px 80px 36px;
  border-radius: 20px;
  width: auto;
  max-width: 340px;
  
  div {
    margin: 0 auto;
  }
`

export const AutocompleteTitle = styled.p`
  font-size: 1rem;
  overflow-wrap: anywhere;
  margin: 0 0 40px 0;
`

