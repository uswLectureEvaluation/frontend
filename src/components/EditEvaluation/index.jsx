import React, { useState, useEffect } from 'react';
import { evaluateUpdateApi } from '../../api/Api';
import * as Styled from './styled';
import RangeInput from '../RangeInput';

const useSlider = (min, max, defaultState, id) => {
  const [state, setSlide] = useState(defaultState);

  const Slider = () => <RangeInput onChange={setSlide} defaultValue={state} />;
  return [state, Slider, setSlide];
};

const EditEvaluation = (props) => {
  const [content, setContent] = useState();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const [db, setData] = useState({
    data: [],
  });
  useEffect(() => {
    console.log(db.data);
  }, [db.data]);

  const [honey, HoneySlider] = useSlider(0.5, 5, props.honey);
  const [learning, LearingSlider] = useSlider(0.5, 5, props.learning);
  const [satisfaction, SatisfactionSlider] = useSlider(0.5, 5, props.satisfaction);
  const onEvaluate = () => {
    evaluateUpdateApi(
      setData,
      semester,
      satisfaction,
      learning,
      honey,
      team,
      difficulty,
      homework,
      content,
      props.id
    );
    props.setModalIsOpen(false);
  };

  const [semester, setSemester] = useState(props.semester); //학기
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
  return (
    <Styled.Wrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{props.lectureName}</Styled.Title>
        <Styled.Title
          onClick={() => {
            props.setModalIsOpen(false);
          }}
        >
          X
        </Styled.Title>
      </Styled.TitleWrapper>

      <Styled.ContentWrapper>
        <Styled.Content id="group">
          <Styled.ContentTitle>수강학기</Styled.ContentTitle>
          <select onChange={(e)=>{setSemester(e.target.value)}}>
            <option value="2021-1">2021-1</option>
            <option value="2022-1">2022-1</option>
          </select>
        </Styled.Content>

        <Styled.Content>
          <Styled.ContentTitle>꿀강지수</Styled.ContentTitle>
          <HoneySlider /> <Styled.Score>{honey}</Styled.Score>
        </Styled.Content>
        <Styled.Content>
          <Styled.ContentTitle>배움지수</Styled.ContentTitle>
          <LearingSlider /> <Styled.Score>{learning}</Styled.Score>
        </Styled.Content>
        <Styled.Content id="group">
          <Styled.ContentTitle>만족도</Styled.ContentTitle>
          <SatisfactionSlider /> <Styled.Score>{satisfaction}</Styled.Score>
        </Styled.Content>

        <Styled.Content onChange={teamChange}>
          <Styled.ContentTitle>조모임</Styled.ContentTitle>
          <Styled.FormLabel>
          <Styled.FormCheckLeft name="team" id="easy" value="0" checked={team === "0"}/>
          <Styled.FormCheckText>없음</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="team" id="difficult" value="1" checked={team === "1"}/>
          <Styled.FormCheckText>있음</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>
        <Styled.Content onChange={homeworkChange}>
          <Styled.ContentTitle>과제</Styled.ContentTitle>
          <Styled.FormLabel>
          <Styled.FormCheckLeft name="homework" id="easy" value="0" checked={homework === "0"}/>
          <Styled.FormCheckText>없음</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="homework" id="normal" value="1" checked={homework === "1"}/>
          <Styled.FormCheckText>보통</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="homework" id="difficult" value="2" checked={homework === "2"}/>
          <Styled.FormCheckText>많음</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>
        <Styled.Content id="group" onChange={difficultyChange}>
          <Styled.ContentTitle>학점</Styled.ContentTitle>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="score" id="difficult" value="0" checked={difficulty === "0"}/>
          <Styled.FormCheckText>까다로움</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="score" id="normal" value="1" checked={difficulty === "1"}/>
          <Styled.FormCheckText>보통</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="score" id="easy" value="2" checked={difficulty === "2"}/>
          <Styled.FormCheckText>너그러움</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.TextField
        defaultValue={props.content}
        onChange={onChangeContent}
        rows="10"
      />
      <Styled.Wrapper id='button'>
        <Styled.EditButton onClick={onEvaluate}>수정하기</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default EditEvaluation;
