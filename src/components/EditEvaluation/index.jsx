import { useState } from 'react';
import { SemesterSelect, StyledOption, Soption } from '../../pages/Main/styled';
import { useMutation } from 'react-query';
import { queryClient } from '../..';
import User from '../../api/User';
import useSlider from '../RangeInput';
import {
  Content,
  ContentTitle,
  ContentWrapper,
  EditButton,
  FormCheckLeft,
  FormCheckText,
  MobileContent,
  Score,
  TextField,
  Title,
  TitleButton,
  TitleWrapper,
  Wrapper,
} from '../WriteEvaluation/styled';

const EditEvaluation = ({ setModalIsOpen, row }) => {
  const user = User();
  const [content, setContent] = useState(`${row.content}`);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const evaluateUpdate = useMutation(
    () =>
      user.updateEvaluation(
        semester,
        Number(satisfaction),
        Number(learning),
        Number(honey),
        Number(team),
        Number(difficulty),
        Number(homework),
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

  const [honey, HoneySlider] = useSlider(row.honey);
  const [learning, LearingSlider] = useSlider(row.learning);
  const [satisfaction, SatisfactionSlider] = useSlider(row.satisfaction);
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
    evaluateUpdate.mutate();
    setModalIsOpen(false);
  };
  const [semester, setSemester] = useState(`${row.selectedSemester}`); //학기
  const [team, setTeam] = useState(`${row.team}`); //조모임
  const [homework, setHomework] = useState(`${row.homework}`); //과제
  const [difficulty, setDifficulty] = useState(`${row.difficulty}`); //학점

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
          <SemesterSelect
            id="semester"
            defaultValue={`${row.selectedSemester}`}
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
        </Content>
        <MobileContent id="semester">
          <ContentTitle id="mobile">수강학기</ContentTitle>
          <SemesterSelect
            id="semester"
            defaultValue={`${row.selectedSemester}`}
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
            <FormCheckLeft name="team" id="easy" value="0" defaultChecked={team === '0'} />
            <FormCheckText>없음</FormCheckText>
          </label>
          <label>
            <FormCheckLeft name="team" id="difficult" value="1" defaultChecked={team === '1'} />
            <FormCheckText>있음</FormCheckText>
          </label>
        </Content>

        <Content id="content" onChange={homeworkChange}>
          <ContentTitle>과제</ContentTitle>
          <label>
            <FormCheckLeft name="homework" id="easy" value="0" defaultChecked={homework === '0'} />
            <FormCheckText>없음</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              name="homework"
              id="normal"
              value="1"
              defaultChecked={homework === '1'}
            />
            <FormCheckText>보통</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              name="homework"
              id="difficult"
              value="2"
              defaultChecked={homework === '2'}
            />
            <FormCheckText>많음</FormCheckText>
          </label>
        </Content>

        <Content id="content" onChange={difficultyChange}>
          <ContentTitle>학점</ContentTitle>
          <label>
            <FormCheckLeft name="score" id="easy" value="0" defaultChecked={difficulty === '0'} />
            <FormCheckText>너그러움</FormCheckText>
          </label>
          <label>
            <FormCheckLeft name="score" id="normal" value="1" defaultChecked={difficulty === '1'} />
            <FormCheckText>보통</FormCheckText>
          </label>
          <label>
            <FormCheckLeft
              name="score"
              id="difficult"
              value="2"
              defaultChecked={difficulty === '2'}
            />
            <FormCheckText>까다로움</FormCheckText>
          </label>
        </Content>
      </ContentWrapper>
      <TextField defaultValue={row.content} onChange={onChangeContent} rows="15" />
      <Wrapper id="button">
        <EditButton onClick={onEvaluate}>수정하기</EditButton>
      </Wrapper>
    </Wrapper>
  );
};

export default EditEvaluation;
