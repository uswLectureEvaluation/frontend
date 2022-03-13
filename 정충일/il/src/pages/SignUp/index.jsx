import React, {useState, useCallback } from 'react';
import Button from '../../components/Button'
import Input from '../../components/Input'
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled'

const SignUp = () => {
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

    const onChangeName = useCallback((e) => {
    setName(e.target.value)
    if (e.target.value.length < 6) {
        setNameMessage('아이디는 6자리 이상 입력해주세요.')
        setIsName(false)
    } else if(e.target.value.length > 20) {
        setNameMessage('아이디는 20자리 이하로 입력해주세요.')
        setIsName(false)
    }else {
        setNameMessage('사용 가능한 아이디입니다.')
        setIsName(true)
    }
    }, [])

    // 이메일
    const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸습니다.')
      setIsEmail(false)
    } else {
      setEmailMessage('사용 가능한 이메일입니다.')
      setIsEmail(true)
    }
    }, [])

    const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('사용 가능한 비밀번호입니다.')
      setIsPassword(true)
    }
    }, [])    

    // 비밀번호 확인
    const onChangePasswordConfirm = useCallback((e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호가 일치합니다.')
        setIsPasswordConfirm(true)
        } else {
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
        setIsPasswordConfirm(false)
        }
      },
      [password]
    )
      


    //체크박스
    const [checkList, setCheckList] = useState([]);
  
    // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
    const handleCheck = (e) => {
      e.target.checked
        ? setCheckList([...checkList, e.target.name])
        : setCheckList(checkList.filter(el => el !== e.target.name));
    };

    // 전체체크 선택시 전체 선택 or 전체해제
    const checkAll = (e) => {
      e.target.checked ? setCheckList(['terms', 'privacy']) : setCheckList([]);
    };


    return (
      <Positioner>
        <Styled.Wrapper>
            <Styled.Title>회원가입</Styled.Title>
            <Input label="아이디" name="username" placeholder="아이디" onChange={onChangeName} />
            {name.length > 0 && <Styled.Checking className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</Styled.Checking>}
    
            <Input label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={onChangePassword} />
            {password.length > 0 && (<Styled.Checking className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</Styled.Checking>)}
    
            <Input placeholder="비밀번호 확인" name="passwordConfirm" type="password" onChange={onChangePasswordConfirm}/>
            {passwordConfirm.length > 0 && (
            <Styled.Checking className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</Styled.Checking>
            )}
            <Input label="이메일" id="email" name="email" placeholder="이메일(@suwon.ac.kr)" onChange={onChangeEmail} />
              {email.length > 0 && <Styled.Checking className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</Styled.Checking>}
            <Styled.EmailWrapper>*수원대 이메일 인증 후 서비스 이용이 가능합니다.</Styled.EmailWrapper>
       

            <Styled.Label>
              <div style={{width:"100%"}}>
                <input
                  type="checkbox"
                  name="checkAll"
                  onChange={checkAll}
                  checked={checkList.length === 2 ? true : false}
                  />
                  아래 내용에 모두 동의합니다.
              </div>
            </Styled.Label>
            <Styled.Label>
              <div>
                <input
                    type="checkbox"
                    name="terms"
                    onChange={handleCheck}
                    checked={checkList.includes('terms') ? true : false}
                  />
              [필수] 이용약관 동의
              </div>
                <Styled.AgreeButton className="showMore">상세보기</Styled.AgreeButton>
              </Styled.Label>
              <Styled.Label>
                <div>
                    <input
                      type="checkbox"
                      name="privacy"
                      onChange={handleCheck}
                      checked={checkList.includes('privacy') ? true : false}
                      />
                [필수] 개인정보처리방침 동의
                    </div>
                  <Styled.AgreeButton className="showMore">상세보기</Styled.AgreeButton>
            </Styled.Label>
            <br /><br />
          <Button disabled={!(isName && isEmail && isPassword && isPasswordConfirm && checkList.length === 2)} color="blue">회원가입</Button>
          </Styled.Wrapper>
        </Positioner>
    );

};

export default SignUp;