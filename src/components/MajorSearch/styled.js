import styled from 'styled-components'
import { TextField } from '@material-ui/core';
import * as styles from '@mui/material/styles';

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 95%;
`

export const Title = styled.div`
    font-size: 20px;
    font-family: Pretendard;
`

export const TitleLine = styled.div`
    margin-top: 18px;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
`

export const InputWrapper = styled.div`
    width: 95%;
    margin-top: 40px;
`

export const CssTextField = styles.styled(TextField)({
    width: "100%",
    '& label.Mui-focused': {
      color: '#346cfd',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'black',
    },
  });

export const TabWrapper = styled.div`
    display: flex;
    margin-top: 36px;
    width: 95%;
`

export const TabMenu = styled.div`
    font-size: 16px;
    color: #a3a3a3;
    font-family: Pretendard;
    font-weight: 400;
    margin-right: 15px;
    &#selected {
    color: black;
    }
    &:hover {
    cursor: pointer;
    }
`

export const MajorBox = styled.div`
    width: 95%;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    min-height: 220px;
`

export const SubmitButton = styled.div`
    background-color: #346cfd;
    color: #fff;
    text-align: center;
    padding: 14px 160px;
    border-radius: 15px;
    margin-top: 30px;
`