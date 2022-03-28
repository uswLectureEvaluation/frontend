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
    width: 100%;
    margin: 0 auto;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;
`
export const Content = styled.div`
    border-radius: 10px; 
    border: 1px solid rgb(224, 224, 224);
    padding: 1rem 2rem;
    margin: 10px 0;
`
