import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "@material-ui/core";
import styled from "styled-components";


export const Logo = styled.div`
    color: #4B89DC;
    font-size: 46px;
    font-family: HanSans;
    font-weight: bold

`;

export const Box1 = styled.div`
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginButton = styled(Button)`
    &&{
        font-size: 14px;
        font-weight: bold;
        color: rgb(255, 255, 255);
        text-align: center;
        line-height: 2em;
        background-color: rgb(52, 152, 219);
        padding: 5px 100px 5px 100px
    }

`;

export const IdPwSearchLink = styled.div`
      padding: 10px;
      font-size: 16px;
      color:rgb(158,158,158);
      font-weight: bold
`

export const IdInput = () => {
    return(
        <TextField
            margin="normal"
            required
            fullWidth
            id="id" 
            label="아이디 입력"
            name="id"
            autoComplete="id"
            autoFocus
        />
    );
}

export const PwInput = () => {
    return(
        <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호 입력"
            type="password"
            id="password"
            autoComplete="current-password"
            />
    )
}
