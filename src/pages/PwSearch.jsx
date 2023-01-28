import { useForm } from 'react-hook-form';
import { Auth } from 'api';
import { Meta, Button } from 'components';
import { CssTextField } from 'components/Etc/CssTextField';
import { Container, AuthWrapper, Title, Img, Sub } from 'styles/Common';

const PwSearch = () => {
  const auth = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = (data) => {
    auth.findPw(data);
  };

  return (
    <Container>
      <Meta title="SUWIKI : 비밀번호 찾기" />
      <Img src="images/signup.svg" width={400} />
      <AuthWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>비밀번호 찾기</Title>
        <Sub>아이디에 해당하는 학교 이메일로 임시 비밀번호를 전송합니다</Sub>
        <CssTextField
          variant="standard"
          margin="normal"
          label="아이디"
          {...register('loginId', { required: true })}
        />
        <CssTextField
          variant="standard"
          margin="normal"
          label="학교 이메일"
          {...register('email', { required: true })}
        />
        <Button id="auth" type="submit" disabled={!isValid}>
          전송
        </Button>
      </AuthWrapper>
    </Container>
  );
};

export default PwSearch;
