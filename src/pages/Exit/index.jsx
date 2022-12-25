import { useState } from 'react';
import Auth from '../../api/Auth';
import { CssTextField } from '../../components/CssTextField';
import * as Styled from './styled';

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
    <Styled.Container>
      <Styled.Img src="images/signup.svg" width={400} />
      <Styled.LoginWrapper>
        <Styled.Title>회원탈퇴</Styled.Title>
        <Styled.Sub>아이디를 입력하세요</Styled.Sub>
        <CssTextField
          margin="normal"
          required
          id="outlined-basic"
          label="id"
          name="id"
          autoComplete="id"
          onChange={onChangeId}
        />
        <Styled.Sub>비밀번호를 입력하세요</Styled.Sub>
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
        <Styled.Button
          background="#336af8"
          type="submit"
          fullWidth
          variant="contained"
          onClick={onSubmit}
        >
          탈퇴
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default Exit;
