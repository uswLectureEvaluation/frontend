import React, { Component } from 'react'
import { String1, String2, String3, String4, Circle1, Line1, ColorString1, ColorString2, LoginButton, TextButton, Button1 } from './myinformation.element'
import { CssBaseline, Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'


const Myinformation = () => {
  const navigate = useNavigate();

  return (
      <Container component="main" maxWidth="sm">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
          }}>
          <Box noValidate sx={{
            mt: 3,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <String1>보유 포인트</String1>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Circle1>
                  <String3>100 p</String3>
                </Circle1>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Line1 />
              </Grid>
              <Grid item xs={12} sm={7}>
                <String2>작성한 강의 평가 : 0개 <ColorString1>(+100P)</ColorString1></String2>
                <String2>작성한 시험 정보 : 0개 <ColorString1>(+40P)</ColorString1></String2>
                <String2>시험 정보 열람 : 0개 <ColorString2>(-40P)</ColorString2></String2>
              </Grid>
            </Grid>
          </Box>
          <Box noValidate sx={{
            mt: 3,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <String1>내 정보</String1>
            <Button1 onClick={() => { navigate("/myinfodetail") }}>내가 쓴 글</Button1>
            <String4>로그인 아이디</String4>
            <String4 style={{fontWeight:"normal"}}>koownij</String4>
          </Box>
          <Box noValidate sx={{
            mt: 3,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <TextButton>피드백 전송</TextButton>
            <TextButton>문의하기</TextButton>
            <TextButton>비밀번호 변경</TextButton>
            <TextButton>이용약관</TextButton>
            <TextButton>개인정보처리방침</TextButton>
            <TextButton>회원 탈퇴</TextButton>
          </Box>
        </Box>
      </Container>
  );
}

export default Myinformation