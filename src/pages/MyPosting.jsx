import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components';
import EvaluationList from '../components/EvaluationList';
import TestInfoList from '../components/TestInfoList';
import { isLoginStorage } from '../utils/loginStorage.js';
import styled from 'styled-components';

const MyPosting = () => {
  const [evaluation, setEvaluation] = useState(true);
  const navigate = useNavigate();

  return !isLoginStorage() ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FlexContainer id="col">
        <Button color="#336af8" onClick={() => navigate('/login')}>
          로그인하기
        </Button>
      </FlexContainer>
    </div>
  ) : (
    <FlexContainer>
      <FlexBox>
        <TextLink
          id={evaluation ? 'selected' : 'none'}
          onClick={() => {
            setEvaluation(true);
          }}
        >
          강의평가
        </TextLink>
        <TextLink
          id={evaluation ? 'none' : 'selected'}
          onClick={() => {
            setEvaluation(false);
          }}
        >
          시험정보
        </TextLink>
        {evaluation ? <EvaluationList /> : <TestInfoList />}
      </FlexBox>
    </FlexContainer>
  );
};
export default MyPosting;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  &#col {
    width: 35%;
    @media screen and (max-width: 550px) {
      width: 90%;
    }
  }
`;
const FlexBox = styled.div`
  width: 900px;
  padding-top: 40px;
`;

const TextLink = styled.span`
  font-size: 20px;
  color: #a3a3a3;
  margin-left: 15px;
  &#selected {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;
