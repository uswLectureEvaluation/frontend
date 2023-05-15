import styled from '@emotion/styled';
import { Auth } from 'api';
import { Meta } from 'components';
import { CssTextField } from 'components/Etc/CssTextField';
import { KeyboardEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthWrapper, Container, Img } from 'styles/common';

const Login = () => {
  const navigate = useNavigate();
  const { login } = Auth();
  const userId = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const loginAttempt = () =>
    login({ loginId: userId.current!.value, password: password.current!.value });

  const onKeypress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter') return;

    loginAttempt();
  };

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
      <AuthWrapper>
        <Title>로그인</Title>
        <CssTextField
          variant="standard"
          margin="normal"
          required
          label="아이디"
          inputRef={userId}
          onKeyPress={onKeypress}
        />
        <CssTextField
          variant="standard"
          margin="normal"
          required
          label="비밀번호"
          type="password"
          inputRef={password}
          onKeyPress={onKeypress}
        />
        <SearchWrapper>
          <div>
            <SearchButton type="button" onClick={() => navigate('/idsearch')}>
              아이디 찾기
            </SearchButton>
            <SearchButton type="button" onClick={() => navigate('/pwsearch')}>
              비밀번호 찾기
            </SearchButton>
          </div>
        </SearchWrapper>
        <Button background="#336af8" type="button" onClick={loginAttempt}>
          로그인
        </Button>
      </AuthWrapper>
    </Container>
  );
};

export default Login;

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

const Button = styled.button<{ background: string }>`
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
