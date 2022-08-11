import styled from 'styled-components';

export const ModalOpen = styled.span`
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
  font-weight: bold;
  text-align: center;
  margin-top: 10rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 8px;
`;

export const Major = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #515151;
  &#border {
    color: #e0e0e0;
    padding: 0px 5px;
  }
`;

export const Professor = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #515151;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  color: gray;
`;

export const Rate = styled.span`
  color: #346cfd;
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
    @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 768px) {
    display: flex;
    padding: 14px 24px 0px 24px;
    flex-direction: column;
  }
`;
export const DataColor = styled.div`
  padding-left: 0.7rem;
  font-weight: 500;
  &#black {
    color: black;
  }
  &#cyan {
    color: #346cfd;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding: 5px 12px;
  font-size: 13px;
  &#top {
    padding: 8px 12px 0px 12px;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
  }
  &#between {
    justify-content: space-between;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const YearText = styled.span`
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
  font-size: 1rem;
  padding-top: 0.7rem;
  word-break: break-all;
`;
export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;
export const EditButton = styled.span`
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
export const DeleteButton = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #a3a3a3;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;
