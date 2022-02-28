import React, { useState } from 'react'
import { BoxString1, BoxString2, BoxString3, BoxString4, BoxString5, BoxString6, BoxButton1, BoxButton2, ModalString1 } from './styled'
import { Typography, Dialog, CssBaseline, Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import Editevaluation from '../EditEvaluation'
import { Option } from '../../pages/LectureInfo/styled'


const MyEvaluation = () => {

  let [subjectName, setSubjectName] = useState(['학문과 사고', '네트워크 개론'])

  return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        {subjectName.map((name, index) =>
          <Subject subjectName={subjectName} index={index} />,
        )}
      </Container>
  );
}

export const Modal1 = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ModalString1>만족도 ⭐⭐⭐⭐</ModalString1>
          <ModalString1>조모임 ⭐⭐⭐⭐</ModalString1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalString1>꿀강 지수 ⭐⭐⭐⭐</ModalString1>
          <ModalString1>과제 ⭐⭐⭐⭐</ModalString1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalString1>배움 지수 ⭐⭐⭐⭐</ModalString1>
          <ModalString1>학점 ⭐⭐⭐⭐</ModalString1>
        </Grid>
      </Grid>
    </div>
  )
}

export const Subject = (props) => {
  let [modal, setModal] = useState(false);
  let [edit, setEdit] = useState(false);

  return (
    <Box noValidate sx={{
      mt: 3,
    //   border: '2px solid rgb(158,158,158)',
    //   border: '2px solid rgba(158,158,158,.5)',
          borderTop: '1px solid black',
      padding: '20px',
    //   borderRadius: '20px'
    }}>
      <div style={{ marginBottom: '15px' }}>
        <BoxString1>2020-1</BoxString1>
        <BoxButton2 style={{ float: "right" }}>신고</BoxButton2>
        {/* <BoxButton1 onClick={() => { setEdit(!edit) }} style={{ float: "right" }}>수정</BoxButton1> */}
      </div>
      <div>
        <BoxString2>{props.subjectName[props.index]}</BoxString2>
        <BoxString4>이다미 교수님</BoxString4>
      </div>
      <BoxString3>평균 지수</BoxString3>
      <BoxString3 style={{ paddingLeft: '10px' }}>⭐⭐⭐⭐⭐</BoxString3>
      <span>5.0</span>
      <BoxString5 onClick={() => { setModal(!modal) }}>{modal === true ? '간략하게 보기 >' : '자세히 보기 >'}</BoxString5>
      {modal === true ? <Modal1 /> : null}
      <BoxString6>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하
      </BoxString6>
      {edit === true ? <Editevaluation /> : null}
    </Box>
  )
}

export default MyEvaluation