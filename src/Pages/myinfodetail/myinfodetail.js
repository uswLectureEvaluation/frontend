import React, { useState } from 'react';
import { HeaderText, TextLink } from './myinfodetail.element';
import { CssBaseline, Box, Container } from '@material-ui/core';
import Myevaluation from '../myinfodetail/myevaluation';
import Testinformation from '../myinfodetail/testinformation';

const Myinfodetail = () => {
  const [evaluation, setEvaluation] = useState(true);
 

  return (
    <div>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
          }}
        >     
            <TextLink
              id={evaluation === true ? 'selected' : 'none'}
              onClick={() => {
                setEvaluation(true);
              }}
            >
              강의평가
            </TextLink>
            <TextLink
              id={evaluation === true ? 'none' : 'selected'}
              onClick={() => {
                setEvaluation(false);
              }}
            >
              시험정보
            </TextLink>
            {evaluation === true ? <Myevaluation /> : <Testinformation />}
        </Box>
      </Container>
    </div>
  );
};
export default Myinfodetail;
