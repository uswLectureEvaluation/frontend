import { Button, TextField} from "@material-ui/core";
import styled from "styled-components";


export const SubjectText = styled.span`
    font-weight: bold;
    font-size: 22px;
`

export const SubjectDetail = styled.span`
    font-size: 14px;
    font-weight: bold;
`

export const DetailSelectButton = styled(Button)`
&&{
    padding: 5px 10px 5px 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: black;
    margin-right: 10px;
    margin-bottom: 10px;
}
`

export const ModalLine = styled.div`
    border-bottom : 1px solid;
    margin-top: 20px;
    margin-bottom: 20px;
`


export const EvaluationInput = (props) => {
    return(
        <TextField
        id="outlined-multiline-static"
        label={props.content}
        multiline
        variant="outlined"
        fullWidth
        rows={8}
        onChange={props.propsfunction}
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

export const SelectBox = () => {
	return (
		<select>
			<option key="2020-1" value="2020-1">2020 - 1</option>
			<option key="2020-2" value="2020-2">2020 - 2</option>
			<option key="2021-1" value="2021-1">2021 - 1</option>
		</select>
	);
};