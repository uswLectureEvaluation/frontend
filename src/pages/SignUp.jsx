import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../api/Auth';
import { CssTextField } from '../components/Etc/CssTextField';
import Meta from '../components/Meta';
import styled from '@emotion/styled';

const SignUp = () => {
  const auth = Auth();
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const navigate = useNavigate();

  const [idCheck, setIdCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const [db, setData] = useState({
    data: '',
  });

  const onChangeName = useCallback((e) => {
    const nameRegex = /^[a-z|0-9|]+$/;
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    if (!nameRegex.test(nameCurrent)) {
      setNameMessage('아이디는 영소문자 및 숫자로 입력해주세요');
      setIsName(false);
    } else if (e.target.value.length < 6) {
      setNameMessage('아이디는 6자리 이상 입력해주세요.');
      setIsName(false);
    } else if (e.target.value.length > 20) {
      setNameMessage('아이디는 20자리 이하로 입력해주세요.');
      setIsName(false);
    } else if (e.target.value.length > 6 || e.target.value.length < 20) {
      setNameMessage('아이디 중복확인해주세요.');
      setIsName(true);
      setIdCheck(false);
    }
  }, []);

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;

    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent) || !emailCurrent.endsWith('@suwon.ac.kr')) {
      setEmailMessage('이메일 형식이 틀렸습니다.');
      setIsEmail(false);
    } else {
      setEmailMessage('사용 가능한 이메일입니다.');
      setIsEmail(true);
      setEmailCheck(false);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자(!@#$%^+=-) 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setPasswordMessage('사용 가능한 비밀번호입니다.');
      setIsPassword(true);
    }
  }, []);

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호가 일치합니다.');
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  //체크박스
  const [checkList, setCheckList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
  const handleCheck = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((el) => el !== e.target.name));
  };

  // 전체체크 선택시 전체 선택 or 전체해제
  const checkAll = (e) => {
    e.target.checked ? setCheckList(['terms', 'privacy']) : setCheckList([]);
  };

  const onClick = () => {
    auth.register(setData, setLoading, name, password, email);
    navigate('/emailsignup', { state: email });
  };

  const onCheck = () => {
    auth.checkId(setIdCheck, name);
  };

  const onEmail = () => {
    auth.checkEmail(setEmailCheck, email);
  };

  useEffect(() => {
    if (idCheck) return setNameMessage('아이디 중복확인 완료');
  }, [idCheck]);

  useEffect(() => {
    if (emailCheck) return setEmailMessage('이메일 중복확인 완료');
  }, [emailCheck]);

  useEffect(() => {
    if (loading) {
      if (db.data !== null) {
        alert('회원가입 성공');
        navigate('/');
      } else {
        alert('회원가입 실패');
      }
    }
  });

  return (
    <Container>
      <Meta title="SUWIKI : 회원가입" />
      <picture>
        <source srcSet="/images/signup.avif" type="image/avif" />
        <source srcSet="/images/signup.webp" type="image/webp" />
        <source srcSet="/images/signup.png" type="image/png" />
        <Img src="images/signup.svg" alt="signup" width={400} height={350} />
      </picture>
      <SignUpWrapper>
        <Title>회원가입</Title>
        <InputWrapper id="top">
          <CssTextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="아이디"
            name="username"
            autoComplete="username"
            onChange={onChangeName}
          />
          <Button disabled={!isName || idCheck} id="check" onClick={onCheck} background="#336af8">
            중복확인
          </Button>
        </InputWrapper>
        {name.length > 0 && (
          <Checking className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</Checking>
        )}

        <CssTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChangePassword}
        />
        {password.length > 0 && (
          <Checking className={`message ${isPassword ? 'success' : 'error'}`}>
            {passwordMessage}
          </Checking>
        )}
        <CssTextField
          margin="normal"
          required
          fullWidth
          name="passwordConfirm"
          label="비밀번호 확인"
          type="password"
          id="passwordConfirm"
          autoComplete="current-password"
          onChange={onChangePasswordConfirm}
        />
        {passwordConfirm.length > 0 && (
          <Checking className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>
            {passwordConfirmMessage}
          </Checking>
        )}
        <InputWrapper id="top">
          <CssTextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="학교 이메일(@suwon.ac.kr)"
            type="email"
            id="email"
            autoComplete="current-email"
            onChange={onChangeEmail}
          />
          <Button
            disabled={!isEmail || emailCheck}
            id="check"
            onClick={onEmail}
            background="#336af8"
          >
            중복확인
          </Button>
        </InputWrapper>
        {email.length > 0 && (
          <Checking className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Checking>
        )}

        <EmailWrapper>
          * 수원대 이메일 인증 후 서비스 이용이 가능합니다.
          <br />
          <br />* 이메일 인증 시 주의 사항
          <br />- 웹메일이 휴면 상태인지 확인해주세요.
          <br />- 웹메일 계정은 포털 계정과 다르니 이 부분 주의 바랍니다.
        </EmailWrapper>

        <Label>
          <InputWrapper>
            <input
              type="checkbox"
              name="checkAll"
              onChange={checkAll}
              checked={checkList.length === 2 ? true : false}
            />
            아래 내용에 모두 동의합니다.
          </InputWrapper>
        </Label>
        <Label>
          <InputWrapper>
            <input
              type="checkbox"
              name="terms"
              onChange={handleCheck}
              checked={checkList.includes('terms') ? true : false}
            />
            이용약관 동의(필수)
          </InputWrapper>
          <AgreeButton
            className="showMore"
            onClick={() => window.open('https://sites.google.com/view/suwiki-policy-terms')}
          >
            상세보기
          </AgreeButton>
        </Label>
        <Label id="last">
          <InputWrapper>
            <input
              type="checkbox"
              name="privacy"
              onChange={handleCheck}
              checked={checkList.includes('privacy') ? true : false}
            />
            개인정보처리방침 동의(필수)
          </InputWrapper>
          <AgreeButton
            className="showMore"
            onClick={() => window.open('https://sites.google.com/view/suwiki-policy-privacy')}
          >
            상세보기
          </AgreeButton>
        </Label>
        <Button
          disabled={
            !(
              isName &&
              isEmail &&
              isPassword &&
              isPasswordConfirm &&
              checkList.length === 2 &&
              idCheck &&
              emailCheck
            )
          }
          background="#336af8"
          onClick={onClick}
        >
          회원가입
        </Button>
      </SignUpWrapper>
    </Container>
  );
};

