import React, { useState, useEffect, useCallback, useRef } from 'react';
import { deleteExamInfoApi, examPostApi } from '../../api/Api';
import * as Styled from './testinformation.element';
import EditTestInfo from './edittestinfo';
import Modal from 'react-modal';
import ModalStyle from '../../components/ModalStyle';

const Testinformation = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);

  const getDog = useCallback(async () => {
    setLoad(true); //로딩 시작
    const res = await examPostApi(page);
    console.log(res);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
    } else {
      console.log(res); //에러
    }
    setLoad(false); //로딩 종료
  }, [page]);

  const preventRef = useRef(true);
  const obsRef = useRef(null);

  useEffect(() => {
    getDog();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line no-unreachable
  }, [getDog]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
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
            majorType={v.majorType}
            id={v.id}
            lectureName={v.lectureName}
            professor={v.professor}
            selectedSemester={v.selectedSemester}
            semesterList={v.semesterList}
          />
        ))}

      {load ? <div style={{ opacity: '0', width: '0%' }}>로딩 중</div> : <></>}
      <div ref={obsRef} style={{ opacity: '0', width: '0%' }}>
        옵저버 Element
      </div>
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let title = props.lectureName;

  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + '...';
  }

  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?') === true) {
      deleteExamInfoApi(props.id);
    } else {
      return;
    }
  };

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
          <Styled.DeleteButton
            onClick={() => {
              onDelete();
            }}
          >
            삭제
          </Styled.DeleteButton>
          <Styled.EditButton onClick={() => setModalIsOpen(true)}>수정</Styled.EditButton>
          <Styled.TitleWrapper>
            <Styled.YearText>{props.selectedSemester}</Styled.YearText>
            <Styled.YearText>{props.examType}</Styled.YearText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Major>{props.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{props.professor}</Styled.Professor>
          </Styled.TitleWrapper>
          <div style={{ marginBottom: '30px' }} />
        </Styled.MarginTop>

        <Styled.MobileMarginTop>
          <div style={{ marginBottom: '20px' }}>
            <div>
              <Styled.DeleteButton
                onClick={() => {
                  onDelete();
                }}
              >
                삭제
              </Styled.DeleteButton>
              <Styled.EditButton onClick={() => setModalIsOpen(true)}>수정</Styled.EditButton>
            </div>
            <div>
              <Styled.YearText>{props.selectedSemester}</Styled.YearText>
              <Styled.YearText>{props.examType}</Styled.YearText>
            </div>
          </div>
          <div>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Major>{props.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{props.professor}</Styled.Professor>
          </div>
        </Styled.MobileMarginTop>

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
                <div style={{ minWidth: '45px' }}>시험유형</div>
                <Styled.StarFlex id="black">{props.examInfo}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
          </Styled.StarFlex>
        </div>

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
          <EditTestInfo
            setModalIsOpen={setModalIsOpen}
            lectureName={props.lectureName}
            semester={props.selectedSemester}
            examInfo={props.examInfo}
            examDifficulty={props.examDifficulty}
            content={props.content}
            id={props.id}
            examType={props.examType}
          />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Testinformation;
