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
                <AuthButton>회원가입</AuthButton>
            </AuthContent>
        </AuthWrapper>
    );
}

export default joinMember;
