import { useState } from 'react';
import * as Styled from './styled';
import { SemesterSelect, StyledOption, Soption } from '../../pages/Main/styled';
import { useRecoilValue } from 'recoil';
import { lectureState } from '../../app/recoilStore';
import { useMutation } from 'react-query';
import { queryClient } from '../..';
import User from '../../api/User';
import useSlider from '../RangeInput';

const WriteEvaluation = ({ setModalIsOpen, row, type }) => {
  const user = User();
  const current = useRecoilValue(lectureState);
  const [content, setContent] = useState(row.content);
  const [honey, HoneySlider] = useSlider(row.honey);
  const [learning, LearingSlider] = useSlider(row.learning);
  const [satisfaction, SatisfactionSlider] = useSlider(row.satisfaction);
  const [semester, setSemester] = useState(row.selectedSemester); //학기
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
  console.log(honey, learning, satisfaction);
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
  const options = ['선택'];
  const optionsValue = options.concat(row.semesterList.split(', '));

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{row.lectureName}</Styled.Title>
        <Styled.TitleButton
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          X
        </Styled.TitleButton>
      </Styled.TitleWrapper>

      <Styled.ContentWrapper>
        <Styled.Content id="group">
          <Styled.ContentTitle>수강학기</Styled.ContentTitle>
          <SemesterSelect
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
          </SemesterSelect>
        </Styled.Content>
        <Styled.MobileContent id="semester">
          <Styled.ContentTitle id="mobile">수강학기</Styled.ContentTitle>
          <SemesterSelect
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
          </SemesterSelect>
        </Styled.MobileContent>

        <Styled.Content>
          <Styled.ContentTitle>꿀강지수</Styled.ContentTitle>
          <HoneySlider /> <Styled.Score>{honey}</Styled.Score>
        </Styled.Content>
        <Styled.MobileContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <Styled.ContentTitle id="mobile">꿀강지수</Styled.ContentTitle>
            <Styled.Score id="mobile">{honey}</Styled.Score>
          </div>
          <HoneySlider />
        </Styled.MobileContent>

        <Styled.Content>
          <Styled.ContentTitle>배움지수</Styled.ContentTitle>
          <LearingSlider /> <Styled.Score>{learning}</Styled.Score>
        </Styled.Content>
        <Styled.MobileContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <Styled.ContentTitle id="mobile">배움지수</Styled.ContentTitle>
            <Styled.Score id="mobile">{learning}</Styled.Score>
          </div>
          <LearingSlider />
        </Styled.MobileContent>

        <Styled.Content id="group">
          <Styled.ContentTitle>만족도</Styled.ContentTitle>
          <SatisfactionSlider /> <Styled.Score>{satisfaction}</Styled.Score>
        </Styled.Content>
        <Styled.MobileContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <Styled.ContentTitle id="mobile">만족도</Styled.ContentTitle>
            <Styled.Score id="mobile">{satisfaction}</Styled.Score>
          </div>
          <SatisfactionSlider />
        </Styled.MobileContent>

        <Styled.Content id="content" onChange={teamChange}>
          <Styled.ContentTitle>조모임</Styled.ContentTitle>
          <label>
            <Styled.FormCheckLeft name="team" id="easy" value={0} defaultChecked={team === 0} />
            <Styled.FormCheckText>없음</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="team"
              id="difficult"
              value={1}
              defaultChecked={team === 1}
            />
            <Styled.FormCheckText>있음</Styled.FormCheckText>
          </label>
        </Styled.Content>

        <Styled.Content id="content" onChange={homeworkChange}>
          <Styled.ContentTitle>과제</Styled.ContentTitle>
          <label>
            <Styled.FormCheckLeft
              name="homework"
              id="easy"
              value={0}
              defaultChecked={homework === 0}
            />
            <Styled.FormCheckText>없음</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="homework"
              id="normal"
              value={1}
              defaultChecked={homework === 1}
            />
            <Styled.FormCheckText>보통</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="homework"
              id="difficult"
              value={2}
              defaultChecked={homework === 2}
            />
            <Styled.FormCheckText>많음</Styled.FormCheckText>
          </label>
        </Styled.Content>

        <Styled.Content id="content" onChange={difficultyChange}>
          <Styled.ContentTitle>학점</Styled.ContentTitle>
          <label>
            <Styled.FormCheckLeft
              name="score"
              id="easy"
              value={0}
              defaultChecked={difficulty === 0}
            />
            <Styled.FormCheckText>너그러움</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="score"
              id="normal"
              value={1}
              defaultChecked={difficulty === 1}
            />
            <Styled.FormCheckText>보통</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="score"
              id="difficult"
              value={2}
              defaultChecked={difficulty === 2}
            />
            <Styled.FormCheckText>까다로움</Styled.FormCheckText>
          </label>
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.TextField
        placeholder="강의평가를 작성해주세요 :)"
        defaultValue={content}
        onChange={onChangeContent}
        rows="15"
      />
      <Styled.Wrapper id="button">
        <Styled.EditButton onClick={onEvaluate}>작성하기 (+10P)</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default WriteEvaluation;
