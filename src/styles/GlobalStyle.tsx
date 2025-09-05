import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }

  @font-face {
    font-family: 'Pretendard';
    src: url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable.css");
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
