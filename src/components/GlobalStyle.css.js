import { createGlobalStyle } from 'styled-components';

import InterVarWoff2 from '../assets/fonts/Inter.var.woff2';

export const fontFaceRules = `
  @font-face {
    font-family: "Inter";
    src: url("${InterVarWoff2}") format('woff2 supports variations'),
         url("${InterVarWoff2}") format('woff2-variations');
    font-weight: 100 900;
  }
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    font-size: 16px;
  }

  .container {
    width: 90%;
    max-width: 1138px;
    margin: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;