import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Content = styled.div`
    border-radius: 10px; 
    border: 1px solid rgb(224, 224, 224);
    padding: 1rem 2rem;
    margin: 10px 0;
`

export const Color = styled.div`
    color: black;
`

export const TitleWrapper = styled.div`
    display: flex;

    &#top {
        justify-content: space-between;
    }
`

export const Wrapper = styled.div`
`

export const Title = styled.div`
    font-size : 2.5rem;
    font-weight : 1000;
    margin-bottom : 1rem;
    text-align: center;

    &#sub {
        font-size: 1.5rem;
    }
`

export const Professor = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
`

export const Option = styled.div`
    border-radius: 10px;
    background-color: rgb(224,224,224);
    text-align: center;
    padding: 0.2rem 0.5rem;
    margin: 0 0.5rem;

    &#type {
        height: 25px;
    }
`

export const Index = styled.div`
    font-size : 1.7rem;
    font-weight : 1000;
    margin: 0.2rem 0;
    text-align: center;
    display: flex;
    width: 280px;
`

export const IndexWrapper = styled.div`
    display: flex;
    
    &#first {
        margin-top: 2rem;
    }
`

export const IndexGroup = styled.div`
    padding: 10px;
    width: 140px;
    text-align: left;
    display: flex;
`