export default SignUp;

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;

  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: 960px) {
    font-weight: 600;
  }
`;

const Checking = styled.div`
  font-size: 1.2vh;
`;

const Label = styled.label`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  font-size: 0.8rem;
  input {
    margin: 0 10px 0 0;
  }
  &#last {
    padding-top: 8px;
    padding-bottom: 3vh;
  }
`;

const EmailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;

  font-weight: 600;
`;

const AgreeButton = styled.button`
  border: 0;
  background: 0 0;
  cursor: pointer;
  text-decoration: underline;
  color: gray;
  line-height: 1.5;
  display: block;
  float: right;
  font-size: 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  &#top {
    align-items: stretch;
  }
`;

export const Container = styled.div`
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

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 405px;
  @media only screen and (max-width: 960px) {
    width: 350px;
  }
`;

export const Img = styled.img`
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

export const Button = styled.button`
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

  &:disabled {
    background-color: rgba(170, 170, 170);
    cursor: auto;
  }

  &#check {
    position: absolute;
    right: 20%;
    margin-top: 28px;
    font-weight: 100;
    font-size: 0.9rem;
    border-radius: 14px;
    padding: 0.2rem 0.8rem;
    @media only screen and (max-width: 960px) {
      right: 27%;
    }
    @media only screen and (max-width: 550px) {
      right: 5%;
    }
    :disabled {
      background: white;
      color: rgba(170, 170, 170);
      border: 1px solid rgba(170, 170, 170);
    }
  }
`;