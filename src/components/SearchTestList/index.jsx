import React, { useState, useEffect } from 'react';
import * as Styled from './styled';

const SearchTestList = (props) => {
  return (
    <Styled.Wrapper>
      {props.db.map((v, i) => (
        <Subject
          key={v.id}
          content={v.content}
          examDifficulty={v.examDifficulty}
          examInfo={v.examInfo}
          examType={v.examType}
          id={v.id}
          semester={v.semester}
        />
      ))}
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  const examDifficultySet = props.examDifficulty;

  const examDifficulty = {
    '매우 쉬움': <Styled.DataColor id="cyan">매우 쉬움</Styled.DataColor>,
    '쉬움': <Styled.DataColor id="cyan">쉬움</Styled.DataColor>,
    '보통': <Styled.DataColor>보통</Styled.DataColor>,
    '어려움': <Styled.DataColor id="purple">어려움</Styled.DataColor>,
    '매우 어려움': <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>,
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{props.semester}</Styled.YearText>
            <Styled.YearText>
              {props.examType}
            </Styled.YearText>
          </Styled.TitleWrapper>
          <Styled.EditButton>신고</Styled.EditButton>
          <div style={{ marginBottom: '35px' }} />
        </Styled.MarginTop>

        <div>
          <Styled.StarFlex id="top">
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                난이도
                <Styled.StarFlex id="data">{examDifficulty[examDifficultySet]}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                시험유형
                <Styled.StarFlex id="black">{props.examInfo}</Styled.StarFlex>
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

export default SearchTestList;
