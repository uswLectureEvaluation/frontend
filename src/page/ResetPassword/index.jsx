import { React, useState } from 'react';
import { resetPasswordApi } from '../../api/Api';
import * as Styled from './styled';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState();
  const [prePassword, setPrePassword] = useState();
  const handleChange = () => {
    resetPasswordApi(prePassword, newPassword);
  };

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
          id="outlined-basic"
          autoFocus
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />

        <Styled.Button
          background="#346cfd"
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleChange}
        >
          전송
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default ResetPassword;
