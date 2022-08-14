import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Pretendard-Medium';
  &#button {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  padding: 2rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const TitleButton = styled.button`
  font-size: 18px;
  padding: 2rem;
  padding-bottom: 1rem;
  border: none;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const Score = styled.span`
  margin: 2px 0 1px 24px;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.32px;
  color: #336af8;
  &#mobile {
    margin-right: 30px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  @media only screen and (max-width: 550px) {
    padding-left: 1rem;
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
  width: 20%;
  &#mobile {
    width: 30%;
  }
`;

export const WriteButton = styled.button`
  font-size: 16px;
  color: #222;
`;

export const TextField = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  resize: none;
  padding: 22px;
  outline-color: #336af8;
  border: solid 1px #e0e0e0;
  border-radius: 15px;
  background-color: #f9f9f9;
  @media only screen and (max-width: 550px) {
    min-height: 50px;
    font-size: 16px;
    transform: scale(0.9);
  }
`;

export const EditButton = styled.button`
  font-size: 16px;
  font-family: 'Pretendard-Semibold';
  width: 350px;
  padding: 12px 20px;
  text-align: center;
  color: #ffffff;
  background-color: #336af8;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    color: none;
    background-color: #efefef;
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
  @media only screen and (max-width: 550px) {
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
    display: none;
  }
  &#difficult {
    &:checked + ${FormCheckText} {
      color: #7800ff;
      font-family: 'Pretendard-Semibold';
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;
      font-family: 'Pretendard-Semibold';
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #336af8;
      font-family: 'Pretendard-Semibold';
    }
  }
  display: none;
`;
// 여기까지
