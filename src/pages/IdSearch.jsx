import Auth from '../api/Auth';
import { CssTextField } from '../components/Etc/CssTextField';
import Button from '../components/Etc/Button';
import Meta from '../components/Meta';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

const IdSearch = () => {
  const auth = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const emailSubmit = ({ email }) => {
    auth.findId(email);
  };

  return (
    <Container>
      <Meta title="SUWIKI : 아이디 찾기" />
      <Img src="images/signup.svg" width={400} />
      <LoginWrapper onSubmit={handleSubmit(emailSubmit)}>
        <Title>아이디 찾기</Title>
        <Sub>학교 계정을 입력하세요</Sub>
        <CssTextField
          variant="standard"
          margin="normal"
          label="학교 이메일 입력(@suwon.ac.kr)"
          {...register('email', { required: true })}
        />
        <Button id="auth" type="submit" disabled={!isValid}>
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

const LoginWrapper = styled.form`
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
