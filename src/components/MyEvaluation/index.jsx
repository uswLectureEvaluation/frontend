import { useState, useEffect, useCallback, useRef } from 'react';
import Modal from 'react-modal';
import { evaluatePostApi, deleteEvaluateApi } from '../../api/Api';
import * as Styled from './styled';
import StarRatings from 'react-star-ratings';
import EditEvaluation from '../EditEvaluation';
import ModalStyle from '../ModalStyle';

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
    0: <Styled.DataColor id="cyan">너그러움</Styled.DataColor>,
    1: <Styled.DataColor id="black">보통</Styled.DataColor>,
    2: <Styled.DataColor id="purple">까다로움</Styled.DataColor>,
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

const Myevaluation = (props) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const getDog = useCallback(async () => {
    setLoad(true); //로딩 시작
    const res = await evaluatePostApi(page);
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
      evaluatePostApi(1).then((r) => {
        setList(r.data);
        setRefresh(false);
        setPage(2);
      });
    }
  }, [refresh]);
  return (
    <Styled.Wrapper>
      {list.length !== 0 ? (
        list.map((v, i) => {
          return (
            <Subject
              key={Math.random()}
              lectureName={v.lectureName}
              professor={v.professor}
              majorType={v.majorType}
              selectedSemester={v.selectedSemester}
              totalAvg={v.totalAvg}
              content={v.content}
              satisfaction={v.satisfaction}
              learning={v.learning}
              honey={v.honey}
              team={v.team}
              difficulty={v.difficulty}
              homework={v.homework}
              semesterList={v.semesterList}
              id={v.id}
              point={props}
              setRefresh={setRefresh}
              setPage={setPage}
            />
          );
        })
      ) : (
        <Styled.NoEvaluation>아직 평가한 강의가 없어요.</Styled.NoEvaluation>
      )}
      {load ? <div style={{ opacity: '0', width: '0%' }}>로딩 중</div> : <></>}
      <div ref={obsRef} style={{ opacity: '0', width: '0%' }}>
        옵저버 Element
      </div>
    </Styled.Wrapper>
  );
};

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let title = props.lectureName;
  let mobileTitle = props.lectureName;
  if (mobileTitle.length >= 8) {
    mobileTitle = props.lectureName.substr(0, 8) + '...';
  }
  if (title.length >= 14) {
    title = title.substr(0, 14) + '...';
  }
  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?') === true) {
      if (props.point.props < 30) {
        alert('유저 포인트가 부족합니다');
      } else {
        deleteEvaluateApi(props.id).then(() => {
          alert('삭제 완료');
          props.setRefresh(true);
          props.setPage(2);
        });
      }
    }
  };
  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.MobileWrapper id="top">
            <Styled.YearText>{props.selectedSemester}</Styled.YearText>
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
          </Styled.MobileWrapper>
          <Styled.MobileWrapper>
            <Styled.Title>{mobileTitle}</Styled.Title>
            <Styled.Major>{props.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{props.professor}</Styled.Professor>
          </Styled.MobileWrapper>

          <Styled.TitleWrapper>
            <Styled.YearText>{props.selectedSemester}</Styled.YearText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Major>{props.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{props.professor}</Styled.Professor>
          </Styled.TitleWrapper>
          <Styled.DeleteButton
            id="pc"
            onClick={() => {
              onDelete();
            }}
          >
            삭제
          </Styled.DeleteButton>
          <Styled.EditButton id="pc" onClick={() => setModalIsOpen(true)}>
            수정
          </Styled.EditButton>

          <div style={{ marginBottom: '38px' }} />
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
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <EditEvaluation
            setModalIsOpen={setModalIsOpen}
            semester={props.selectedSemester}
            satisfaction={props.satisfaction}
            learning={props.learning}
            honey={props.honey}
            team={props.team}
            difficulty={props.difficulty}
            homework={props.homework}
            content={props.content}
            semesterList={props.semesterList}
            lectureName={props.lectureName}
            id={props.id}
            setRefresh={props.setRefresh}
          />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Myevaluation;
