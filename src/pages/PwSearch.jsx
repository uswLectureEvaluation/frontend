import { useEffect, useState } from 'react';
import Auth from '../api/Auth';
import { CssTextField } from '../components/CssTextField';
import Meta from '../components/Meta';
import styled from 'styled-components';

const PwSearch = () => {
  const auth = Auth();
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
    auth.findPw(setData, username, email);
  };

  useEffect(() => {}, [db.data]);
  return (
    <Container>
      <Meta title="SUWIKI : 비밀번호 찾기" />
      <Img src="images/signup.svg" width={400} />
      <LoginWrapper>
        <Title>비밀번호 찾기</Title>
        <Sub>아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다</Sub>
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
        <Button
          background="#336af8"
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
        >
          전송
        </Button>
      </LoginWrapper>
    </Container>
  );
};

export default PwSearch;

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
