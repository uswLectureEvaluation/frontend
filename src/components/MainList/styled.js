import { Button} from "@material-ui/core";
import styled from "styled-components";
import { Color } from "../../globalStyles";


export const BoxString1 = styled.span`
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    padding: 5px;
    font-size: 12px;
`

export const BoxString2 = styled.span`
    font-weight: bold;
    font-size: 1.3rem;
    margin-right: 0.7rem;
`

export const BoxString3 = styled.span`
    font-size: 1.3rem;
    font-weight: bold;
`


export const BoxString5 = styled(Button)`
&& {
    font-weight: bold;
    font-size: 12px;
    color: rgb(190, 190, 190);
    text-decoration: underline;
}
`

export const BoxString6 = styled.div`
    font-size: 12px;
`

export const BoxButton1 = styled(Button)`
&& {
    padding: 5px 15px 5px 15px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: rgb(52, 152, 219);
}
`
export const BoxButton2 = styled(Button)`
&& {
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

export const ModalString1 = styled.div`
    font-weight: bold;
    font-size: 1rem;
`
export const ModalString2 = styled.span`
    font-weight: bold;
    font-size: 1rem;
    padding-right: 0.5rem;
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

`

export const Title = styled.div`
    display: flex;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 0.7rem;
`

export const Professor = styled.div`
    display: flex;
    color: #515151;
`

export const Option = styled.div`
    display: flex;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    color: gray;
`


export const Rate = styled.span`
    color: #3DD3C4;
    font-weight: bold;
    font-size: 2rem;
    padding-left: 10px;
    vertical-align: bottom;
`

export const LectureWrapper = styled.div`
    border: 1px solid ${Color('border')};
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`

export const MarginTop = styled.div`
    padding: 14px 24px;
`
export const MarginRight = styled.span`
    margin-right: 6px;
`

export const StarFlex = styled.div`
    display: flex;
    padding-right: 1rem;
    background-color: #f9f9f9;
    padding: 8px 12px;

    &#top {
        border-top: 1px solid #eeeeee;
    }
`