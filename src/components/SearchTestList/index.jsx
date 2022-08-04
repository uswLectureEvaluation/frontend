import React, { useState, useCallback, useRef, useEffect } from 'react';
import * as Styled from './styled';
import { examReportApi, searchExamApi } from '../../api/Api';

const SearchTestList = (props) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const getDog = useCallback(async () => {
    const res = await searchExamApi(props.db, page);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
    } else {
      console.error(res); //에러
    }
  }, [page, props.db]);

  const preventRef = useRef(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    getDog();

    // eslint-disable-next-line no-use-before-define
  }, [getDog, page]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Styled.Wrapper>
      {list &&
        list.map((v, i) => (
          <Subject
            key={Math.random()}
            content={v.content}
            examDifficulty={v.examDifficulty}
            examInfo={v.examInfo}
            examType={v.examType}
            id={v.id}
            semester={v.selectedSemester}
          />
        ))}
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  const examDifficultySet = props.examDifficulty;
  const onReport = () => {
    if (window.confirm('정말 신고하시겠어요? \n*허위 신고 시 제재가 가해질 수 있습니다!'))
      examReportApi(props.id).then(() => alert('신고 완료'));
  };
  const examDifficulty = {
    '매우 쉬움': <Styled.DataColor id="cyan">매우 쉬움</Styled.DataColor>,
    쉬움: <Styled.DataColor id="cyan">쉬움</Styled.DataColor>,
    보통: <Styled.DataColor>보통</Styled.DataColor>,
    어려움: <Styled.DataColor id="purple">어려움</Styled.DataColor>,
    '매우 어려움': <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>,
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{props.semester}</Styled.YearText>
            <Styled.YearText>{props.examType}</Styled.YearText>
          </Styled.TitleWrapper>
          <Styled.EditButton onClick={onReport}>신고</Styled.EditButton>
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
          <Styled.EvaluationDetail>
            {props.content.split('\n').map((value, index) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            })}
          </Styled.EvaluationDetail>
        </Styled.MarginTop>
      </Styled.LectureWrapper>
    </div>
  );
};

export default SearchTestList;
