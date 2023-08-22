import styled from "styled-components";

export const MediaSpacer = styled.div`
  margin: 0 10px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
  row-gap: 5px;
`

export const ChatContainer = styled.div`
  min-height: 52.5vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  background-color: var(--opacity-background);
  backdrop-filter: blur(3px);
  padding: 0;
  margin: 0;
  border-radius: 15px;
  overflow: hidden;


  div {
    animation: bubbleAppear 0.3s ease-out forwards;
    -webkit-animation: bubbleAppear 0.3s ease-out forwards;
  }

  div:first-of-type {
    animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
  }


  @keyframes bubbleAppear {
    0% {
      opacity: 0;
      top: 40px;
    }
    100% {
      opacity: 1;
      top: 1px;
    }
  }
`

export const Bubble = styled.div`
  --r: 25px;
  --t: 30px;

  margin: 25px 25px 25px 0 !important;

  max-width: 200px;
  padding: calc(2 * var(--r) / 3);
  -webkit-mask: radial-gradient(var(--t) at var(--_d) 0, #0000 98%, #000 102%) var(--_d) 100%/calc(100% - var(--r)) var(--t) no-repeat, conic-gradient(at var(--r) var(--r), #000 75%, #0000 0) calc(var(--r) / -2) calc(var(--r) / -2) padding-box, radial-gradient(50% 50%, #000 98%, #0000 101%) 0 0/var(--r) var(--r) space padding-box;
  background: linear-gradient(135deg, var(--secondary-light), var(--primary-light)) border-box;
  color: var(--primary-background);

  p {
    color: var(--primary-background);
    font-size: 1rem;
  }

  &.left {
    --_d: 0%;
    border-left: var(--t) solid #0000;
    margin-right: var(--t);
    place-self: start;
  }

  &.right {
    --_d: 100%;
    border-right: var(--t) solid #0000;
    margin-left: var(--t);
    place-self: end;
  }

  opacity: 0;
  position: relative;


  img {
    height: 50px;
  }
`

export const LinksContainer = styled.div`
  a {
    margin: 10px;
  }
`

export const LinkButton = styled.div`
  display: flex;
  flex-direction: row;

  border: 2px solid var(--tertiary-background);
  padding: 5px 0;
  margin: 0 5px;
  border-radius: 25px;

  img {
    height: 30px;
    position: absolute;
    left: 0;
    margin: 0 0 0 20px;
    padding: 0;
    filter: brightness(100%);
  }

  p {
    font-size: 1rem;
    align-self: center;
    padding: 5px 0;
    margin: 0 auto;
    color: var(--tertiary-color);
    font-family: Roboto, sans-serif;
    font-weight: 300;
  }

  position: relative;

  transition: 0.28s ease;
  scale: 1.0;
  right: 0;
  bottom: 0;
  box-shadow: none;
  background: transparent;

  &:hover {
    transition: 0.36s ease;
    right: 3px;
    bottom: 5px;
    box-shadow: 3px 3px 2px var(--opacity-background);
    background: var(--secondary-background);

    p {
      filter: brightness(105%);
    }

    img {
      filter: brightness(105%);
    }
  }

`