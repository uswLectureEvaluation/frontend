import { Button, TextField, Grid } from "@material-ui/core";
import styled from "styled-components";

export const SearchButton = styled(Button)`
    &&{
        margin-top: 10px;
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
    margin-bottom: 20px;
    font-size: 20px; 
    font-weight: bold
`

export const String2 = styled.div`
    font-size: 15px;
    font-weight: normal
`

export const IdInput = () => {
    return (
        <Grid xs={12}>
            <TextField
                margin="dense"
                required
                id="id"
                variant="outlined"
                label="Input your SUGANG ID"
                name="id"
                autoComplete="id"
                autoFocus
            ></TextField>
        </Grid>
    )
}

export const EmailInput = () => {
    return (
        <Grid xs={12}>
            <TextField
                margin="dense"
                required
                id="email"
                variant="outlined"
                label="Input your Email"
                name="email"
                autoComplete="email"

            ></TextField>
        </Grid>
    )
}

export const String3 = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: rgb(158,158,158);
    padding-top: 20px;
`