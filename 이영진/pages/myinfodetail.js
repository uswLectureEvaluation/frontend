import React, { useState } from 'react'
import { Box1, Box2, String1, String2, String3, String4, Circle1, line1, Line1, ColorString1, ColorString2, LoginButton, TextButton, BoxString1, BoxString2, BoxString3, BoxString4 } from './myevaluation.element'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "@material-ui/core";
import { border } from '@mui/system';


const theme = createTheme();

const Myinformation =  () => {

  let [modal, setModal] = useState(false);

        return (
            <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
          }}>
            <String1>내가 쓴 글</String1>
          <Box noValidate sx={{ 
            mt: 1 ,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
              }}>
            <String2>강의평가</String2>
            <String2>시험정보</String2>
            <Box noValidate sx={{ 
            mt: 3 ,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '20px'
              }}>
                <BoxString1>2020-1</BoxString1>
                <BoxString2>학문과 사고</BoxString2>
                <BoxString4 style={{ paddingLeft:'10px' }}>이다미 교수님</BoxString4>
                <div/>
                <BoxString3>평균 지수</BoxString3>
                <BoxString3 style={{ paddingLeft:'10px' }}>⭐⭐⭐⭐⭐</BoxString3>
                <BoxString1>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하
                가나다라마바사아자차카타파하
                </BoxString1>
                </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Myinformation
