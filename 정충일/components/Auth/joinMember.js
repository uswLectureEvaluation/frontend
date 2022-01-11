import React from 'react';
import { AuthContent, InputWithLabel,AuthButton, AuthWrapper } from '../Auth';

const joinMember = () => {
    return (
        <AuthWrapper>
            <AuthContent title="회원가입">
                <InputWithLabel label="아이디" name="username" placeholder="아이디"/>
                <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
                <InputWithLabel name="passwordConfirm" placeholder="비밀번호 확인" type="password"/>
                <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
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
export default joinMember;
