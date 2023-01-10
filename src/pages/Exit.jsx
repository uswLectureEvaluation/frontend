import { useState } from 'react';
import Auth from '../api/Auth';
import Meta from '../components/Meta';
import styled from '@emotion/styled';
import { CssTextField } from '../components/Etc/CssTextField';

const Exit = () => {
  const auth = Auth();
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = () => {
    if (
      window.confirm('회원탈퇴 시 작성한 강의평가/시험정보는 전부 삭제됩니다. \n정말 탈퇴하시나요?')
    ) {
      auth.quit(id, pw);
      localStorage.removeItem('login');
      sessionStorage.removeItem('login');
    } else {
      alert('취소');
    }
  };
  return (
    <Container>
      <Meta title="SUWIKI : 회원탈퇴" />
      <Img src="images/signup.svg" width={400} />
      <LoginWrapper>
        <Title>회원탈퇴</Title>
        <Sub>아이디를 입력하세요</Sub>
        <CssTextField
          margin="normal"
          required
          id="outlined-basic"
          label="id"
          name="id"
          autoComplete="id"
          onChange={onChangeId}
        />
        <Sub>비밀번호를 입력하세요</Sub>
        <CssTextField
          margin="normal"
          required
          id="outlined-basic"
          type="password"
          label="pw"
          name="pw"
          autoComplete="pw"
          onChange={onChangePw}
        />
        <Button background="#336af8" type="submit" fullWidth variant="contained" onClick={onSubmit}>
          탈퇴
        </Button>
      </LoginWrapper>
    </Container>
  );
};

export default Exit;

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
