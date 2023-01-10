import { useEffect, useState } from 'react';
import Auth from '../api/Auth';
import { CssTextField } from '../components/Etc/CssTextField';
import Meta from '../components/Meta';
import styled from '@emotion/styled';

const IdSearch = () => {
  const auth = Auth();
  const [email, setEmail] = useState();
  const [db, setData] = useState({
    data: [],
  });

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const emailSubmit = () => {
    auth.findId(setData, email);
  };

  useEffect(() => {}, [db.data]);
  return (
    <Container>
      <Meta title="SUWIKI : 아이디 찾기" />
      <Img src="images/signup.svg" width={400} />
      <LoginWrapper>
        <Title>아이디 찾기</Title>
        <Sub>학교 계정을 입력하세요</Sub>
        <CssTextField
          margin="normal"
          required
          id="outlined-basic"
          label="학교 이메일 입력(@suwon.ac.kr)"
          name="email"
          autoComplete="email"
          onChange={onChangeEmail}
        />
        <Button
          background="#336af8"
          type="submit"
          fullWidth
          variant="contained"
          onClick={emailSubmit}
        >
          전송
        </Button>
      </LoginWrapper>
    </Container>
  );
};

export default IdSearch;

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
