import React, { useState } from 'react'
import { DetailSelectButton, SubjectText, SubjectDetail, EvaluationInput, EditButton, ModalColorBar, ModalLine, CancelButton } from './editevaluation.element';
import {CssBaseline, Grid, Box, Container } from "@material-ui/core";


export const Bar = (props) => {
  return (
    <div style={{marginTop:"10px"}}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <SubjectDetail>{props.detail[props.index]}</SubjectDetail>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ModalColorBar style={props.color[props.index]}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SubjectDetail>3.5 점</SubjectDetail>
      </Grid>
    </Grid>
    </div>
  )
}


const Editevaluation = (props) => {
    let [detail, setDetail] = useState(['꿀강 지수','배움 지수','만족도'])
    let [color, setColor] = useState([{backgroundColor: 'rgb(241, 196, 15)'},{backgroundColor: 'rgb(231, 76, 60)'},{backgroundColor: 'rgb(52, 152, 219)'}])
    return(
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
              }}>
                    <SubjectText>학문과 사고</SubjectText>
                    <ModalLine/>
                    { detail.map((name, index)=>
                     <Bar detail={detail} color={color} index={index}/>
                    )}
                    <Grid container spacing={3} style={{marginTop:'15px'}}>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>조모임</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <DetailSelectButton>없음</DetailSelectButton>
                      <DetailSelectButton>있음</DetailSelectButton>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>과제</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <DetailSelectButton>없음</DetailSelectButton>
                      <DetailSelectButton>보통</DetailSelectButton>
                      <DetailSelectButton>많음</DetailSelectButton>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>학점</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <DetailSelectButton>까다로움</DetailSelectButton>
                      <DetailSelectButton>보통</DetailSelectButton>
                      <DetailSelectButton>잘줌</DetailSelectButton>
                    </Grid>
                  </Grid>
                  <ModalLine/>
                  <EvaluationInput/>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                      <CancelButton onClick={()=>{props.setModalIsOpen(false)}}>취소</CancelButton>
                      <EditButton>수정하기</EditButton>
                    </Grid>
                  </Grid>
                </Box>
          </Container>
    )
    
}
export default Editevaluation