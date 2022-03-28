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

    if(props == 'main'){
        return '#3dd3c4'
    }else if(props =='border'){
        return '#e0e0e0'
    }else if(props == 'font'){
        return '#222222'
    }else if(props == 'sub-font'){
        return '#515151'
    }else if(props =='hover'){
        return '#76d6bc'
    }else if(props=='accent'){
        return '#ff7675'
    }

}
   


export const Container = styled.div`
z-index: 1;
width: 100%;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;




export default GlobalStyle