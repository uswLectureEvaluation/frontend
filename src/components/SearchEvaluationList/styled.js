import styled from 'styled-components';

export const ModalOpen = styled.span`
  font-family: 'Pretendard-Regular';
  font-size: 12px;
  color: #222;
  text-decoration: underline;
  margin-left: 11px;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;
  font-family: 'Pretendard-Semibold';
  text-align: center;
  margin-top: 10rem;
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  align-items: center;
`;

export const Rate = styled.span`
  color: #336af8;
  font-family: 'Pretendard-Medium';
  font-size: 18px;
  font-weight: 500;
  padding-left: 5px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

export const LectureWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const MarginTop = styled.div`
  &#top {
    padding: 14px 24px 0px 24px;
    @media only screen and (max-width: 550px) {
      display: none;
    }
  }
  &#bottom {
    padding: 0px 24px 14px 24px;
    margin-top: 5px;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    padding: 14px 24px 0px 24px;
    flex-direction: column;
  }
`;
export const DataColor = styled.div`
  padding-left: 0.7rem;
  font-family: 'Pretendard-Medium';
  &#black {
    color: black;
  }
  &#cyan {
    color: #336af8;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 1rem;
  padding: 5px 12px;
  font-family: 'Pretendard-Medium';
  font-size: 13px;
  &#top {
    padding: 8px 12px 0px 12px;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
  }
  &#between {
    justify-content: space-between;
    font-family: 'Pretendard-Light';
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
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Pretendard-Regular';
  font-size: 1rem;
  padding-top: 0.7rem;
  word-break: break-all;
`;
export const PaddingRight = styled.span`
  padding-right: 0.7rem;
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
