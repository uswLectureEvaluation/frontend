import React, { useState, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { evaluateUpdateApi } from '../../api/Api';
import * as Styled from './styled';

import { TextField } from '@material-ui/core';
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

  const teamChange = (e, newAlignment) => {
    setTeam(newAlignment);
  };
  const homeworkChange = (e, newAlignment) => {
    setHomework(newAlignment);
  };
  const difficultyChange = (e, newAlignment) => {
    setDifficulty(newAlignment);
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

        <Styled.Content>
          <Styled.ContentTitle>조모임</Styled.ContentTitle>
          <ToggleButtonGroup color="primary" value={team} exclusive onChange={teamChange}>
            <ToggleButton value="0">없음</ToggleButton>
            <ToggleButton value="1">있음</ToggleButton>
          </ToggleButtonGroup>
        </Styled.Content>
        <Styled.Content>
          <Styled.ContentTitle>과제</Styled.ContentTitle>
          <ToggleButtonGroup color="primary" value={homework} exclusive onChange={homeworkChange}>
            <ToggleButton value="0">없음</ToggleButton>
            <ToggleButton value="1">보통</ToggleButton>
            <ToggleButton value="2">많음</ToggleButton>
          </ToggleButtonGroup>
        </Styled.Content>
        <Styled.Content id="group">
          <Styled.ContentTitle>학점</Styled.ContentTitle>
          <ToggleButtonGroup
            color="primary"
            value={difficulty}
            exclusive
            onChange={difficultyChange}
          >
            <ToggleButton value="0">까다로움</ToggleButton>
            <ToggleButton value="1">보통</ToggleButton>
            <ToggleButton value="2">잘줌</ToggleButton>
          </ToggleButtonGroup>
        </Styled.Content>
      </Styled.ContentWrapper>
      <TextField
        id="outlined-multiline-static"
        label={props.content}
        multiline
        variant="outlined"
        onChange={onChangeContent}
        fullWidth
        rows={5}
        style={{ marginBottom: '20px' }}
      />
      <button onClick={onEvaluate}>수정하기</button>
    </Styled.Wrapper>
  );
};

export default EditEvaluation;
