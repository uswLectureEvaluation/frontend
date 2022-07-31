import React, { useState } from 'react';
import * as Styled from './styled';
import Modal from 'react-modal';
import ReportExam from '../ReportExam';
import ModalStyle from '../../components/ModalStyle';

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
          semester={v.selectedSemester}
        />
      ))}
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const examDifficultySet = props.examDifficulty;

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
          <Styled.EditButton onClick={() => setModalIsOpen(true)}>신고</Styled.EditButton>
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
            {props.content.split('\n').map((value) => {
              return (
                <div>
                  {value}
                  <br />
                </div>
              );
            })}
          </Styled.EvaluationDetail>
        </Styled.MarginTop>
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <ReportExam examIdx={props.id} />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default SearchTestList;
