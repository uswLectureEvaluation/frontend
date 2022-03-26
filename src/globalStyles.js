import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;




export default GlobalStyle