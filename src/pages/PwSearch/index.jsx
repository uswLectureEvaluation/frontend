import { useEffect, useState } from 'react';
import { findPwApi } from '../../api/Api';
import { CssTextField } from '../../components/CssTextField';
import * as Styled from './styled';

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

  useEffect(() => {}, [db.data]);
  return (
    <Styled.Container>
      <Styled.Img src="img/signup.svg" width={450} />
      <Styled.LoginWrapper>
        <Styled.Title>비밀번호 찾기</Styled.Title>
        <Styled.Sub>아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다</Styled.Sub>
        <CssTextField
          margin="normal"
          required
          id="id"
          label="아이디"
          name="id"
          autoComplete="id"
          onChange={onChangeID}
        />
        <CssTextField
          margin="normal"
          required
          id="email"
          label="학교 이메일"
          name="email"
          autoComplete="email"
          onChange={onChangeEmail}
        />
        <Styled.Button
          background="#336af8"
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
