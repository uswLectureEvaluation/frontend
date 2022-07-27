import React, { useState } from 'react';
import Myevaluation from './myevaluation';
import Testinformation from './testinformation';
import * as Styled from './myinfodetail.element';
import { useLocation } from 'react-router-dom';

const Myinfodetail = () => {
  const [evaluation, setEvaluation] = useState(true);
  const location = useLocation();
  const { props } = location.state;

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
        {evaluation ? <Myevaluation props={props} /> : <Testinformation props={props} />}
      </Styled.FlexBox>
    </Styled.FlexContainer>
  );
};
export default Myinfodetail;
