import React, { useState } from 'react'
import { HeaderText, TextLink } from './myinfodetail.element'
import { CssBaseline, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import Myevaluation from '../myinfodetail/myevaluation';
import Testinformation from '../myinfodetail/testinformation'
import { style } from '@mui/system';

const Myinfodetail = () => {
  const [evaluation, setEvaluation] = useState(true)
  return (
    <div>
    <CssBaseline/>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
          }}>
          <HeaderText>내가 쓴 글</HeaderText>
          <Box noValidate sx={{
            mt: 1,
            border: '2px solid rgb(158,158,158)',
            border: '2px solid rgba(158,158,158,.5)',
            padding: '20px',
            borderRadius: '10px'
          }}>
            <TextLink className={evaluation===true?'selected':'no'} onClick={() => { setEvaluation(true)  }}>강의평가</TextLink>
            <TextLink onClick={() => { setEvaluation(false) }}>시험정보</TextLink>
            {
              evaluation === true ? <Myevaluation /> : <Testinformation />
            }
          </Box>
        </Box>
      </Container>
     </div>
  )
}
export default Myinfodetail
