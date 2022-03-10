import React, { useState } from 'react'
import { BoxButton1, BoxString2, BoxString3, BoxString4, EvaluationInput, EditButton, ModalBar, ModalLine, CancelButton, SelectBox } from './edittestinfo.element';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "@material-ui/core";
import { border } from '@mui/system';


const Edittestinfo = (props) => {
    return(
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
              }}>
                    <BoxString2>학문과 사고</BoxString2>
                    <Grid container spacing={2} style={{marginTop:'15px'}}>
                    <Grid item xs={12} sm={3}>
                      <BoxString3>수강학기 선택</BoxString3>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                        <SelectBox/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <BoxString3>시험내용</BoxString3>
                      <div style={{fontSize:'11px'}}>(복수선택)</div>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <BoxButton1>족보</BoxButton1>
                      <BoxButton1>교재</BoxButton1>
                      <BoxButton1>PPT</BoxButton1>
                      <BoxButton1>필기</BoxButton1>
                      <BoxButton1>응용</BoxButton1>
                      <BoxButton1>실습</BoxButton1>
                      <BoxButton1>과제</BoxButton1>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <BoxString3>난이도</BoxString3>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <BoxButton1>매우 쉬움</BoxButton1>
                      <BoxButton1>쉬움</BoxButton1>
                      <BoxButton1>보통</BoxButton1>
                      <BoxButton1>어려움</BoxButton1>
                      <BoxButton1>매우 어려움</BoxButton1>
                    </Grid>
                  </Grid>
                  <ModalLine/>
                  <EvaluationInput/>
                  <Grid container spacing={3} style={{marginTop:'5px'}}>
                    <Grid item xs={12} sm={12}>
                      <CancelButton onClick={()=>{props.setModalIsOpen(false)}}>취소</CancelButton>
                      <EditButton>수정하기</EditButton>
                    </Grid>
                  </Grid>
                </Box>
          </Container>
    )
    
}
export default Edittestinfo