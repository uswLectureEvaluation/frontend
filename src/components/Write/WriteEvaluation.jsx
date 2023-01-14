import styled from '@emotion/styled/macro';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useMutation } from 'react-query';
import { queryClient } from 'index';
import { User } from 'api';
import { lectureState } from 'app/recoilStore';
import useSlider from 'components/Etc/RangeInput';

const WriteEvaluation = ({ setModalIsOpen, row, type }) => {
  const user = User();
  const current = useRecoilValue(lectureState);
  const [content, setContent] = useState(row.content);
  const [honey, HoneySlider] = useSlider(row.honey);
  const [learning, LearingSlider] = useSlider(row.learning);
  const [satisfaction, SatisfactionSlider] = useSlider(row.satisfaction);
  const [semester] = useState(row.selectedSemester); //학기
  const [team, setTeam] = useState(row.team); //조모임
  const [homework, setHomework] = useState(row.homework); //과제
  const [difficulty, setDifficulty] = useState(row.difficulty); //학점
  const evaluateWriting = useMutation(
    () =>
      user.writeEvaluation(
        row.selectId,
        row.lectureName,
        row.professor,
        semester,
        satisfaction,
        learning,
        honey,
        team,
        difficulty,
        homework,
        content
      ),
    {
      onSuccess: () => {
        alert('작성 완료');
        queryClient.invalidateQueries(['lecture', 'evaluationList', current.selectId]);
        queryClient.invalidateQueries(['lecture', 'detail', current.selectId]);
        queryClient.invalidateQueries(['myInfo']);
      },
    }
  );
  const evaluateUpdate = useMutation(
    () =>
      user.updateEvaluation(
        semester,
        satisfaction,
        learning,
        honey,
        team,
        difficulty,
        homework,
        content,
        row.id
      ),
    {
      onSuccess: () => {
        alert('수정 완료');
        queryClient.invalidateQueries(['myInfo', 'myEvaluation']);
      },
    }
  );

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onEvaluate = () => {
    if (semester === '' || semester === '선택') return alert('학기를 선택해주세요');
    if (honey < 0.5 || honey === undefined) return alert('꿀강지수는 0.5점부터 선택 가능합니다');
    if (learning < 0.5 || learning === undefined)
      return alert('배움지수는 0.5점부터 선택 가능합니다');
    if (satisfaction < 0.5 || satisfaction === undefined)
      return alert('만족도는 0.5점부터 선택 가능합니다');
    if (team === '') return alert('조모임(란)을 선택해주세요');
    if (homework === '') return alert('과제(란)을 선택해주세요');
    if (difficulty === '') return alert('학점(란)을 선택해주세요');
    if (content.length < 30 || content.length > 1000)
      return alert('최소 30자 이상 최대 1000자 이내로 입력해주세요');
    type === 'update' ? evaluateUpdate.mutate() : evaluateWriting.mutate();
    setModalIsOpen(false);
  };
  const teamChange = (e) => {
    setTeam(e.target.value);
  };
  const homeworkChange = (e) => {
    setHomework(e.target.value);
  };
  const difficultyChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{row.lectureName}</Title>
        <TitleButton
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          X
        </TitleButton>
      </TitleWrapper>

      <ContentWrapper>
        <Content id="group">
          <ContentTitle>수강학기</ContentTitle>
          {/* <SemesterSelect
            defaultValue={row.selectedSemester || '선택'}
            id="semester"
            onChange={(e) => {
              setSemester(e);
            }}
          >
            {optionsValue.map((index) => (
              <StyledOption id="semester" key={index} value={index}>
                <Soption id="semester">{index}</Soption>
              </StyledOption>
            ))}
          </SemesterSelect> */}
        </Content>
        <MobileContent id="semester">
          <ContentTitle id="mobile">수강학기</ContentTitle>
          {/* <SemesterSelect
            id="semester"
            defaultValue={row.selectedSemester || '선택'}
            onChange={(e) => {
              setSemester(e);
            }}
          >
            {optionsValue.map((index) => (
              <StyledOption id="semester" key={index} value={index}>
                <Soption id="semester">{index}</Soption>
              </StyledOption>
            ))}
          </SemesterSelect> */}
        </MobileContent>

        <Content>
          <ContentTitle>꿀강지수</ContentTitle>
          <HoneySlider /> <Score>{honey}</Score>
        </Content>
        <MobileContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <ContentTitle id="mobile">꿀강지수</ContentTitle>
            <Score id="mobile">{honey}</Score>
          </div>
          <HoneySlider />
        </MobileContent>

        <Content>
          <ContentTitle>배움지수</ContentTitle>
          <LearingSlider /> <Score>{learning}</Score>
        </Content>
        <MobileContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <ContentTitle id="mobile">배움지수</ContentTitle>
            <Score id="mobile">{learning}</Score>
          </div>
          <LearingSlider />
        </MobileContent>

        <Content id="group">
          <ContentTitle>만족도</ContentTitle>
          <SatisfactionSlider /> <Score>{satisfaction}</Score>
        </Content>
        <MobileContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <ContentTitle id="mobile">만족도</ContentTitle>
            <Score id="mobile">{satisfaction}</Score>
          </div>
          <SatisfactionSlider />
        </MobileContent>

        <Content id="content" onChange={teamChange}>
          <ContentTitle>조모임</ContentTitle>
          <label>
            <FormCheckLeft
              type="radio"
              name="team"
              id="easy"
              value={0}
              defaultChecked={team === 0}
            />
            <FormCheckText>없음</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="team"
              id="difficult"
              value={1}
              defaultChecked={team === 1}
            />
            <FormCheckText>있음</FormCheckText>
          </label>
        </Content>

        <Content id="content" onChange={homeworkChange}>
          <ContentTitle>과제</ContentTitle>
          <label>
            <FormCheckLeft
              type="radio"
              name="homework"
              id="easy"
              value={0}
              defaultChecked={homework === 0}
            />
            <FormCheckText>없음</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="homework"
              id="normal"
              value={1}
              defaultChecked={homework === 1}
            />
            <FormCheckText>보통</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="homework"
              id="difficult"
              value={2}
              defaultChecked={homework === 2}
            />
            <FormCheckText>많음</FormCheckText>
          </label>
        </Content>

        <Content id="content" onChange={difficultyChange}>
          <ContentTitle>학점</ContentTitle>
          <label>
            <FormCheckLeft
              type="radio"
              name="score"
              id="easy"
              value={0}
              defaultChecked={difficulty === 0}
            />
            <FormCheckText>너그러움</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="score"
              id="normal"
              value={1}
              defaultChecked={difficulty === 1}
            />
            <FormCheckText>보통</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              type="radio"
              name="score"
              id="difficult"
              value={2}
              defaultChecked={difficulty === 2}
            />
            <FormCheckText>까다로움</FormCheckText>
          </label>
        </Content>
      </ContentWrapper>
      <TextField
        placeholder="강의평가를 작성해주세요 :)"
        defaultValue={content}
        onChange={onChangeContent}
        rows="15"
      />
      <Wrapper id="button">
        <EditButton onClick={onEvaluate}>작성하기 (+10P)</EditButton>
      </Wrapper>
    </Wrapper>
  );
};

