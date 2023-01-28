import { useForm } from 'react-hook-form';
import { Auth } from 'api';
import { Button, Meta } from 'components';
import { CssTextField } from 'components/Etc/CssTextField';
import { Container, AuthWrapper, Title, Img, Sub } from 'styles/Common';

const IdSearch = () => {
  const auth = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const emailSubmit = (data) => {
    auth.findId(data);
  };

  return (
    <Container>
      <Meta title="SUWIKI : 아이디 찾기" />
      <Img src="images/signup.svg" width={400} />
      <AuthWrapper onSubmit={handleSubmit(emailSubmit)}>
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
      </AuthWrapper>
    </Container>
  );
};

export default IdSearch;
