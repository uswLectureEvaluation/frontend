import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: 960px) {
    font-family: 'Pretendard-SemiBold';
  }
`;

export const Checking = styled.div`
  font-size: 1.2vh;
`;

export const Label = styled.label`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  font-size: 0.8rem;
  input {
    margin: 0 10px 0 0;
  }
  &#last {
    padding-top: 8px;
    padding-bottom: 3vh;
  }
`;

export const EmailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  font-family: 'Pretendard-SemiBold';
`;

export const AgreeButton = styled.button`
  border: 0;
  background: 0 0;
  cursor: pointer;
  text-decoration: underline;
  color: gray;
  line-height: 1.5;
  display: block;
  float: right;
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Pretendard-Medium';

  &#top {
    align-items: stretch;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 8rem 0;
  justify-content: space-between;
  @media only screen and (max-width: 960px) {
    justify-content: center;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    padding: 20px;
  }
`;

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  background: ${(props) => props.background};
  color: white;
  font-size: 1rem;
  border-radius: 12px;
  font-family: 'Pretendard-SemiBold';
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;

  &:disabled {
    background-color: rgba(170, 170, 170);
    cursor: auto;
  }

  &#check {
    position: absolute;
    right: 20%;
    margin-top: 28px;
    font-weight: 100;
    font-size: 0.9rem;
    border-radius: 14px;
    padding: 0.2rem 0.8rem;
    @media only screen and (max-width: 960px) {
      right: 27%;
    }
    @media only screen and (max-width: 550px) {
      right: 5%;
    }
    :disabled {
      background: white;
      color: rgba(170, 170, 170);
      border: 1px solid rgba(170, 170, 170);
    }
  }
`;
