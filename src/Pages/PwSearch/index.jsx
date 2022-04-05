import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { findPwApi } from '../../api/Api';

const PwSearch = () => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [db, setData] = useState({
    data: [],
  });

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeID = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = () => {
    findPwApi(setData, username, email);
  };

  useEffect(() => {
    console.log(db.data);
  }, [db.data]);
  return (
    <Styled.Container>
      <Styled.Img src="img/signup.png" width={450} />
      <Styled.LoginWrapper>
        <Styled.Title>비밀번호 찾기</Styled.Title>
        <Styled.Sub>아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다</Styled.Sub>
        <Styled.CssTextField
          margin="normal"
          required
          id="id"
          label="아이디"
          name="id"
          autoComplete="id"
          autoFocus
          onChange={onChangeID}
        />
        <Styled.CssTextField
          margin="normal"
          required
          id="email"
          label="학교 이메일"
          name="email"
          autoComplete="email"
          onChange={onChangeEmail}
        />
        <Styled.Button
          background="#346cfd"
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          전송
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default PwSearch;
