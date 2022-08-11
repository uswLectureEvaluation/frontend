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
  @media only screen and (max-width: 960px) {
    justify-content: center;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media only screen and (max-width: 480px) {
    font-family: 'Pretendard-Medium';
    font-size: 24px;
    font-weight: 600;
  }
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
  font-size: 1.1rem;
  border-radius: 12px;
  font-family: 'Pretendard-SemiBold';
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;

  @media only screen and (max-width: 480px) {
    margin-top: 5rem;
  }
`;
export const SearchButton = styled.button`
  border: none;
  border-bottom: 1px solid;
  padding: 0;
  margin-left: 10px;
  font-family: 'Pretendard-Light';
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
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
