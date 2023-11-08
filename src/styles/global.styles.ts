import {createGlobalStyle} from 'styled-components';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ffffff;
    --secondary-color: #c1c1c2;
    --tertiary-color: #8a94a1;

    --primary-background: #000000;
    --secondary-background: #141516;
    --tertiary-background: #1d2026;
    --opacity-background: rgb(31, 32, 33, 0.58);

    --primary-highlight: #8affe4;
    --secondary-highlight: #71deff;
    --primary-light: rgba(135, 255, 210, 0.68);
    --secondary-light: rgba(110, 210, 255, 0.7);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    background-color: transparent;
    color: var(--primary-color);
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1.25;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Roboto, Sans-Serif;
    background-color: var(--primary-background);

    position: relative;
    z-index: -10;
    
    //TODO: Remove Scrollbar
    
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: transparent;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: transparent;
    }
  }
  
  #root{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    overflow: scroll;
  }

  p {
    font-size: 0.85rem;
    font-weight: 400;
    text-align: justify;
  }

  h1 {
    font-size: 1.45rem;
    font-weight: 800;
    margin: 2px 0 20px 0;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 800;
    margin: 2px 0 16px 0;
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 800;
    margin: 2px 0 10px 0;
  }

  ol, ul {
    list-style: none;
  }

  .MuiAutocomplete-popper {
    .MuiPaper-root {
      background-color: var(--tertiary-background);

      li {
        color: var(--primary-color);

        &:hover {
          background-color: var(--primary-background);
          border-radius: 20px;
        }
      }
    }
  }

`

export default GlobalStyle;