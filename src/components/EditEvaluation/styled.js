import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  font-family: Pretendard;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  padding: 2rem;
  padding-bottom: 1rem;
  font-weight: bold;
`;

export const Score = styled.span`
  margin: 2px 0 1px 24px;
  font-family: Pretendard;
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
  padding-left: 2rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const Content = styled.form`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  &#group {
    margin-bottom: 1.5rem;
  }
`;

export const ContentTitle = styled.div`
  width: 20%;
`;

export const WriteButton = styled.button`
font-size: 16px;
font-weight: 500;
color: #222;
`

// 라디오버튼 스타일
export const FormLabel = styled.label`
`
export const FormCheckText = styled.span`
  font-size: 16px;
  padding: 8px 15px;
  background: #e6e6e6;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  margin-right: 8px;
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
// 여기까지