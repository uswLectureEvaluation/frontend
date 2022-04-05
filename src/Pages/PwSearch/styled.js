import styled, { createGlobalStyle } from 'styled-components';
import { TextField } from '@material-ui/core';
import * as styles from '@mui/material/styles';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 8rem 0;
  justify-content: space-between;
`;

export const Img = styled.img``;

export const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 1rem;
  padding-bottom: 0.6rem;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  background: ${(props) => props.background};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 12px;
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const CssTextField = styles.styled(TextField)({
  '& label.Mui-focused': {
    color: '#346cfd',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#346cfd',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: '#346cfd',
  },
});

export const Sub = styled.div`
  font-size: 0.8rem;
  font-family: 'Pretendard-SemiBold';
`;
