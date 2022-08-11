import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-family: 'Pretendard';
  flex-direction: column;
  width: 100%;
  &#button {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  padding: 2rem 1.5rem 1rem;
  font-weight: 500;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;
export const TitleButton = styled.button`
  font-size: 18px;
  padding: 2rem 1.5rem 1rem;
  font-weight: 500;
  border: none;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const Score = styled.span`
  margin: 2px 0 1px 24px;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.32px;
  color: #346cfd;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  @media only screen and (max-width: 550px) {
    padding-left: 0rem;
    margin-bottom: 0.7rem;
  }
`;

export const Content = styled.form`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  &#group {
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 550px) {
    display: none;
    &#content {
      display: flex;
      margin: 0.5rem 0;
      align-items: center;
    }
  }
`;

export const MobileContent = styled.form`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    &#semester {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const ContentTitle = styled.div`
  width: 25%;
  &#title {
    @media only screen and (max-width: 1100px) {
      width: 100%;
    }
  }
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SmallTitle = styled.div`
  font-size: 12px;
`;

export const WriteButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: #222;
`;

export const TextField = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  resize: none;
  padding: 22px;
  outline-color: #346cfd;
  border: solid 1px #e0e0e0;
  border-radius: 15px;
  background-color: #f9f9f9;
  @media only screen and (max-width: 550px) {
    min-height: 150px;
    font-size: 16px;
    transform: scale(0.86);
  }
`;

export const EditButton = styled.div`
  font-size: 16px;
  font-weight: 600;
  width: 350px;
  padding: 12px 20px;
  text-align: center;
  color: #ffffff;
  background-color: #346cfd;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 550px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

export const FormCheckText = styled.span`
  font-size: 1vw;
  padding: 8px 15px;
  background: #eee;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  margin-right: 8px;
  @media only screen and (max-width: 1100px) {
    font-size: 12px;
    padding: 6px 9px;
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
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #346cfd;
      font-weight: 600;
    }
  }
  display: none;
`;

export const FormCheckMulti = styled.input.attrs({ type: 'checkbox' })`
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
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #346cfd;
      font-weight: 600;
    }
  }
  display: none;
`;
// 여기까지
