import { useForm } from 'react-hook-form';
import { Auth } from 'api';
import { Meta, Button } from 'components';
import { CssTextField } from 'components/Etc/CssTextField';
import { Container, AuthWrapper, Title, Img, Sub, Checking } from 'styles/ommon';
import { validatePassword } from 'utils/validate';

const ResetPassword = () => {
  const auth = Auth();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: 'onChange' });
  const handleChange = (data) => {
    auth.resetPassword(data);
  };

  return (
    <Container>
      <Meta title="SUWIKI : 비밀번호 변경" />
      <Img src="images/signup.svg" width={400} />
      <AuthWrapper onSubmit={handleSubmit(handleChange)}>
        <Title>비밀번호 변경</Title>
        <Sub>기존 비밀번호를 입력하세요</Sub>
        <CssTextField
          variant="standard"
          type="password"
          margin="normal"
          placeholder="기존 비밀번호 입력"
          {...register('prePassword', { required: true })}
        />

        <Sub>새로운 비밀번호를 입력하세요</Sub>

        <CssTextField
          variant="standard"
          type="password"
          margin="normal"
          placeholder="새 비밀번호 입력"
          {...register('newPassword', validatePassword)}
        />
        {errors.newPassword && <Checking>{errors.newPassword.message}</Checking>}

        <Button id="auth" type="submit" disabled={!isValid}>
          전송
        </Button>
      </AuthWrapper>
    </Container>
  );
};

export default ResetPassword;
