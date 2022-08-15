import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  align-items: center;
`;

export const LectureWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const MarginTop = styled.div`
  &#top {
    padding: 14px 24px 0px 24px;
  }
  &#bottom {
    padding: 0px 24px 14px 24px;
    margin-top: 5px;
  }
`;
export const DataColor = styled.div`
  font-weight: 500;
  &#cyan {
    color: #336af8;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 11px;
  font-family: 'Pretendard-Light';
  font-size: 13px;
  @media screen and (max-width: 550px) {
    font-size: 12px;
    padding: 2px 10px;
  }
  &#top {
    padding: 8px 12px 0px 12px;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
  }
  &#between {
    justify-content: space-between;
  }
  &#black {
    font-weight: 500;
    font-family: 'Pretendard-Medium';
  }
  &#data {
    padding-right: 0px;
    font-family: 'Pretendard-Medium';
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const YearText = styled.span`
  font-family: 'Pretendard-Regular';
  font-size: 14px;
  padding: 4.5px 13px 4.5px 13px;
  border-radius: 12.5px;
  background-color: #eee;
  margin-right: 12px;
`;

export const EvaluationDetail = styled.div`
  word-break: break-all;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  padding-top: 0.7rem;
`;

export const EditButton = styled.span`
  font-family: 'Pretendard-Medium';
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #a3a3a3;
  float: right;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
