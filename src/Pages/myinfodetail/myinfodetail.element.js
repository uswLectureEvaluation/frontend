import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const HeaderText = styled.div`
  font-weight: bold;
  font-size: 25px;
  padding-bottom: 10px;
`;

export const TextLink = styled(Button)`
  && {
    font-size: 20px;
    color: #a3a3a3;
    font-family: Pretendard;
  }
  &#selected {
    color: black;
  }
`;
