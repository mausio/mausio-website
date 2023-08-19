import styled from "styled-components";

export const ChatContainer = styled.div`
  min-height: 50vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: start;
  background-color: var(--opacity-background);
  backdrop-filter: blur(3px);
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  overflow: hidden;


  div {
    animation: bubbleAppear 0.5s ease-out forwards;
    -webkit-animation: bubbleAppear 1s ease-out forwards;
  }

  div:first-of-type {
    animation-delay: 0.2s;
    -webkit-animation-delay: 0.2s;
    margin: 20px 0;
  }

  div:nth-of-type(2) {
    animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
  }


  div:last-of-type {
    margin-bottom: 20px;
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

export const MediaLinesContainer = styled.div`

`

export const MediaLine = styled.div`
  width: 100vw;
`

export const Instagram = styled.div`
  height: 200px;
  width: 200px;
  background-image: url(InstaPic);
  background-repeat: repeat-x;
  background-size: 20px 20px;
`