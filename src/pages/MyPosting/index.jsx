import { useState } from 'react';
import Myevaluation from '../../components/MyEvaluation';
import Testinformation from '../../components/MyTestInfo';
import * as Styled from './styled';

const MyPosting = () => {
  const [evaluation, setEvaluation] = useState(true);

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
        {evaluation ? <Myevaluation /> : <Testinformation />}
      </Styled.FlexBox>
    </Styled.FlexContainer>
  );
};
export default MyPosting;
