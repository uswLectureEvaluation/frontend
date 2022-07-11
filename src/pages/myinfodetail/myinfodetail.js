import React, { useState } from 'react';
import Myevaluation from '../Myinfodetail/Myevaluation';
import Testinformation from '../Myinfodetail/Testinformation';
import * as Styled from './myinfodetail.element';

const Myinfodetail = () => {
  const [evaluation, setEvaluation] = useState(true);

  return (
    <Styled.FlexContainer>
      <Styled.FlexBox>
        <Styled.TextLink
          id={evaluation === true ? 'selected' : 'none'}
          onClick={() => {
            setEvaluation(true);
          }}
        >
          강의평가
        </Styled.TextLink>
        <Styled.TextLink
          id={evaluation === true ? 'none' : 'selected'}
          onClick={() => {
            setEvaluation(false);
          }}
        >
          시험정보
        </Styled.TextLink>
        <Styled.MarginBottom />
        {evaluation === true ? <Myevaluation /> : <Testinformation />}
      </Styled.FlexBox>
    </Styled.FlexContainer>
  );
};
export default Myinfodetail;
