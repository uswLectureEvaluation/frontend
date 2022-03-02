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
`

export const Title = styled.div`
    font-size : 2rem;
    font-weight : 1000;
    margin-bottom : 1rem;
`;

export const Input = styled.input`
    width: 80%;
    height: 60px;
    background-color: #f2f2f2;
    border: 1px solid #d2d2d2;
    border-radius: 10px;
`;