import { useEffect, useState } from 'react';
import { findIdApi } from '../../api/Api';
import { CssTextField } from '../../components/CssTextField';
import * as Styled from './styled';

const IdSearch = () => {
  const [email, setEmail] = useState();
  const [db, setData] = useState({
    data: [],
  });

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const emailSubmit = () => {
    findIdApi(setData, email);
  };

  useEffect(() => {}, [db.data]);
  return (
    <Styled.Container>
      <Styled.Img src="img/signup.svg" width={400} />
      <Styled.LoginWrapper>
        <Styled.Title>아이디 찾기</Styled.Title>
        <Styled.Sub>학교 계정을 입력하세요</Styled.Sub>
        <CssTextField
          margin="normal"
          required
          id="outlined-basic"
          label="학교 이메일 입력(@suwon.ac.kr)"
          name="email"
          autoComplete="email"
          onChange={onChangeEmail}
        />
        <Styled.Button
          background="#336af8"
          type="submit"
          fullWidth
          variant="contained"
          onClick={emailSubmit}
        >
          전송
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default IdSearch;
