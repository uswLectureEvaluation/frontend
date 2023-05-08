import { useForm } from 'react-hook-form';
import { Auth } from 'api';
import { Button, Meta } from 'components';
import { CssTextField } from 'components/Etc/CssTextField';
import { Container, AuthWrapper, Title, Img, Sub } from 'styles/ommon';

const Exit = () => {
  const auth = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = (data) => {
    if (confirm('회원탈퇴 시 작성한 강의평가/시험정보는 전부 삭제됩니다. \n정말 탈퇴하시나요?')) {
      auth.quit(data);
    } else {
      alert('취소');
    }
  };

  return (
    <Container>
      <Meta title="SUWIKI : 회원탈퇴" />
      <Img src="images/signup.svg" width={400} />
      <AuthWrapper onSubmit={handleSubmit(onSubmit)}>
        <Title>회원탈퇴</Title>
        <Sub>아이디를 입력하세요</Sub>
        <CssTextField
          variant="standard"
          margin="normal"
          label="id"
          {...register('loginId', { required: true })}
        />
        <Sub>비밀번호를 입력하세요</Sub>
        <CssTextField
          variant="standard"
          margin="normal"
          type="password"
          label="pw"
          {...register('password', { required: true })}
        />
        <Button id="auth" type="submit" disabled={!isValid}>
          탈퇴
        </Button>
      </AuthWrapper>
    </Container>
  );
};

export default Exit;
