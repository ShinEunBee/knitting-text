import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff:wght@400;500;600;700') format('woff');
    font-weight: 100;
    font-display: swap;
}
  body {
    margin: 0;
    background: hsl(358, 100%, 87%);
    color: #2b2b2b;
    font-family: Pretendard;
    line-height: 1.6;
  }
`;
