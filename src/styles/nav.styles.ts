import styled from "styled-components";


export const LogoTitle = styled.h1`
  position: relative;
  z-index: 100;
  margin: 20px auto 10px auto;
  font-size: 1.5rem;
  font-family: "Exo 2";
  font-weight: 600;
  padding: 6px 18px 10px 18px;
  border-radius: 60px;
  text-shadow: 0px 0px 1px var(--tertiary-color),
  0 0 3px var(--secondary-highlight),
  1px 1px .10px var(--tertiary-color);
  background: transparent;
  backdrop-filter: blur(5px) brightness(0.6);

  box-shadow: 0 0 33px -12px var(--secondary-highlight);
  transition: 0.4s ease-in;

  &:hover {
    box-shadow: 0 0 36px -7px var(--secondary-highlight);
    transition: 0.25s ease-out;
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 0 0 transparent;
    transition: 0.1s ease-out;
    cursor: pointer;
  }

  color: var(--primary-color);
`

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FooterContainer = styled.div`
  //position: fixed;
  //bottom: 0;
  position: relative;
  
  z-index: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0 14px 0;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 200px;
  }
  
  p{
    padding: 16px 14px;
    text-align: center;
    max-width: 60px;
    border-radius: 5px;
  }

`

export const FooterLinks = styled.p`
  padding: 16px 14px;
  text-align: center;
  max-width: 60px;
  border-radius: 5px;
  scale: 1.0;
  cursor: pointer;

  &:hover{
    scale: 1.05;
  }

  &:active{
    scale: 0.95;
  }

`