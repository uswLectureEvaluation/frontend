import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding-top: 4rem;
    justify-content: space-between;
`

export const Img = styled.img``

export const Title = styled.div`
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const Button = styled.button`
    margin: 10px 0;
    width: 100%;
    padding: 0.5rem 1rem;
    border: none;
    background: ${(props) => props.background};
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
`

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

export const Info = styled.div`
    font-size: 0.8rem;
`
