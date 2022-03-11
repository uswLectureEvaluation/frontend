import React from 'react'
import { Box } from '@material-ui/core'
import { Box1, String1, String2, String3, SearchButton, Logo, IdInput, EmailInput } from './pwsearch.element'

const Pwsearch = () => {
    // 비밀번호 찾기 버튼 이벤트
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            id: data.get('id'),
        });
    };
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <Box1>
                    <Logo>SUGANG</Logo>
                    <String1>비밀번호 찾기</String1>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <String2>SUGANG 아이디/이메일 입력</String2>
                        <IdInput />
                        <EmailInput />
                        <Box />
                        <SearchButton type='submit'>비밀번호 찾기</SearchButton>
                    </Box>
                    <String3>아이디에 해당하는 학교메일로 임시 비밀번호를 전송합니다.</String3>
                </Box1>
            </Box>
        </div>
    )
}

export default Pwsearch