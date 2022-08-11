import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import * as styles from '@mui/material/styles';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 95%;
`;

export const Title = styled.div`
  font-size: 20px;
  font-family: Pretendard;
  cursor: pointer;
`;

export const TitleLine = styled.div`
  margin-top: 18px;
  border-bottom: 1px solid #e0e0e0;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 95%;
  margin-top: 40px;
`;

export const CssTextField = styles.styled(TextField)({
  width: '100%',
  '& label.Mui-focused': {
    color: '#346cfd',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'black',
  },
  backgroundImage: `url('img/icon_search_24.svg')`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `99% -10%`,
});

export const TabWrapper = styled.div`
  display: flex;
  margin-top: 36px;
  width: 95%;
`;

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
`;

export const MajorBox = styled.div`
  width: 95%;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  min-height: 220px;
  overflow-y: scroll;
  padding: 5px;
`;

export const MajorSelect = styled.span`
  display: flex;
  align-items: center;
  font-family: Pretendard;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const SubmitButton = styled.div`
  background-color: #346cfd;
  width: 65%;
  color: #fff;
  text-align: center;
  padding: 14px;
  border-radius: 15px;
  margin-top: 30px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 550px) {
    width: 95%;
  }
`;

export const SearchIcon = styled.img`
  margin-right: 8px;
  color: #e0e0e0;
  &:hover {
    cursor: pointer;
  }
`;

export const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &#difficult {
    &:checked + ${MajorSelect} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${MajorSelect} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${MajorSelect} {
      color: #346cfd;
      background-color: #eeeeee;
    }
  }
  display: none;
`;
