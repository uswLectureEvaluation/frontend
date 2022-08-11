import { useState } from 'react';
import { evaluateUpdateApi } from '../../api/Api';
import * as Styled from './styled';
import RangeInput from '../RangeInput';
import { SemesterSelect, StyledOption, Soption } from '../../pages/Main/styled';

const useSlider = (defaultState) => {
  const [state, setSlide] = useState(defaultState);

  const Slider = () => <RangeInput setSlide={setSlide} onChange={setSlide} defaultValue={state} />;
  return [state, Slider, setSlide];
};

const EditEvaluation = (props) => {
  const [content, setContent] = useState(`${props.content}`);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const [honey, HoneySlider] = useSlider(props.honey);
  const [learning, LearingSlider] = useSlider(props.learning);
  const [satisfaction, SatisfactionSlider] = useSlider(props.satisfaction);
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

    evaluateUpdateApi(
      semester,
      Number(satisfaction),
      Number(learning),
      Number(honey),
      Number(team),
      Number(difficulty),
      Number(homework),
      content,
      props.id
    ).then(() => {
      alert('수정 완료');
      props.setRefresh(true);
    });
    props.setModalIsOpen(false);
  };
  const [semester, setSemester] = useState(`${props.semester}`); //학기
  const [team, setTeam] = useState(`${props.team}`); //조모임
  const [homework, setHomework] = useState(`${props.homework}`); //과제
  const [difficulty, setDifficulty] = useState(`${props.difficulty}`); //학점

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
  const optionsValue = options.concat(props.semesterList.split(', '));

  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{props.lectureName}</Styled.Title>
        <Styled.TitleButton
          onClick={() => {
            props.setModalIsOpen(false);
          }}
        >
          X
        </Styled.TitleButton>
      </Styled.TitleWrapper>

      <Styled.ContentWrapper>
        <Styled.Content id="group">
          <Styled.ContentTitle>수강학기</Styled.ContentTitle>
          <SemesterSelect
            id="semester"
            defaultValue={`${props.semester}`}
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
            defaultValue={`${props.semester}`}
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
            <Styled.FormCheckLeft name="team" id="easy" value="0" defaultChecked={team === '0'} />
            <Styled.FormCheckText>없음</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="team"
              id="difficult"
              value="1"
              defaultChecked={team === '1'}
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
              value="0"
              defaultChecked={homework === '0'}
            />
            <Styled.FormCheckText>없음</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="homework"
              id="normal"
              value="1"
              defaultChecked={homework === '1'}
            />
            <Styled.FormCheckText>보통</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="homework"
              id="difficult"
              value="2"
              defaultChecked={homework === '2'}
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
              value="0"
              defaultChecked={difficulty === '0'}
            />
            <Styled.FormCheckText>너그러움</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="score"
              id="normal"
              value="1"
              defaultChecked={difficulty === '1'}
            />
            <Styled.FormCheckText>보통</Styled.FormCheckText>
          </label>
          <label>
            <Styled.FormCheckLeft
              name="score"
              id="difficult"
              value="2"
              defaultChecked={difficulty === '2'}
            />
            <Styled.FormCheckText>까다로움</Styled.FormCheckText>
          </label>
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.TextField defaultValue={props.content} onChange={onChangeContent} rows="15" />
      <Styled.Wrapper id="button">
        <Styled.EditButton onClick={onEvaluate}>수정하기</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default EditEvaluation;
