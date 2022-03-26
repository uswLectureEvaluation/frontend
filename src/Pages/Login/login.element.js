import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const WrapperBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    @media only screen and (max-width: 500px) {
        border: 1px solid rgb(158,158,158);
        border: 1px solid rgba(158,158,158,.5);
        border-radius: 15px;
     }
   
`

export const Logo = styled.div`
    font-size : 4vh;
    font-weight : 1000;
    font-family: "Pretendard-Black";
    font-weight: bold
`;


/*export const LoginButton = styled(Button)`
    &&{
        font-size: 14px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 2em;
        background-color: rgb(52, 152, 219);
        padding: 5px 100px 5px 100px
    }
`;*/

export const LoginButton = styled.button`
    margin: 0;
    width: 100%;
    padding: 0 1rem;
    padding-top: 0.6rem;
    border:none;
    padding-bottom: 0.5rem;
    background: #4b89dc;
    color: white;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    transition: .3s all;
    &:hover, &:active {
        background: #4b10f2;
    }
    &:disabled {
        background-color: rgba(170,170,170);
        cursor : auto;
    }
`;

export const IdPwSearchLink = styled.div`
    &:hover, &:active {
        color: #4b10f2;
    }
      padding: 10px;
      font-size: 16px;
      color:rgb(158,158,158);
      font-weight: bold

`





export const IdInput = ({ propsFunction }) => {
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="아이디 입력"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={propsFunction}
        />
    );
}

export const PwInput = ({ propsFunction }) => {
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호 입력"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={propsFunction}
        />
    )
}