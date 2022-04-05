import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const BoxString1 = styled.span`
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px;
  font-size: 12px;
`;

export const BoxString2 = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 0.7rem;
`;

export const BoxString3 = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

export const BoxString4 = styled.span`
  font-size: 13px;
`;

export const BoxString5 = styled(Button)`
  && {
    padding-left: 10px;
    font-size: 12px;
    color: rgb(190, 190, 190);
    text-decoration: underline;
  }
`;

export const BoxString6 = styled.div`
  font-size: 12px;
`;

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
`;
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
`;

export const ModalString1 = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;
export const ModalString2 = styled.span`
  font-weight: bold;
  font-size: 1rem;
  padding-right: 0.5rem;
`;

export const TempMargin = styled.div`
  margin-top: 0.5rem;
`;
