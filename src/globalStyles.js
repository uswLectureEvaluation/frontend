import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --main-color: '#3dd3c4',
    --border-color: #e0e0e0;
    --font-color: #222222;
    --sub-font-color: #515151;

    --hover-color: #76d6bc;
    --accent-color: #ff7675;
}

* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Color = (props) => {
  switch (props) {
    case "main":
      return "#3dd3c4";
    case "border":
      return "#e0e0e0";
    case "font":
      return "#222222";
    case "sub-font":
      return "#515151";
    case "hover":
      return "#76d6bc";
    case "accent":
      return "#ff7675";
  }
};

export const Container = styled.div`
  z-index: 1;
  width: 100%;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;
