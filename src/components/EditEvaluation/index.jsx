import React, { useState } from 'react';
import { evaluateUpdateApi } from '../../api/Api';
import * as Styled from './styled';
import RangeInput from '../RangeInput';
import {SemesterSelect, StyledOption, Soption} from '../../Pages/Main/styled'

const useSlider = (min, max, defaultState, id) => {
  const [state, setSlide] = useState(defaultState);

  const Slider = () => <RangeInput onChange={setSlide} defaultValue={state} />;
  return [state, Slider, setSlide];
};

const EditEvaluation = (props) => {
  const [content, setContent] = useState(`${props.content}`);
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const [db, setData] = useState({
    data: [],
  });
  const [honey, HoneySlider] = useSlider(0.5, 5, props.honey);
  const [learning, LearingSlider] = useSlider(0.5, 5, props.learning);
  const [satisfaction, SatisfactionSlider] = useSlider(0.5, 5, props.satisfaction);
  const onEvaluate = () => {
    if(semester==='' || semester==='선택'){
      alert('학기를 선택해주세요')
    } else if(team===''){
      alert('조모임(란)을 선택해주세요')
    } else if(homework===''){
      alert('과제(란)을 선택해주세요')
    } else if(difficulty===''){
      alert('학점(란)을 선택해주세요')
    }
    else{
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
  }
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
  const options = ['선택','2021-1','2022-1'];
    
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
          <SemesterSelect id='semester' defaultValue={`${props.semester}`} onChange={(e)=>{setSemester(e)}}>
              {options.map((index) => (
                <StyledOption id='semester' key={index} value={index}>
                  <Soption id='semester'>
                    {index}
                  </Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
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
          <Styled.FormCheckLeft name="team" id="easy" value="0" defaultChecked={team === "0"}/>
          <Styled.FormCheckText>없음</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="team" id="difficult" value="1" defaultChecked={team === "1"}/>
          <Styled.FormCheckText>있음</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>

        <Styled.Content onChange={homeworkChange}>
          <Styled.ContentTitle>과제</Styled.ContentTitle>
          <Styled.FormLabel>
          <Styled.FormCheckLeft name="homework" id="easy" value="0" defaultChecked={homework === "0"}/>
          <Styled.FormCheckText>없음</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="homework" id="normal" value="1" defaultChecked={homework === "1"}/>
          <Styled.FormCheckText>보통</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="homework" id="difficult" value="2" defaultChecked={homework === "2"}/>
          <Styled.FormCheckText>많음</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>

        <Styled.Content id="group" onChange={difficultyChange}>
          <Styled.ContentTitle>학점</Styled.ContentTitle>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="score" id="difficult" value="0" defaultChecked={difficulty === "0"}/>
          <Styled.FormCheckText>까다로움</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="score" id="normal" value="1" defaultChecked={difficulty === "1"}/>
          <Styled.FormCheckText>보통</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="score" id="easy" value="2" defaultChecked={difficulty === "2"}/>
          <Styled.FormCheckText>너그러움</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>

      </Styled.ContentWrapper>
      <Styled.TextField
        defaultValue={props.content}
        onChange={onChangeContent}
        rows="15"
      />
      <Styled.Wrapper id='button'>
        <Styled.EditButton onClick={onEvaluate}>수정하기</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};

export default EditEvaluation;
