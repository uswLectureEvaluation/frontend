import React, { useState, useEffect } from 'react';
import { examPostApi } from '../../api/Api';
import * as Styled from './testinformation.element';

const Testinformation = () => {
  const [db, setData] = useState({
    data: [],
  });
  console.log(db);
  useEffect(() => {
    examPostApi().then((data) => setData(data));
  }, []);
  return (
    <Styled.Wrapper>
      {db.data.map((v, i) => (
        <Subject
          key={v.id}
          content={v.content}
          examDifficulty={v.examDifficulty}
          examInfo={v.examInfo}
          examType={v.examType}
          majorType={v.majorType}
          id={v.id}
          lectureName={v.lectureName}
          professor={v.professor}
          semester={v.semester}
          semesterList={v.semesterList}
        />
      ))}
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  let title = props.lectureName;

  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + '...';
  }
  const examDifficultySet = props.examDifficulty;

  const examDifficulty = {
    '매우 쉬움': <Styled.DataColor>매우 쉬움</Styled.DataColor>,
    '쉬움': <Styled.DataColor>쉬움</Styled.DataColor>,
    '보통': <Styled.DataColor id="cyan">보통</Styled.DataColor>,
    '어려움': <Styled.DataColor id="purple">어려움</Styled.DataColor>,
    '매우 어려움': <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>,
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{props.semesterList}</Styled.YearText>
            <Styled.YearText>
              {props.examType === 'middle' ? '중간고사' : '기말고사'}
            </Styled.YearText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Major>{props.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{props.professor}</Styled.Professor>
          </Styled.TitleWrapper>
          <Styled.EditButton onClick={() => alert('신고')}>신고</Styled.EditButton>
          <div style={{ marginBottom: '35px' }} />
        </Styled.MarginTop>

        <div>
          <Styled.StarFlex id="top">
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                난이도
                <Styled.PaddingRight />
                <Styled.StarFlex id="between">{examDifficulty[examDifficultySet]}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                시험유형
                <Styled.PaddingRight />
                <Styled.DataColor id="cyan">{props.examInfo}</Styled.DataColor>
              </Styled.StarFlex>
            </Styled.FlexContainer>
          </Styled.StarFlex>
        </div>

        <Styled.MarginTop id="bottom">
          <Styled.EvaluationDetail>{props.content}</Styled.EvaluationDetail>
        </Styled.MarginTop>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Testinformation;
