import { useCallback, useState } from 'react';
import Auth from '../api/Auth';
import { CssTextField } from '../components/Etc/CssTextField';
import Meta from '../components/Meta';
import styled from '@emotion/styled';

const ResetPassword = () => {
  const auth = Auth();
  const [newPassword, setNewPassword] = useState('');
  const [prePassword, setPrePassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const handleChange = () => {
    auth.resetPassword(prePassword, newPassword);
  };

  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setNewPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자(!@#$%^+=-) 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('사용 가능한 비밀번호입니다.');
      setIsPassword(true);
    }
  }, []);

  return (
    <Container>
      <Meta title="SUWIKI : 비밀번호 변경" />
      <Img src="images/signup.svg" width={400} />
      <LoginWrapper>
        <Title>비밀번호 변경</Title>
        <Sub>기존 비밀번호를 입력하세요</Sub>
        <CssTextField
          placeholder="기존 비밀번호 입력"
          margin="normal"
          required
          type="password"
          id="outlined-basic"
          onChange={(e) => {
            setPrePassword(e.target.value);
          }}
        />

        <Sub>새로운 비밀번호를 입력하세요</Sub>

        <CssTextField
          placeholder="새 비밀번호 입력"
          margin="normal"
          required
          type="password"
          id="outlined-basic"
          onChange={onChangePassword}
        />
        {newPassword.length > 0 && (
          <Checking className={`message ${isPassword ? 'success' : 'error'}`}>
            {passwordMessage}
          </Checking>
        )}

        <Button
          background="#336af8"
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleChange}
          disabled={!isPassword}
        >
          전송
        </Button>
      </LoginWrapper>
    </Container>
  );
};

export default ResetPassword;

const Checking = styled.div`
  font-size: 1.2vh;
`;

const Container = styled.div`
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

const Img = styled.img`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;

  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 0.6rem;
`;

const Button = styled.button`
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

  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
  &:disabled {
    background-color: rgba(170, 170, 170);
    cursor: auto;
  }
  @media only screen and (max-width: 550px) {
    margin-top: 10rem;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
`;

const Sub = styled.div`
  font-size: 0.8rem;

  font-weight: 600;
`;
