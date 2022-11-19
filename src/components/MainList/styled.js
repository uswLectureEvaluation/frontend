import styled from 'styled-components';
import { Color } from '../../GlobalStyle';

export const Minute = styled.span`
  font-size: 12px;
  color: #515151;
  text-decoration: underline;
  padding-left: 6px;
  font-family: 'Pretendard-Regular';
  &:hover {
    cursor: pointer;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  display: flex;
  font-size: 18px;
  margin-right: 0.7rem;
`;

export const Professor = styled.div`
  display: flex;
  color: #515151;
  font-size: 14px;
  font-family: 'Pretendard-Regular';
  margin: 0.3rem 0;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 12px;
`;

export const RateWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-top: 14px;
`;

export const Rate = styled.span`
  color: #336af8;
  font-size: 18px;
  padding-left: 5px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

export const LectureWrapper_2 = styled.div``;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid ${Color('border')};
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Pretendard-Medium';
`;

export const MarginTop = styled.div`
  padding: 14px 24px;
`;

export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding: 6px 12px;
  font-size: 13px;
  &#top {
    border-top: 1px solid #e0e0e0;
  }
  &#bottom {
  }
  &#between {
    justify-content: space-between;
  }
`;

export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;

export const GridWrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 2%;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const FullWrapSub = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