export default WriteEvaluation;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &#button {
    align-items: center;
  }
`;

const Title = styled.div`
  font-size: 18px;
  padding: 2rem;
  padding-bottom: 1rem;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

const TitleButton = styled.button`
  font-size: 18px;
  padding: 2rem;
  padding-bottom: 1rem;
  border: none;
  background-color: white;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

const Score = styled.span`
  margin: 2px 0 1px 24px;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.11;
  letter-spacing: 0.32px;
  color: #336af8;
  &#mobile {
    margin-right: 30px;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  margin: 1.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  @media only screen and (max-width: 550px) {
    padding-left: 1rem;
    margin-bottom: 0.7rem;
  }
`;

const Content = styled.form`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
  &#group {
    margin-bottom: 1.5rem;
  }
  @media only screen and (max-width: 550px) {
    display: none;
    &#content {
      display: flex;
      margin: 0.5rem 0;
      align-items: center;
    }
  }
`;

const MobileContent = styled.form`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    &#semester {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

const ContentTitle = styled.div`
  width: 20%;
  &#mobile {
    width: 30%;
  }
`;

const TextField = styled.textarea`
  margin-bottom: 20px;
  width: 100%;
  resize: none;
  padding: 22px;
  outline-color: #336af8;
  border: solid 1px #e0e0e0;
  border-radius: 15px;
  background-color: #f9f9f9;
  @media only screen and (max-width: 550px) {
    min-height: 50px;
    font-size: 16px;
    transform: scale(0.9);
  }
`;

const EditButton = styled.button`
  font-size: 16px;

  font-weight: 600;
  width: 350px;
  padding: 12px 20px;
  text-align: center;
  color: #ffffff;
  background-color: #336af8;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    color: none;
    background-color: #efefef;
  }
  @media only screen and (max-width: 550px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const FormCheckText = styled.span`
  font-size: 1vw;
  padding: 8px 15px;
  background: #eee;
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #777;
  margin-right: 8px;
  @media only screen and (max-width: 550px) {
    font-size: 12px;
    padding: 6px 9px;
  }
`;

const FormCheckLeft = styled.input`
  &:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;

    display: none;
  }
  &#difficult {
    &:checked + ${FormCheckText} {
      color: #7800ff;

      font-weight: 600;
    }
  }
  &#normal {
    &:checked + ${FormCheckText} {
      color: #222222;

      font-weight: 600;
    }
  }
  &#easy {
    &:checked + ${FormCheckText} {
      color: #336af8;

      font-weight: 600;
    }
  }
  display: none;
`;
