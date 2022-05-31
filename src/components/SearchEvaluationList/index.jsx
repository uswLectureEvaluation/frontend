import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import StarRatings from 'react-star-ratings';
import { searchEvaluationApi } from '../../api/Api';
import Modal from 'react-modal';
import ReportEvaluation from '../ReportEvaluation';
import ModalStyle from '../../components/ModalStyle';

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
    0: <Styled.DataColor id="purple">까다로움</Styled.DataColor>,
    1: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
    2: <Styled.DataColor>너그러움</Styled.DataColor>,
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

const SearchEvaluationList = (props) => {
  const [db, setData] = useState({
    data: [],
  });

  useEffect(() => {
    searchEvaluationApi(props.selectId).then((data) => setData(data));
  }, [props.selectId]);

  return db.length !== 0 ? (
    <Styled.Wrapper>
      {db.data.map((v, i) => (
        <Subject
          key={v.id}
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
    <div></div>
  );
};

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{props.semester}</Styled.YearText>
          </Styled.TitleWrapper>
          <Styled.EditButton
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            신고
          </Styled.EditButton>
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
            <Styled.EditButton
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              신고
            </Styled.EditButton>
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
          <Styled.EvaluationDetail>{props.content}</Styled.EvaluationDetail>
        </Styled.MarginTop>
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <ReportEvaluation evaluateIdx={props.id} />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default SearchEvaluationList;
