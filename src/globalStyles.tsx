import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ isLight?: boolean }>`
  html {
    scroll-behavior: smooth;
  }
  html, body {
    background-color: ${props => props.isLight ? 'white' : '#0a1236'};
    background-image: ${props => props.isLight
      ? 'none'
      : 'radial-gradient(ellipse at 50% -10%, #1a2a6c 0%, #0f1a4a 30%, #0a1236 65%, #050921 100%)'};
    background-attachment: fixed;
    min-height: 100vh;
  }
  #root {
    background-color: ${props => props.isLight ? 'white' : 'transparent'};
    min-height: 100vh;
  }
  section {
    scroll-margin-top: 80px;
    padding: 4rem 0;
  }
  @media (max-width: 640px) {
    section { padding: 2.5rem 0; }
  }
`;

export default GlobalStyle;