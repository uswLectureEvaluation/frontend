import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;
`

export const SearchContainer = styled.div`
    display: flex;
`

export const SearchWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const SearchTitle = styled.div`
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 4rem;
`

export const SearchInput = styled.input`
    width: 100%;
    padding-left: 20px;
    height: 40px;
    border-radius: 20px;
    border: 2px solid #3DD3C4;
    margin: 1.5rem 0;
`

export const HeadSelection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

