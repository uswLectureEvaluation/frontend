import React from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import { SearchButton, WrapperBox, Logo, BoldText, NormalText, AccountInput } from "./idsearch.element"


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
        <div style={{marginTop:"20px"}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                <CssBaseline/>
                <WrapperBox>
                    <Logo>SUGANG</Logo>
                    <BoldText>아이디 찾기</BoldText>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <NormalText>학교 계정 입력</NormalText>
                        <AccountInput />
                        <Box />
                        <SearchButton
                            type="submit">아이디 찾기</SearchButton>
                    </Box>
                </WrapperBox>
            </Box>
        </div>
    )
}
export default Idsearch