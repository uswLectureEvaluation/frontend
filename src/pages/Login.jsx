import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../api/Auth';
import { CssTextField } from '../components/Etc/CssTextField';
import Meta from '../components/Meta';
import styled from '@emotion/styled';

const Login = () => {
  const navigate = useNavigate();
  const auth = Auth();
  const [checked, setChecked] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const [db, setData] = useState({
    data: [],
  });

  const [loading, setLoading] = useState(false);

  const onChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  const onChangeID = (e) => {
    setUserName(e.target.value);
  };
  const onChangePW = (e) => {
    setPassWord(e.target.value);
  };
  const onLogin = () => {
    checked
      ? auth.login(setData, setLoading, username, password)
      : auth.unCheckedLogin(setData, setLoading, username, password);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      checked
        ? auth.login(setData, setLoading, username, password)
        : auth.unCheckedLogin(setData, setLoading, username, password);
    }
  };

  useEffect(() => {
    if (loading && db !== null) {
      navigate(-1) || navigate('/myinformation');
    }
  }, [db, loading, navigate]);

  return (
    <Container>
      <Meta
        title="SUWIKI : 로그인"
        description="SUWIKI에 로그인 하고 수원대학교 강의평가의 모든 서비스를 이용해 보세요"
      />
      <picture>
        <source srcSet="/images/signup.avif" type="image/avif" />
        <source srcSet="/images/signup.webp" type="image/webp" />
        <source srcSet="/images/signup.png" type="image/png" />
        <Img src="images/signup.svg" alt="signup" width={400} height={350} />
      </picture>
      <LoginWrapper>
        <Title>로그인</Title>
        <CssTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="아이디"
          name="email"
          autoComplete="email"
          onChange={onChangeID}
          onKeyPress={onKeypress}
        />
        <CssTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChangePW}
          onKeyPress={onKeypress}
        />
        <SearchWrapper>
          <FormControlLabel
            control={<Checkbox checked={checked} color="primary" onChange={onChangeCheckBox} />}
            label="로그인 유지"
          />
          <div>
            <SearchButton onClick={() => navigate('/idsearch')}>아이디 찾기</SearchButton>
            <SearchButton onClick={() => navigate('/pwsearch')}>비밀번호 찾기</SearchButton>
          </div>
        </SearchWrapper>
        <Button background="#336af8" type="submit" fullWidth variant="contained" onClick={onLogin}>
          로그인
        </Button>
      </LoginWrapper>
    </Container>
  );
};

export default Login;

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
  padding-bottom: 1rem;

  @media only screen and (max-width: 550px) {
    font-size: 24px;
    font-weight: 600;
  }
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
  font-size: 1.1rem;
  border-radius: 12px;

  font-weight: 600;
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;

  @media only screen and (max-width: 550px) {
    margin-top: 5rem;
  }
`;
const SearchButton = styled.button`
  border: none;
  border-bottom: 1px solid;
  padding: 0;
  margin-left: 10px;

  font-weight: 300;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const SearchWrapper = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
`;