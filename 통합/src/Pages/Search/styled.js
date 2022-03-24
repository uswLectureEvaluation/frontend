import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;


export const Wrapper = styled.div`
    width:70%;
    margin: 0 auto;
    margin-top: 50px;
`

export const Title = styled.div`
    font-size : 2rem;
    font-weight : 1000;
    margin-bottom : 1rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 60px;
    background-color: #f2f2f2;
    border: none;
    border-radius: 10px;
`;

export const SearchResultWrapper = styled.div`
    display: flex;
    margin-top: 0.5rem;
`


export const SearchResultMenu = styled.div`
    display: flex;
    margin: 1rem;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;

    &:first-child {
        cursor: context-menu;
    }
`;

export const MyEvaluationWrapper = styled.div`
    border: 2px solid #f1f1f1;
    border-radius: 10px;

`