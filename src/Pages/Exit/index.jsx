import React, { useState } from 'react';
import * as Styled from './styled';
import { quitApi } from '../../api/Api';

const Exit = () => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = () => {
    if (window.confirm('정말 탈퇴하시나요?')) {
        quitApi(id, pw)
      } else {
        alert('취소')
      }
  };
  return (
    <Styled.Container>
      <Styled.Img src="img/signup.svg" width={450} />
      <Styled.LoginWrapper>
        <Styled.Title>회원탈퇴</Styled.Title>
        <Styled.Sub>아이디를 입력하세요</Styled.Sub>
        <Styled.CssTextField
          margin="normal"
          required
          id="outlined-basic"
          label="id"
          name="id"
          autoComplete="id"
          autoFocus
          onChange={onChangeId}
        />
        <Styled.Sub>비밀번호를 입력하세요</Styled.Sub>
        <Styled.CssTextField
          margin="normal"
          required
          id="outlined-basic"
          label="pw"
          name="pw"
          autoComplete="pw"
          autoFocus
          onChange={onChangePw}
        />
        <Styled.Button
          background="#346cfd"
          type="submit"
          fullWidth
          variant="contained"
          onClick={onSubmit}
        >
          탈퇴
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default Exit;