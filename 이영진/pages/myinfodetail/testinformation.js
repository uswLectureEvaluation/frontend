import React, { useState } from 'react'
import {BoxString1, BoxString2, BoxString4, BoxButton1, BoxButton2 } from './testinformation.element'
import {CssBaseline,Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";


const theme = createTheme();

const Testinformation =  () => {

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


export const Subject = (props) => {
  let [modal, setModal] = useState(false);

  return(
    <Box noValidate sx={{ 
      mt: 3 ,
      border: '2px solid rgb(158,158,158)',
      border: '2px solid rgba(158,158,158,.5)',
      padding: '20px',
      borderRadius: '20px'
        }}>
            <div style={{marginBottom:'15px'}}>
              <BoxString1>2020-1</BoxString1>
              <BoxButton2 style={{float: "right"}}>삭제</BoxButton2>
              <BoxButton1 style={{float: "right"}}>수정</BoxButton1>
            </div>
          <div>
          <BoxString2>{props.subjectName[props.index]}</BoxString2>
          <BoxString4 style={{ paddingLeft:'10px' }}>이다미 교수님</BoxString4>
          </div>
            <BoxString1>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          </BoxString1>
          </Box>
  )
}

export default Testinformation