import React, {useState, useCallback} from 'react';
import { AuthContent, InputWithLabel,AuthButton, AuthWrapper } from '../Auth';

const JoinMember = () => {
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
    if (e.target.value.length < 2) {
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


    return (
        <AuthWrapper>
            <AuthContent title="회원가입">
                <InputWithLabel label="아이디" name="username" placeholder="아이디" onChange={onChangeName} />
                {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={onChangePassword} />
                {password.length > 0 && (<span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>)}
                <InputWithLabel name="passwordConfirm" placeholder="비밀번호 확인" type="password" onChange={onChangePasswordConfirm}/>
                {passwordConfirm.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
          )}
                <InputWithLabel label="이메일" name="email" placeholder="이메일" onChange={onChangeEmail} />
                {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
            </AuthContent>
            <label>
                <input type="checkbox"/> 전체 회원 동의 <br/><br/>
                <input type="checkbox"/> 회원가입약관 동의 <button type="button" style={{border:"0", background:"0 0", cursor:"pointer", textDecoration:"underline", color:"gray", lineHeight:"1.5", display:"block", float:"right",  fontSize:"12px"}}
            class="link" onclick="privacyAgreeUsagePopBtnClickHandler2()">약관보기</button><br />
                <input type="checkbox"/> 개인정보취급방침 동의 <button type="button" style={{border:"0", background:"0 0", cursor:"pointer", textDecoration:"underline", color:"gray", lineHeight:"1.5", display:"block", float:"right",  fontSize:"12px"}}
            class="link" onclick="privacyAgreeUsagePopBtnClickHandler2()">약관보기</button><br />
            </label>
            <br /><br />

            
            <AuthButton>회원가입</AuthButton>
        </AuthWrapper>
    );
}
export default JoinMember;