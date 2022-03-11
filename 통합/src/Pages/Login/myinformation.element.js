import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Line1 = styled.div`
    @media only screen and (max-width: 768px) {
     display:none
  }
    border-right: 1px solid black; 
    width: 0.1px; 
    height: 180px;
    margin-left: 30px 
`

export const String1 = styled.div`
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
`

export const String2 = styled.div`
    padding: 15px;
    padding-left: 0px;
    font-weight: normal;
    font-size: 16px;
    
`

export const String3 = styled.div`
    font-weight: bold;
    font-size: 22px;
    color: rgb(231, 76, 60);
`
export const String4 = styled.span`
    font-weight: bold;
    font-size: 14px;
    padding: 20px;
`

export const ColorString1 = styled.span`
    font-weight: normal;
    font-size: 16px;
    color: rgb(231,76,60);
`
export const ColorString2 = styled.span`
    font-weight: normal;
    font-size: 16px;
    color: rgb(52,152,219)
`


export const Circle1 = styled.div`
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

export const Button1 = styled(Button)`
        font-size: 12px;
        font-weight: bold;
        color: rgb(127, 127, 127);
        text-align: center;
        background-color: rgb(220, 220, 220);
        padding: 7px 50px 7px 50px;
        float: right;
`;

export const TextButton = styled.div`
    padding: 8px;
    border-bottom: 1px solid black;
    font-size: 15px
`