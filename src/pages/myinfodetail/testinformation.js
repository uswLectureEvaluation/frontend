import React, { useState, useEffect, useCallback } from 'react';
import { deleteExamInfoApi, examPostApi } from '../../api/Api';
import * as Styled from './testinformation.element';
import EditTestInfo from './Edittestinfo';
import Modal from 'react-modal';
import ModalStyle from '../../components/ModalStyle';

const Testinformation = () => {
  const [db, setData] = useState({
    data: [],
  });
  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(1);

  const [itemLists, setItemLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMoreItem = useCallback(async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    await examPostApi(page).then((data) => setData(data));
    setItemLists(itemLists.concat(db.data));

    setIsLoaded(false);
  }, [db.data, itemLists, page]);

  useEffect(() => {
    getMoreItem();
  }, [db.data, getMoreItem, itemLists, page]);

  const onIntersect = async (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //뷰포트에 마지막 이미지가 들어오고, page값에 1을 더하여 새 fetch 요청을 보내게됨 (useEffect의 dependency배열에 page가 있음)
        setPage((prev) => prev + 1);
        // 현재 타겟을 unobserve한다.
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [itemLists, target]);

  return (
    <Styled.Wrapper>
      {itemLists.map((v, i) => (
        <Subject
          key={v.id}
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
