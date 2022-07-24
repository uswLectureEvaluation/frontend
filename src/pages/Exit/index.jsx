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
    if (window.confirm('회원탈퇴 시 작성한 강의평가/시험정보는 전부 삭제됩니다. \n정말 탈퇴하시나요?')) {
        console.log(id, pw)
        quitApi(id, pw)
        localStorage.removeItem('login')
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
