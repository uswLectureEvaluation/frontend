import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Styled from './styled';
import StarRatings from 'react-star-ratings';
import { evaluateReportApi, searchEvaluationApi } from '../../api/Api';

export const DetailModal = (props) => {
  const teamSet = props.team;
  const homeworkSet = props.homework;
  const difficultySet = props.difficulty;
  const team = {
    0: <Styled.DataColor id="cyan">없음</Styled.DataColor>,
    1: <Styled.DataColor id="purple">있음</Styled.DataColor>,
  };
  const homework = {
    0: <Styled.DataColor id="cyan">없음</Styled.DataColor>,
    1: <Styled.DataColor id="black">보통</Styled.DataColor>,
    2: <Styled.DataColor id="purple">많음</Styled.DataColor>,
  };
  const difficulty = {
    0: <Styled.DataColor id="purple">까다로움</Styled.DataColor>,
    1: <Styled.DataColor id="black">보통</Styled.DataColor>,
    2: <Styled.DataColor id="cyan">너그러움</Styled.DataColor>,
  };

  return (
    <div>
      <Styled.StarFlex id="top">
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            만족도
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.satisfaction.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">조모임 {team[teamSet]}</Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            꿀강 지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.honey.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">과제 {homework[homeworkSet]}</Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            배움 지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.learning.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">학점 {difficulty[difficultySet]}</Styled.StarFlex>
        </Styled.FlexContainer>
      </Styled.StarFlex>
    </div>
  );
};

const SearchEvaluationList = ({ selectId, setIsEmpty }) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const preventRef = useRef(true);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    console.log(clientHeight, scrollHeight, scrollTop);

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const getDog = useCallback(async () => {
    const res = await searchEvaluationApi(selectId, page);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      setIsEmpty(res.data);
      preventRef.current = true;
    } else {
      console.error(res); //에러
    }
    console.log(page, res.data);
  }, [page, selectId, setIsEmpty]);

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

  return list.length !== 0 ? (
    <Styled.Wrapper>
      {list &&
        list.map((v, i) => (
          <Subject
            key={Math.random()}
            semester={v.selectedSemester}
            totalAvg={v.totalAvg}
            content={v.content}
            satisfaction={v.satisfaction}
            learning={v.learning}
            honey={v.honey}
            team={v.team}
            difficulty={v.difficulty}
            homework={v.homework}
            id={v.id}
          />
        ))}
    </Styled.Wrapper>
  ) : (
    <Styled.Wrapper>
      <Styled.Content>등록된 강의평가가 없어요</Styled.Content>
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const onReport = () => {
    if (window.confirm('정말 신고하시겠어요? \n*허위 신고 시 제재가 가해질 수 있습니다!'))
      evaluateReportApi(props.id).then(() => alert('신고 완료'));
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{props.semester}</Styled.YearText>
          </Styled.TitleWrapper>
          <Styled.EditButton onClick={onReport}>신고</Styled.EditButton>
          <StarRatings
            rating={props.totalAvg}
            starRatedColor="#346cfd"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Styled.Rate>{props.totalAvg.toFixed(1)}</Styled.Rate>
          <Styled.ModalOpen
            onClick={() => {
              setModal(!modal);
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </Styled.ModalOpen>
        </Styled.MarginTop>
        <Styled.MobileWrapper>
          <div style={{ marginBottom: '15px' }}>
            <Styled.TitleWrapper>
              <Styled.YearText>{props.semester}</Styled.YearText>
            </Styled.TitleWrapper>
            <Styled.EditButton onClick={onReport}>신고</Styled.EditButton>
          </div>
          <div>
            <StarRatings
              rating={props.totalAvg}
              starRatedColor="#346cfd"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="0px"
              svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
              svgIconViewBox="0 0 24 24"
            />
            <Styled.Rate>{props.totalAvg.toFixed(1)}</Styled.Rate>
            <Styled.ModalOpen
              onClick={() => {
                setModal(!modal);
              }}
            >
              {modal === true ? '간략히' : '자세히'}
            </Styled.ModalOpen>
          </div>
        </Styled.MobileWrapper>

        <div style={{ marginBottom: '5px' }} />
        {modal === true ? (
          <DetailModal
            satisfaction={props.satisfaction}
            honey={props.honey}
            learning={props.learning}
            team={props.team}
            homework={props.homework}
            difficulty={props.difficulty}
          />
        ) : null}
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

export default SearchEvaluationList;
