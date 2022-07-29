import { React, useState, useCallback } from 'react';
import { resetPasswordApi } from '../../api/Api';
import * as Styled from './styled';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [prePassword, setPrePassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);

  const handleChange = () => {
    resetPasswordApi(prePassword, newPassword);
  };

  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setNewPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('사용 가능한 비밀번호입니다.');
      setIsPassword(true);
    }
  }, []);

  return (
    <Styled.Container>
      <Styled.Img src="img/signup.svg" width={450} />
      <Styled.LoginWrapper>
        <Styled.Title>비밀번호 변경</Styled.Title>
        <Styled.Sub>기존 비밀번호를 입력하세요</Styled.Sub>
        <Styled.CssTextField
          placeholder="기존 비밀번호 입력"
          margin="normal"
          required
          type="password"
          id="outlined-basic"
          autoFocus
          onChange={(e) => {
            setPrePassword(e.target.value);
          }}
        />

        <Styled.Sub>새로운 비밀번호를 입력하세요</Styled.Sub>

        <Styled.CssTextField
          placeholder="새 비밀번호 입력"
          margin="normal"
          required
          type="password"
          id="outlined-basic"
          autoFocus
          onChange={onChangePassword}
        />
        {newPassword.length > 0 && (
          <Styled.Checking className={`message ${isPassword ? 'success' : 'error'}`}>
            {passwordMessage}
          </Styled.Checking>
        )}

        <Styled.Button
          background="#346cfd"
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
