import styled from '@emotion/styled';

const EvaluationDetail = ({ lecture }) => {
  const teamSet = lecture.team;
  const homeworkSet = lecture.homework;
  const difficultySet = lecture.difficulty;

  const team = {
    0: <DataColor id="cyan">없음</DataColor>,
    1: <DataColor id="purple">있음</DataColor>,
  };
  const homework = {
    0: <DataColor id="cyan">없음</DataColor>,
    1: <DataColor id="black">보통</DataColor>,
    2: <DataColor id="purple">많음</DataColor>,
  };
  const difficulty = {
    0: <DataColor id="cyan">너그러움</DataColor>,
    1: <DataColor id="black">보통</DataColor>,
    2: <DataColor id="purple">까다로움</DataColor>,
  };

  return (
    <StarFlex id="top">
      <FlexContainer id="col">
        <StarFlex id="between">
          만족도
          <PaddingRight />
          <Rate id="modal">{lecture.satisfaction?.toFixed(1)}</Rate>
        </StarFlex>
        <StarFlex id="between">조모임 {team[teamSet]}</StarFlex>
      </FlexContainer>
      <FlexContainer id="col">
        <StarFlex id="between">
          꿀강 지수
          <PaddingRight />
          <Rate id="modal">{lecture.honey?.toFixed(1)}</Rate>
        </StarFlex>
        <StarFlex id="between">과제 {homework[homeworkSet]}</StarFlex>
      </FlexContainer>
      <FlexContainer id="col">
        <StarFlex id="between">
          배움 지수
          <PaddingRight />
          <Rate id="modal">{lecture.learning?.toFixed(1)}</Rate>
        </StarFlex>
        <StarFlex id="between">학점 {difficulty[difficultySet]}</StarFlex>
      </FlexContainer>
    </StarFlex>
  );
};

export default EvaluationDetail;

const StarFlex = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 1rem;
  padding: 5px 12px;
  font-size: 13px;
  &#top {
    padding: 8px 12px 0px 12px;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
  }
  &#between {
    justify-content: space-between;
    font-weight: 300;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;

const Rate = styled.span`
  color: #336af8;

  font-size: 18px;
  font-weight: 500;
  padding-left: 5px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

const DataColor = styled.div`
  &#black {
    color: black;
  }
  &#cyan {
    color: #336af8;
  }
  &#purple {
    color: #6200ee;
  }
`;
