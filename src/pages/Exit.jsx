import Auth from '../api/Auth';
import Meta from '../components/Meta';
import styled from '@emotion/styled';
import { CssTextField } from '../components/Etc/CssTextField';
import { useForm } from 'react-hook-form';
import Button from '../components/Etc/Button';

const Exit = () => {
  const auth = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = ({ id, pw }) => {
    if (confirm('회원탈퇴 시 작성한 강의평가/시험정보는 전부 삭제됩니다. \n정말 탈퇴하시나요?')) {
      auth.quit(id, pw);
    } else {
      alert('취소');
    }
  };

  return (
    <Container>
      <Meta title="SUWIKI : 회원탈퇴" />
      <Img src="images/signup.svg" width={400} />
      <LoginWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>회원탈퇴</Title>
        <Sub>아이디를 입력하세요</Sub>
        <CssTextField
          variant="standard"
          margin="normal"
          label="id"
          {...register('id', { required: true })}
        />
        <Sub>비밀번호를 입력하세요</Sub>
        <CssTextField
          variant="standard"
          margin="normal"
          type="password"
          label="pw"
          {...register('pw', { required: true })}
        />
        <Button id="auth" type="submit" disabled={!isValid}>
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
