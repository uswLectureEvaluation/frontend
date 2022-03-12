import React from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import { WrapperBox, BoldText, NormalText, SmallText, SearchButton, Logo, IdInput, EmailInput } from './pwsearch.element'

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
                    <BoldText>비밀번호 찾기</BoldText>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <NormalText>SUGANG 아이디/이메일 입력</NormalText>
                        <IdInput />
                        <EmailInput />
                        <Box />
                        <SearchButton type='submit'>비밀번호 찾기</SearchButton>
                    </Box>
                    <SmallText>아이디에 해당하는 학교메일로 임시 비밀번호를 전송합니다.</SmallText>
                </WrapperBox>
            </Box>
        </div>
    )
}

export default Pwsearch