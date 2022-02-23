import styled from "styled-components";
import {Button} from "@material-ui/core";



export const String1 = styled.div`
    font-weight: bold;
    font-size: 32px;
    padding-bottom: 10px
`


export  const StringLink = styled(Button)`
    &&{
        color: black;
        font-weight: bold;
        font-size: 24px;
        padding: 10px;
    }
`