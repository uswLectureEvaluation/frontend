import React, { useState, useEffect } from 'react';
import { examUpdateApi } from '../../api/Api';
import * as Styled from './edittestinfo.element'
import {SemesterSelect, StyledOption, Soption} from '../../Pages/Main/styled'

const Edittestinfo = (props) => {
  const [db, setData] = useState({
    data: [],
  });
  const [semester, setSemester] = useState(`${props.semester}`); //학기
  const [examType, setExamType] = useState(`${props.examType}`); //중간,기말
  const [examDifficulty, setDifficulty] = useState(`${props.examDifficulty}`); //난이도
  const [content, setContent] = useState(`${props.content}`); //글쓰기
  const [exam, setExamInfo] = useState(() => props.examInfo.split(', ')); //시험내용
  const examInfo = exam.join(', ');

  const difficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handleExam = (checked, value) => {
    if (checked) {
      setExamInfo([...exam, value]);
    } else {
      // 체크 해제
      setExamInfo(exam.filter((data) => data !== value));
    }
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onTest = () => {
    if(semester==='' || semester==='선택'){
      alert('학기를 선택해주세요')
    } else if(examType==='' || examType==='선택'){
      alert('시험종류를 선택해주세요')
    } else if(examDifficulty===''){
      alert('난이도(란)을 선택해주세요')
    } else if(exam.length===0){
      alert('시험유형(란)을 선택해주세요')
    } else {
    examUpdateApi(setData, semester, examInfo, examType, examDifficulty, content, props.id);
    props.setModalIsOpen(false);
  };
}

  useEffect(() => {
    console.log(db.data);
  }, [db.data]);

  const semesterOptions = ['선택','2021-1','2022-1'];
  const examTypeOptions = ['선택','중간고사','기말고사','쪽지','기타']

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
              {semesterOptions.map((index) => (
                <StyledOption id='semester' key={index} value={index}>
                  <Soption id='semester'>
                    {index}
                  </Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
            <Styled.ContentTitle>시험종류</Styled.ContentTitle>
            <SemesterSelect id='semester' defaultValue={`${props.examType}`} onChange={(e)=>{setExamType(e)}}>
              {examTypeOptions.map((index) => (
                <StyledOption id='semester' key={index} value={index}>
                  <Soption id='semester'>
                    {index}
                  </Soption>
                </StyledOption>
              ))}
            </SemesterSelect>
        </Styled.Content>

        <Styled.Content onChange={difficultyChange}>
          <Styled.ContentTitle>난이도</Styled.ContentTitle>
          <Styled.FormLabel>
          <Styled.FormCheckLeft name="examDifficulty" id="easy" value="쉬움" defaultChecked={examDifficulty === "쉬움"}/>
          <Styled.FormCheckText>쉬움</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="examDifficulty" id="normal" value="보통" defaultChecked={examDifficulty === "보통"}/>
          <Styled.FormCheckText>보통</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckLeft name="examDifficulty" id="difficult" value="어려움" defaultChecked={examDifficulty === "어려움"}/>
          <Styled.FormCheckText>어려움</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>

        <Styled.Content onChange={(e)=>handleExam(e.target.checked, e.target.value)}>
          <Styled.ContentTitle>시험유형</Styled.ContentTitle>
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="족보" defaultChecked={exam.includes("족보") === true}/>
          <Styled.FormCheckText>족보</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="교재" defaultChecked={exam.includes("교재") === true}/>
          <Styled.FormCheckText>교재</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="PPT" defaultChecked={exam.includes("PPT") === true}/>
          <Styled.FormCheckText>PPT</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="필기" defaultChecked={exam.includes("필기") === true}/>
          <Styled.FormCheckText>필기</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>
        <Styled.Content id="group" onChange={(e)=>handleExam(e.target.checked, e.target.value)}>
        <Styled.ContentTitle />
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="응용" defaultChecked={exam.includes("응용") === true}/>
          <Styled.FormCheckText>응용</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="실습" defaultChecked={exam.includes("실습") === true}/>
          <Styled.FormCheckText>실습</Styled.FormCheckText>
        </Styled.FormLabel>
        <Styled.FormLabel>
          <Styled.FormCheckMulti name="examType" id="normal" value="과제" defaultChecked={exam.includes("과제") === true}/>
          <Styled.FormCheckText>과제</Styled.FormCheckText>
        </Styled.FormLabel>
        </Styled.Content>
      </Styled.ContentWrapper>
      <Styled.TextField
        defaultValue={props.content}
        onChange={onChangeContent}
        rows="15"
      />
      <Styled.Wrapper id='button'>
        <Styled.EditButton onClick={onTest}>수정하기</Styled.EditButton>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};
export default Edittestinfo;
