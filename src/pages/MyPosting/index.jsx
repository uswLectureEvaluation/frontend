import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components';
import Myevaluation from '../../components/MyEvaluation';
import Testinformation from '../../components/MyTestInfo';
import { isLoginStorage } from '../../utils/loginStorage.js';
import * as Styled from './styled';

const MyPosting = () => {
  const [evaluation, setEvaluation] = useState(true);
  const navigte = useNavigate();

  return !isLoginStorage() ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Styled.FlexContainer id="col">
        <Button color="#336af8" onClick={() => navigte('/login')}>
          로그인하기
        </Button>
      </Styled.FlexContainer>
    </div>
  ) : (
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
