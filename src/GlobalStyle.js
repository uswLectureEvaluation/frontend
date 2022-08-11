import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
    font-family: 'Pretendard-Medium', sans-serif;
  }
  :root {
      --main-color: '#336af8',
      --border-color: #e0e0e0;
      --font-color: #222222;
      --sub-font-color: #515151;
      --hover-color: #76d6bc;
      --accent-color: #ff7675;
  }
`;

export const Color = (props) => {
  if (props === 'main') {
    return '#336af8';
  } else if (props === 'border') {
    return '#e0e0e0';
  } else if (props === 'font') {
    return '#222222';
  } else if (props === 'sub-font') {
    return '#515151';
  } else if (props === 'hover') {
    return '#76d6bc';
  } else if (props === 'accent') {
    return '#ff7675';
  }
};

export default GlobalStyle;
