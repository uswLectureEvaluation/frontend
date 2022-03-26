import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const WrapperBox = styled.div`
    padding: 40px;
    @media only screen and (max-width: 500px) {
        border: 1px solid rgb(158,158,158);
        border: 1px solid rgba(158,158,158,.5);
        border-radius: 15px;
    }
    
`

export const BoldText = styled.div`
    font-size : 4vh;
    margin-bottom: 20px;
    padding-bottom: 30px;
    font-weight : 1000;
    text-align: center;
    font-family: "Pretendard-Black";
    border-bottom: 2px solid rgb(158,158,158);

`;


/*export const SearchButton = styled(Button)`
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

export const SearchButton = styled.button`
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


/*export const BoldText = styled.div`
    padding-bottom: 30px;
    border-bottom: 2px solid rgb(158,158,158);
    font-size: 20px; 
    font-weight: bold
`*/

export const NormalText = styled.div`
    font-size: 15px;
    font-weight: normal
`

export const AccountInput = ({ propsFunction }) => {
    return (
        <TextField
            margin="normal"
            required
            id="outlined-basic"
            variant="outlined"
            label="example@suwon.ac.kr"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={propsFunction}
        ></TextField>
    )
}