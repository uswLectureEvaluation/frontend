import { Button } from "@material-ui/core";
import styled from "styled-components";

export const BoldText = styled.div`
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
`

export const Circle = styled.div`
    border-radius: 100%;
    width: 120px;
    height: 120px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(224, 224, 224);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 20px
`
export const PointText = styled.div`
    font-weight: bold;
    font-size: 22px;
    color: rgb(231, 76, 60);
`

export const SeperateLine = styled.div`
    @media only screen and (max-width: 768px) {
     display:none
  }
    border-right: 1px solid black; 
    width: 0.1px; 
    height: 150px;
    margin-left: 10px 
`


export const NormalText = styled.div`
    padding: 15px;
    padding-left: 0px;
    font-weight: normal;
    font-size: 16px;
    
`

export const RedText = styled.span`
    font-weight: normal;
    font-size: 16px;
    color: rgb(231,76,60);
`
export const BlueText = styled(RedText)`
    color: rgb(52,152,219)
`

export const SmallText = styled.span`
    font-weight: bold;
    font-size: 14px;
    padding: 20px;
`

export const GrayButton = styled(Button)`
&& {
        font-size: 12px;
        font-weight: bold;
        color: rgb(127, 127, 127);
        text-align: center;
        background-color: rgb(220, 220, 220);
        padding: 7px 50px 7px 50px;
        float: right;
}
`;

export const TextLink = styled.div`
    padding: 8px;
    border-bottom: 1px solid black;
    font-size: 15px
`