import React, { useState } from 'react'
import {BoxString1, BoxString2, BoxString3, BoxString4, BoxString5, BoxButton1, BoxButton2, ModalString1 } from './myevaluation.element'
import {CssBaseline, Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme();

const Myevaluation =  () => {

  let [subjectName, setSubjectName] = useState(['학문과 사고', '네트워크 개론', '데이터베이스', '운영체제론', '졸업프로젝트'])

        return (
            <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        

        { subjectName.map((name, index)=>
                <Subject subjectName={subjectName} index={index}/>
        )}
      </Container>
    </ThemeProvider>
  );
}

export const Modal = () => {
  return(
    <div style={{marginTop:"10px"}}>
      <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <ModalString1>만족도 ⭐⭐⭐⭐</ModalString1>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ModalString1>꿀강 지수 ⭐⭐⭐⭐</ModalString1>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ModalString1>배움 지수 ⭐⭐⭐⭐</ModalString1>
            </Grid>
      </Grid>
      <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <ModalString1>조모임 ⭐⭐⭐⭐</ModalString1>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ModalString1>과제 ⭐⭐⭐⭐</ModalString1>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ModalString1>학점 ⭐⭐⭐⭐</ModalString1>
            </Grid>
      </Grid>  
    </div>
  )
}

export const Subject = (props) => {
  let [modal, setModal] = useState(false);
  let [edit, setEdit] = useState(false);

  
  return(
    <Box noValidate sx={{ 
      mt: 3 ,
      border: '2px solid rgb(158,158,158)',
      border: '2px solid rgba(158,158,158,.5)',
      padding: '20px',
      borderRadius: '20px'
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <BoxString1>2020-1</BoxString1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <BoxButton2 style={{float: "right"}}>삭제</BoxButton2>
              <BoxButton1 style={{float: "right"}}>수정</BoxButton1>
            </Grid>
          </Grid>  
          <BoxString2>{props.subjectName[props.index]}</BoxString2>
          <BoxString4 style={{ paddingLeft:'10px' }}>이다미 교수님</BoxString4>
          <div/>
          <BoxString3>평균 지수</BoxString3>
          <BoxString3 style={{ paddingLeft:'10px' }}>⭐⭐⭐⭐⭐</BoxString3>
          <span>5.0</span>
          <BoxString5 onClick={()=>{setModal(!modal)}}>{modal===true ? '간략하게 보기 >' : '자세히 보기 >'}</BoxString5>
          { modal===true ? <Modal />  : null}
          <BoxString1>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          </BoxString1>
          </Box>
  )
}

export default Myevaluation