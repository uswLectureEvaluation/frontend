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
    width: 100%;
`

export const SearchWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
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
    background-image: url("img/icon_search_24.svg");
    background-repeat: no-repeat;
    background-position: 98%;
    
`

export const HeadSelection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const Select = styled.select`
    height: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
    background-color: white;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 10px;
    font-size: 16px;
    border-color: #E0E0E0;
    &:focus-visible {
        outline: white solid 2px;
    }
    option {
        border-radius: 8px;
        color: black;
    }
`;

export const More = styled.div`
    font-weight: bold;
    cursor: pointer;
`

export const Img = styled.img`
    width: 20px;
    background-image: url("img/icon_color_fire_36.svg");
`

export const Soption = styled.div`
    background-image: url("img/icon_color_fire_36.svg");
`