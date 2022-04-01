import styled from "styled-components"
import { TextField } from "@material-ui/core"
import * as styles from "@mui/material/styles"

export const Title = styled.div`
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

export const Text = styled.div`
    font-size: 2vw;
    margin-bottom: 1.5rem;
    text-align: center;
    font-family: "Pretendard-SemiBold";
`

export const Checking = styled.div`
    font-size: 1.2vh;
`

export const Label = styled.label`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    font-size: 0.8rem;
    input {
        margin: 0 10px 0 0;
    }
    &#last {
        padding-top: 8px;
        padding-bottom: 3vh;
    }
`

export const EmailWrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    font-weight: bold;
`

export const AgreeButton = styled.button`
    border: 0;
    background: 0 0;
    cursor: pointer;
    text-decoration: underline;
    color: gray;
    line-height: 1.5;
    display: block;
    float: right;
    font-size: 12px;
`

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;

    &#top {
        align-items: stretch;
    }
`

export const Wrapper = styled.div`
    margin: 0 auto;
    /* PC (해상도 1024px)*/
    @media all and (min-width: 1024px) {
        width: 500px;
    } /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/

    @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 400px;
    } /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/

    @media all and (max-width: 767px) {
        width: 300px;
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

export const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

export const Img = styled.img``

export const Button = styled.button`
    margin: 0;
    padding: 0 1rem;
    padding-top: 0.6rem;
    margin: 8px 0;
    border: none;
    padding-bottom: 0.5rem;
    background: ${(props) => props.background};
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    transition: 0.3s all;
    &:disabled {
        background-color: rgba(170, 170, 170);
        cursor: auto;
    }

    &#check {
        position: relative;
        left: 10px;
    }
`
export const CssTextField = styles.styled(TextField)({
    '& label.Mui-focused': {
        color: '#3dd3c4',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#3dd3c4',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: '#3dd3c4',
      },   
})