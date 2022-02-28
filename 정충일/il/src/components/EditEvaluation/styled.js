import { Button, TextField} from "@material-ui/core";
import styled from "styled-components";


export const BoxString1 = styled.div`
    font-size: 16px;
    padding-top: 10px;
    
`

export const BoxString2 = styled.span`
    font-weight: bold;
    font-size: 22px;
`

export const BoxString3 = styled.span`
    font-size: 15px;
    font-weight: bold;
`

export const BoxString4 = styled.span`
    font-size: 16px;    
    font-weight: bold;
`

export const BoxString5 = styled(Button)`
    padding-left: 10px;
    font-size: 16px;
    color: rgb(190, 190, 190);
    text-decoration: underline;

`
export const ModalLine = styled.div`
    border-bottom : 1px solid;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const ModalBar = styled.div`
    padding: 16px;
    border-radius: 10px;
    background-color: rgb(241, 196, 15);
`

export const BoxButton1 = styled(Button)`
&&{
    padding: 5px 10px 5px 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: black;
    margin-right: 10px;
    margin-top: 10px;
}
`

export const EvaluationInput = () => {
    return(
        <TextField
        id="outlined-multiline-static"
        label="수정해주세요"
        multiline
        variant="outlined"
        fullWidth
        rows={8}
        style={{marginBottom:'20px'}}
      />
    )
}

export const EditButton = styled(Button)`
&&{
    padding: 5px 40px 5px 40px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(52, 152, 219);
    color: white;
    margin-right: 10px;
    float: right;
}
`;

export const CancelButton = styled(Button)`
&&{
    padding: 5px 15px 5px 15px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(231, 76, 60);
    color: white;
    margin-right: 10px;
    float: right;
}
`;