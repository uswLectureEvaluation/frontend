import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "@material-ui/core";
import styled from "styled-components";

export const SearchButton = styled(Button)`
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

export const Box1 = styled.div`
    border: 2px solid rgb(158,158,158);
    border: 2px solid rgba(158,158,158,.5);
    padding: 40px;
    border-radius: 10px;
    
`

export const Logo = styled.div`
    color: #4B89DC;
    font-size: 50px;
    font-family: HanSans;
    font-weight: bold

`;

export const String1 = styled.div`
    padding-bottom: 30px;
    border-bottom: 2px solid rgb(158,158,158);
    font-size: 20px; 
    font-weight: bold
`

export const String2 = styled.div`
    font-size: 15px;
    font-weight: normal
`

export const IdInput = () => {
    return(
        <TextField 
        margin="normal"
        required
        id="outlined-basic"
        variant="outlined"
        label="Input your ID"
        name="id"
        autoComplete="id"
        autoFocus
        ></TextField>
    )
}

export const String3 = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: rgb(158,158,158);
    padding-top: 20px;
`
