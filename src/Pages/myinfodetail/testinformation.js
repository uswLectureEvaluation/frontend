import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import Modal from 'react-modal';
import Edittestinfo from './edittestinfo';
import { examPostApi } from '../../api/Api';
import * as Styled from './testinformation.element';

const 모달스타일 = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1100,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    overflow: 'auto',
    maxWidth: '600px',
    minWidth: '550px',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, -5%)',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '14px',
    outline: 'none',
    zIndex: 1100,
  },
};

const Testinformation = () => {
  const [db, setData] = useState({
    data: [],
  });
  console.log(db);
  useEffect(() => {
    examPostApi().then((data) => setData(data));
    console.log(db)
  }, []);
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      {db.data.map((v, i) => (
        <Subject key={v.id}
          content={v.content}
          examDifficulty={v.examDifficulty}
          examInfo={v.examInfo}
          id={v.id}
          lectureName={v.lectureName}
          professor={v.professor}
          semester={v.semester}
          semesterList={v.semesterList}
        />
      ))}
    </Container>
  );
};

export const Subject = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let title = props.lectureName;

  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + '...';
  }
  const examDifficultySet = props.examDifficulty;

  const examDifficulty = {
    '매우 쉬움': <Styled.DataColor>매우 쉬움</Styled.DataColor>,
    쉬움: <Styled.DataColor>쉬움</Styled.DataColor>,
    보통: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
    어려움: <Styled.DataColor id="purple">어려움</Styled.DataColor>,
    '매우 어려움': <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>,
  };

  const Delete = () => {
    if (window.confirm('시험정보를 삭제하시겠습니까?') === true) {
      let arrayCopy = [...props.subjectName];
      arrayCopy.shift();
      props.setSubjectName(arrayCopy);
    } else {
      return;
    }
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <div style={{ marginBottom: '10px' }}>
            <Styled.YearText>{props.semester}</Styled.YearText>
            <Styled.DeleteButton
              onClick={() => {
                Delete();
              }}
              style={{ float: 'right' }}
            >
              삭제
            </Styled.DeleteButton>
            <Styled.EditButton onClick={() => setModalIsOpen(true)} style={{ float: 'right' }}>
              수정
            </Styled.EditButton>
          </div>
          <Styled.TitleWrapper>
            <Styled.TitleWrapper>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Professor>{props.professor}</Styled.Professor>
            </Styled.TitleWrapper>
          </Styled.TitleWrapper>
          <Styled.TitleWrapper>
            <Styled.TitleWrapper>
              <Styled.ExamDetail id="top">시험내용</Styled.ExamDetail>
              <Styled.DataColor id="cyan">{props.examInfo}</Styled.DataColor>
            </Styled.TitleWrapper>
          </Styled.TitleWrapper>
          <Styled.TitleWrapper>
            <Styled.TitleWrapper>
              <Styled.ExamDetail id="bottom">난이도</Styled.ExamDetail>
              <Styled.ExamDetail id="data">{examDifficulty[examDifficultySet]}</Styled.ExamDetail>
            </Styled.TitleWrapper>
          </Styled.TitleWrapper>
          <Styled.TitleWrapper>
            <Styled.TitleWrapper>
              <Styled.ExamDetail id="data">{props.content}</Styled.ExamDetail>
            </Styled.TitleWrapper>
          </Styled.TitleWrapper>
        </Styled.MarginTop>
        <Modal
          isOpen={modalIsOpen}
          style={모달스타일}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <Edittestinfo
            setModalIsOpen={setModalIsOpen}
            lectureName={props.lectureName}
            semester={props.semester}
            examInfo={props.examInfo}
            examDifficulty={props.examDifficulty}
            content={props.content}
            id={props.id}
          />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Testinformation;
