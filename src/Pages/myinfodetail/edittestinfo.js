import React, {useState} from 'react'
import { DetailSelectButton, SubjectText, SubjectDetail, EvaluationInput, EditButton, ModalLine, CancelButton, SelectBox } from './edittestinfo.element';
import { CssBaseline, Grid, Box, Container } from "@material-ui/core";


const Edittestinfo = (props) => {

  const [content, setContent] = useState();
  const onChangeContent = (e) => {
        setContent(e.target.value);
        console.log(content);
      }

    return(
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
              }}>
                    <SubjectText>{props.lectureName}</SubjectText>
                    <Grid container spacing={2} style={{marginTop:'15px'}}>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>수강학기 선택</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                        <SelectBox/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>시험내용</SubjectDetail>
                      <div style={{fontSize:'11px'}}>(복수선택)</div>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <DetailSelectButton>족보</DetailSelectButton>
                      <DetailSelectButton>교재</DetailSelectButton>
                      <DetailSelectButton>PPT</DetailSelectButton>
                      <DetailSelectButton>필기</DetailSelectButton>
                      <DetailSelectButton>응용</DetailSelectButton>
                      <DetailSelectButton>실습</DetailSelectButton>
                      <DetailSelectButton>과제</DetailSelectButton>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <SubjectDetail>난이도</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{float: "right"}}>
                      <DetailSelectButton>매우 쉬움</DetailSelectButton>
                      <DetailSelectButton>쉬움</DetailSelectButton>
                      <DetailSelectButton>보통</DetailSelectButton>
                      <DetailSelectButton>어려움</DetailSelectButton>
                      <DetailSelectButton>매우 어려움</DetailSelectButton>
                    </Grid>
                  </Grid>
                  <ModalLine/>
                  <EvaluationInput propsfunction={onChangeContent} content={props.content}/>
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