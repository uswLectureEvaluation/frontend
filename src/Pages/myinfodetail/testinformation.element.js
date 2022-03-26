import { Button} from "@material-ui/core";
import styled from "styled-components";


export const YearText = styled.span`
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    padding: 5px;
    font-size: 12px;
`

export const SubjectText = styled.span`
    font-weight: bold;
    font-size: 16px;
    padding-right: 5px;
`

export const ProfessorName = styled.span`
    font-size: 13px;    
`

export const EditButton = styled(Button)`
&&{
    padding: 5px 15px 5px 15px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: rgb(52, 152, 219);
}
`
export const DeleteButton = styled(Button)`
&&{
    padding: 5px 15px 5px 15px;
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: rgb(230, 126, 34);
}
`

export const TestInfoDetail = styled.span`
    font-size: 12px;
    padding-right: 10px;
`