import React, { useState } from 'react'
import { DetailSelectButton, SubjectText, SubjectDetail, EvaluationInput, EditButton, ModalColorBar, ModalLine, CancelButton, RangeSlider, RangeOutput } from './editevaluation.element';
import {CssBaseline, Grid, Box, Container } from "@material-ui/core";
import { sliderClasses } from '@mui/material';


const useSlider = (min, max, defaultState, label, id) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = e => {
    console.log('setting level', e.target.value)
    setSlide(e.target.value);
  };

  const Slider = () => (
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      step={0.5}
      defaultValue={state} // but instead pass state value as default value
      onChange={e => console.log(e.target.value)} // don't set state on all change as react will re-render
      onMouseUp={handleChange} // only set state when handle is released
    />
  );
  return [state, Slider, setSlide];
};

const Bar = (props) => {
  
  const [slideValue, Slider] = useSlider(
    1,
    5,
    3,
  );
  return (
    <div style={{marginTop:"10px"}}>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <SubjectDetail>{props.detail[props.index]}</SubjectDetail>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Slider/>
      </Grid>
      <Grid item xs={12} sm={3}>
        <SubjectDetail>{slideValue}</SubjectDetail>
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