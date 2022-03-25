import React, { useState, useEffect } from 'react'
import { DetailSelectButton, SubjectText, SubjectDetail, EvaluationInput, EditButton, ModalLine, CancelButton } from './editevaluation.element';
import {CssBaseline, Grid, Box, Container } from "@material-ui/core";
// import { sliderClasses } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { evaluatePostsApi } from '../../Api/Api';

const useSlider = (min, max, defaultState, label, id) => {
  const [state, setSlide] = useState(defaultState);
  const handleChange = e => {
    setSlide(e.target.value);
  };

  const Slider = () => (
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      step={0.5}
      defaultValue={state} 
      onMouseUp={handleChange} 
    />
  );
  return [state, Slider, setSlide];
};

/* const Bar = (props) => {
  
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
 */

const Editevaluation = (props) => {
    let detail = ['꿀강 지수','배움 지수','만족도']
    const [db, setData] = useState({
      data: []
    })
   /* const onEvaluate = () => {
      evaluatePostsApi(setData);
    }*/
    useEffect(() => {
      console.log(db.data)
    }, [db.data])

    const [honey, HoneySlider] = useSlider(
      1,
      5,
      3,
    );
    const [learning, LearingSlider] = useSlider(
      1,
      5,
      3,
    );
    const [satisfaction, SatisfactionSlider] = useSlider(
      1,
      5,
      3,
    );
  
    const [team, setTeam] = useState('0'); //조모임
    const [homework, setHomework] = useState('0') //과제
    const [difficulty, setDifficulty] = useState('0') //학점

    const teamChange = (event, newAlignment) => {
      setTeam(newAlignment);
    };
    const homeworkChange = (event, newAlignment) => {
      setHomework(newAlignment);
    };
    const difficultyChange = (event, newAlignment) => {
      setDifficulty(newAlignment);
    };

    return(
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
              }}>
                    <SubjectText>학문과 사고</SubjectText>
                    <ModalLine/>
                    <div style={{marginTop:"10px"}}> 
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                          <SubjectDetail>{detail[0]}</SubjectDetail>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <HoneySlider/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <SubjectDetail>{honey}</SubjectDetail>
                        </Grid>
                      </Grid>
                    </div>
                    <div style={{marginTop:"10px"}}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                          <SubjectDetail>{detail[1]}</SubjectDetail>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <LearingSlider/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <SubjectDetail>{learning}</SubjectDetail>
                        </Grid>
                      </Grid>
                    </div>
                    <div style={{marginTop:"10px"}}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                          <SubjectDetail>{detail[2]}</SubjectDetail>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <SatisfactionSlider/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                          <SubjectDetail>{satisfaction}</SubjectDetail>
                        </Grid>
                      </Grid>
                    </div>
                    <Grid container spacing={3} style={{marginTop:'15px'}}>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>조모임</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                    <ToggleButtonGroup
                        color="primary"
                        value={team}
                        exclusive
                        onChange={teamChange}
                      >
                        <ToggleButton value='0'>없음</ToggleButton>
                        <ToggleButton value='1'>있음</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>과제</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                    <ToggleButtonGroup
                        color="primary"
                        value={homework}
                        exclusive
                        onChange={homeworkChange}
                      >
                        <ToggleButton value='0'>없음</ToggleButton>
                        <ToggleButton value='1'>보통</ToggleButton>
                        <ToggleButton value='2'>많음</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>학점</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                    <ToggleButtonGroup
                        color="primary"
                        value={difficulty}
                        exclusive
                        onChange={difficultyChange}
                      >
                        <ToggleButton value='0'>까다로움</ToggleButton>
                        <ToggleButton value='1'>보통</ToggleButton>
                        <ToggleButton value='2'>잘줌</ToggleButton>
                      </ToggleButtonGroup>
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
