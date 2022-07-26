import React, { useState } from 'react';
import Myevaluation from './myevaluation';
import Testinformation from './testinformation';
import * as Styled from './myinfodetail.element';
import { useLocation } from 'react-router-dom';

const Myinfodetail = () => {
  const [evaluation, setEvaluation] = useState(true);
  const { state } = useLocation();
  return (
    <Styled.FlexContainer>
      <Styled.FlexBox>
        <Styled.TextLink
          id={evaluation ? 'selected' : 'none'}
          onClick={() => {
            setEvaluation(true);
          }}
        >
          강의평가
        </Styled.TextLink>
        <Styled.TextLink
          id={evaluation ? 'none' : 'selected'}
          onClick={() => {
            setEvaluation(false);
          }}
        >
          시험정보
        </Styled.TextLink>
        {evaluation ? <Myevaluation point={state}/> : <Testinformation point={state}/>}
      </Styled.FlexBox>
    </Styled.FlexContainer>
  );
};
export default Myinfodetail;
