import React, { Component } from 'react'
import { BoldText, NormalText, PointText, SmallText, Circle, SeperateLine, RedText, BlueText, TextLink, GrayButton } from './myinformation.element'
import { CssBaseline, Grid, Box, Container} from "@material-ui/core";
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
            <BoldText>보유 포인트</BoldText>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Circle>
                  <PointText>100 p</PointText>
                </Circle>
              </Grid>
              <Grid item xs={12} sm={1}>
                <SeperateLine />
              </Grid>
              <Grid item xs={12} sm={7}>
                <NormalText>작성한 강의 평가 : 0개 <RedText>(+100P)</RedText></NormalText>
                <NormalText>작성한 시험 정보 : 0개 <RedText>(+40P)</RedText></NormalText>
                <NormalText>시험 정보 열람 : 0개 <BlueText>(-40P)</BlueText></NormalText>
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
            <BoldText>내 정보</BoldText>
            <GrayButton onClick={() => { navigate("/myinfodetail") }}>내가 쓴 글</GrayButton>
            <SmallText>로그인 아이디</SmallText>
            <SmallText style={{fontWeight:"normal"}}>koownij</SmallText>
          </Box>
          <Box noValidate sx={{
            mt: 3,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <TextLink>피드백 전송</TextLink>
            <TextLink>문의하기</TextLink>
            <TextLink>비밀번호 변경</TextLink>
            <TextLink>이용약관</TextLink>
            <TextLink>개인정보처리방침</TextLink>
            <TextLink>회원 탈퇴</TextLink>
          </Box>
        </Box>
      </Container>
  );
}

export default Myinformation