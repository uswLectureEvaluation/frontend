import { useCallback, useState } from 'react';
import Auth from '../../api/Auth';
import { CssTextField } from '../../components/CssTextField';
import Meta from '../../components/Meta';
import * as Styled from './styled';

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
    <Styled.Container>
      <Meta title="SUWIKI : 비밀번호 변경" />
      <Styled.Img src="images/signup.svg" width={400} />
      <Styled.LoginWrapper>
        <Styled.Title>비밀번호 변경</Styled.Title>
        <Styled.Sub>기존 비밀번호를 입력하세요</Styled.Sub>
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

        <Styled.Sub>새로운 비밀번호를 입력하세요</Styled.Sub>

        <CssTextField
          placeholder="새 비밀번호 입력"
          margin="normal"
          required
          type="password"
          id="outlined-basic"
          onChange={onChangePassword}
        />
        {newPassword.length > 0 && (
          <Styled.Checking className={`message ${isPassword ? 'success' : 'error'}`}>
            {passwordMessage}
          </Styled.Checking>
        )}

        <Styled.Button
          background="#336af8"
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleChange}
          disabled={!isPassword}
        >
          전송
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default ResetPassword;
