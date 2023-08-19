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
  margin: 5px 0 15px 0;
  padding: 0;
  font-size: 8rem;
  line-height: 0.5;
  color: var(--secondary-highlight);
  background-color: var(--tertiary-background);
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
