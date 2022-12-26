import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
  }
  :root {
      --main-color: #336af8,
      --border-color: #e0e0e0;
      --font-color: #222222;
      --sub-font-color: #515151;
      --hover-color: #76d6bc;
      --accent-color: #ff7675;
  }

  body {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
  }

  #root > div{
    min-height: 60vh;
  }
`;

export default GlobalStyle;
