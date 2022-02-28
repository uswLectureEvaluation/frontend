import React, { useState } from 'react'
import { BoxButton1, BoxString2, BoxString3, BoxString4, EvaluationInput, EditButton, ModalBar, ModalLine, CancelButton } from './editevaluation.element';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "@material-ui/core";
import { border } from '@mui/system';


export const Bar = (props) => {
  return (
    <div style={{marginTop:"10px"}}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <BoxString3>{props.detail[props.index]}</BoxString3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <ModalBar style={props.color[props.index]}/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <BoxString3>3.5 점</BoxString3>
      </Grid>
    </Grid>
    </div>
  )
}

const Editevaluation = (props) => {
    let [detail, setDetail] = useState(['꿀강 지수','배움 지수','만족도'])
    let [select, Setselect] = useState(['조모임', '과제', '학점'])
    let [color, setColor] = useState([{backgroundColor: 'rgb(241, 196, 15)'},{backgroundColor: 'rgb(231, 76, 60)'},{backgroundColor: 'rgb(52, 152, 219)'}])
    return(
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
              }}>
              <Box noValidate sx={{ 
                mt: 1 ,
                border: '2px solid rgb(158,158,158)',
                border: '2px solid rgba(158,158,158,.5)',
                padding: '20px',
                borderRadius: '10px'
                  }}>
                    <BoxString2>학문과 사고</BoxString2>
                    <ModalLine/>
                    { detail.map((name, index)=>
                     <Bar detail={detail} color={color} index={index}/>
                    )}
                    <Grid container spacing={3} style={{marginTop:'15px'}}>
                    <Grid item xs={12} sm={3}>
                      <BoxString3>조모임</BoxString3>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <BoxButton1>없음</BoxButton1>
                      <BoxButton1>있음</BoxButton1>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <BoxString3>과제</BoxString3>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <BoxButton1>없음</BoxButton1>
                      <BoxButton1>보통</BoxButton1>
                      <BoxButton1>많음</BoxButton1>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <BoxString3>학점</BoxString3>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <BoxButton1>까다로움</BoxButton1>
                      <BoxButton1>보통</BoxButton1>
                      <BoxButton1>잘줌</BoxButton1>
                    </Grid>
                  </Grid>
                  <ModalLine/>
                  <EvaluationInput/>
                  <Grid container spacing={3} style={{marginTop:'5px'}}>
                    <Grid item xs={12} sm={12}>
                      <CancelButton>취소</CancelButton>
                      <EditButton>수정하기</EditButton>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
          </Container>
    )
    
}
export default Editevaluation