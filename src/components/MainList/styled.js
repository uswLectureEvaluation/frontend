import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Color } from '../../globalStyles';

export const Minute = styled.span`
  font-size: 0.7rem;
  color: #515151;
  text-decoration: underline;
  padding-left: 6px;

  &:hover {
    cursor: pointer;
  }
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

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.1rem;
  margin-right: 0.7rem;
`;

export const Professor = styled.div`
  display: flex;
  color: #515151;
  font-size: 0.8rem;
  margin: 0.3rem 0;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 0.3rem;
`;

export const RateWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Rate = styled.span`
  color: #346cfd;
  font-size: 1.2rem;
  padding-left: 4px;
`;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid ${Color('border')};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const MarginTop = styled.div`
  padding: 14px 24px;
`;
export const MarginRight = styled.span`
  margin-right: 6px;
  font-size: 1rem;
`;

export const StarFlex = styled.div`
  display: flex;
  font-size: 0.6rem;
  padding-right: 1rem;
  background-color: #f9f9f9;
  padding: 8px 12px;
  align-items: center;

  &#top {
    border-top: 1px solid #eeeeee;
  }
`;

export const FlexWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

   @media screen and (max-width: 768px) {
    width: 100%;
  display: flex;

  }
`;

export const FlexWrapSub = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
 @media screen and (max-width: 768px) {
    width: 49%;
  display: flex;
  flex-direction: column;

  }
  

`;
