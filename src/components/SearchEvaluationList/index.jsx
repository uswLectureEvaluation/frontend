import React, { useState, useEffect } from 'react';
import { BoxString5, YearText, DeleteButton } from './styled';
import { CssBaseline, Container } from '@material-ui/core';
// import Editevaluation from "./del_editevaluation"
import { searchEvaluationApi } from '../../api/Api';
import StarRatings from 'react-star-ratings';
import * as Styled from './styled';

export const DetailModal = (props) => {
  const teamSet = props.team;
  const homeworkSet = props.homework;
  const difficultySet = props.difficulty;
  const team = {
    0: <Styled.DataColor>없음</Styled.DataColor>,
    1: <Styled.DataColor id="purple">있음</Styled.DataColor>,
  };
  const homework = {
    0: <Styled.DataColor>없음</Styled.DataColor>,
    1: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
    2: <Styled.DataColor id="purple">많음</Styled.DataColor>,
  };
  const difficulty = {
    0: <Styled.DataColor>까다로움</Styled.DataColor>,
    1: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
    2: <Styled.DataColor id="purple">잘줌</Styled.DataColor>,
  };

  return (
    <div>
      <Styled.StarFlex id="top">
        <Styled.StarFlex>
          만족도
          <Styled.PaddingRight />
          <StarRatings
            rating={props.satisfaction}
            starRatedColor="#a3a3a3"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
        </Styled.StarFlex>
        <Styled.StarFlex>
          꿀강 지수
          <Styled.PaddingRight />
          <StarRatings
            rating={props.honey}
            starRatedColor="#a3a3a3"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
        </Styled.StarFlex>
        <Styled.StarFlex>
          배움 지수
          <Styled.PaddingRight />
          <StarRatings
            rating={props.learning}
            starRatedColor="#a3a3a3"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
        </Styled.StarFlex>
      </Styled.StarFlex>
      <Styled.StarFlex id="bottom">
        <Styled.StarFlex>조모임 {team[teamSet]}</Styled.StarFlex>
        <Styled.StarFlex>과제 {homework[homeworkSet]}</Styled.StarFlex>
        <Styled.StarFlex>학점 {difficulty[difficultySet]}</Styled.StarFlex>
      </Styled.StarFlex>
    </div>
  );
};

const SearchEvaluationList = ({ selectId }) => {
  const [db, setData] = useState({
    data: [],
  });
  useEffect(() => {
    searchEvaluationApi(selectId).then((data) => setData(data));
  }, []);

  return db.length !== 0 ? (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      {db.data.map((v, i) => (
        <Subject key={v.id}
          semester={v.semester}
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
    </Container>
  ) : (
    <div></div>
  );
};

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <div style={{ marginBottom: '10px' }}>
            <YearText>{props.semester}</YearText>
            <DeleteButton style={{ float: 'right' }}>신고</DeleteButton>
          </div>
          <Styled.TitleWrapper>
            <Styled.TitleWrapper>
              <Styled.Title></Styled.Title>
              <Styled.Professor></Styled.Professor>
            </Styled.TitleWrapper>
          </Styled.TitleWrapper>
          <Styled.PaddingRight>평균지수</Styled.PaddingRight>
          <StarRatings
            rating={props.totalAvg}
            starRatedColor="#346cfd"
            numberOfStars={5}
            name="rating"
            starDimension="24px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Styled.Rate>{props.totalAvg.toFixed(1)}</Styled.Rate>
          <BoxString5
            onClick={() => {
              setModal(!modal);
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </BoxString5>
        </Styled.MarginTop>
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
          <Styled.EvaluationDetail>{props.content}</Styled.EvaluationDetail>
        </Styled.MarginTop>
      </Styled.LectureWrapper>
    </div>
  );
};

export default SearchEvaluationList;
