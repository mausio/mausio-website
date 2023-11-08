import styled from "styled-components";


export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;

  width: 100%;
  height: 100%;
`

export const NotFoundTitle = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 8rem;
  color: var(--secondary-highlight);
  background-color: var(--tertiary-background);
`

export const ConstructionLottie = styled.div`
  align-self: center;
  margin: 50px 0;
  padding: 0 100%;
  //overflow-y: hidden;
  background-color: var(--tertiary-background);
  backdrop-filter: blur(2px);
  
  svg{
    position: relative;
    bottom: 10px;
  }
`

export const LottieContainer = styled.div`
  margin: 0 auto;
`

export const NotFoundMessage = styled.p`
  text-align: center;
  margin: 5px 0 0 0;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--secondary-color);
`
