import { TextField, Grid } from "@material-ui/core"
import styled from "styled-components"

export const WrapperBox = styled.div`
    padding: 40px;
    @media only screen and (max-width: 500px) {
        border: 1px solid rgb(158, 158, 158);
        border: 1px solid rgba(158, 158, 158, 0.5);
        border-radius: 15px;
    }
`
/*export const Logo = styled.div`
    color: #4B89DC;
    font-size: 50px;
    font-family: HanSans;
    font-weight: bold
`;*/

export const BoldText = styled.div`
    padding-bottom: 30px;
    border-bottom: 2px solid rgb(158, 158, 158);
    margin-bottom: 20px;
    font-size: 4vh;
    font-weight: 1000;
    text-align: center;
    font-family: "Pretendard-Black";
`
export const NormalText = styled.div`
    font-size: 15px;
    font-weight: normal;
`

/*export const SearchButton = styled(Button)`
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
`;*/

export const SearchButton = styled.button`
    margin-top: 10px;
    width: 100%;
    padding: 0 1rem;
    padding-top: 0.6rem;
    border: none;
    padding-bottom: 0.5rem;
    background: #4b89dc;
    color: white;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    transition: 0.3s all;
    &:hover,
    &:active {
        background: #4b10f2;
    }
    &:disabled {
        background-color: rgba(170, 170, 170);
        cursor: auto;
    }
`

export const SmallText = styled.div`
    font-size: 12px;
    font-weight: bold;
    color: rgb(158, 158, 158);
    padding-top: 20px;
`

export const IdInput = ({ propsfunction }) => {
    return (
        <Grid xs={12}>
            <TextField
                margin="dense"
                required
                id="id"
                variant="outlined"
                label="Input your SUWIKI ID"
                name="id"
                autoComplete="id"
                autoFocus
                onChange={propsfunction}
            ></TextField>
        </Grid>
    )
}

export const EmailInput = ({ propsfunction }) => {
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
                onChange={propsfunction}
            ></TextField>
        </Grid>
    )
}
