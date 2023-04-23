import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ isLight?: boolean }>`
  html,body,div {
    background-color: ${props=> props.isLight? 'white':'#001e3c'};
    // @media (min-width: 768px) { font-size: 0.9rem; }
    // @media (max-width: 768px) { font-size: 0.85rem;  }
  }
  textarea {
  }
`;

export default GlobalStyle;