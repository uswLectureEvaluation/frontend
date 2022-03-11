import React from 'react'
import { Box } from '@material-ui/core'
import { SearchButton, Box1, Logo, String1, String2, AccountInput } from "./idsearch.element"


const Idsearch = () => {
    // 아이디 찾기 버튼 이벤트
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
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
                    <String1>아이디 찾기</String1>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <String2>학교 계정 입력</String2>
                        <AccountInput />
                        <Box />
                        <SearchButton
                            type="submit">아이디 찾기</SearchButton>
                    </Box>
                </Box1>
            </Box>
        </div>
    )
}
export default Idsearch