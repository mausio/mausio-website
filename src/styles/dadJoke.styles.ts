import styled from "styled-components";

export const BorderContainer = styled.div`
  user-select: none;
  background-color: var(--opacity-background);
  backdrop-filter: blur(3px);
  padding: 75px 36px 80px 36px;
  border-radius: 20px;
  height: auto;
  width: auto;
  max-width: 340px;

  div {
    margin: 0 auto;
  }

  transition: 0.6s;
  transition-timing-function: ease-out;

  .update {
    scale: 1;
    filter: blur(0px);

    &:active {
      transition: 0.3s;
      scale: 0.7;
      backdrop-filter: brightness(0.8);
      filter: blur(15px) opacity(0.8);
      transition-timing-function: ease;
      
    }
  }



`