import { useState, useEffect, useCallback, useRef } from 'react';
import { deleteExamInfoApi, examPostApi } from '../../api/Api';
import * as Styled from './styled';
import EditTestInfo from '../EditTestInfo';
import Modal from 'react-modal';
import ModalStyle from '../ModalStyle';

const Testinformation = (props) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);
  const [refresh, setRefresh] = useState(false);

  const getDog = useCallback(async () => {
    setLoad(true); //로딩 시작
    const res = await examPostApi(page);
    if (res.data) {
      setList((prev) => [...prev, ...res.data]);
      preventRef.current = true;
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
  }, [getDog]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (refresh) {
      examPostApi(1).then((res) => {
        setList(res.data);
        setRefresh(false);
        setPage(2);
      });
    }
  }, [refresh]);

  return (
    <Styled.Wrapper>
      {list.length !== 0 ? (
        list.map((v) => {
          return (
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
              point={props}
              setRefresh={setRefresh}
              setPage={setPage}
            />
          );
        })
      ) : (
        <Styled.NoEvaluation>아직 작성한 시험 정보가 없어요.</Styled.NoEvaluation>
      )}

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
  let mobileTitle = props.lectureName;
  if (mobileTitle.length >= 8) {
    mobileTitle = props.lectureName.substr(0, 8) + '...';
  }
  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + '...';
  }
  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?') === true) {
      if (props.point.props < 30) {
        alert('유저 포인트가 부족합니다');
      } else {
        deleteExamInfoApi(props.id).then(() => {
          alert('삭제 완료');
          props.setRefresh(true);
          props.setPage(2);
        });
      }
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
            <Styled.Title>{mobileTitle}</Styled.Title>
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
            semesterList={props.semesterList}
            setRefresh={props.setRefresh}
          />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Testinformation;
