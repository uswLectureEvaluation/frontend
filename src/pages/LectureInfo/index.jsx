import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import SearchEvaluationList from '../../components/SearchEvaluationList';
import TestInfo from '../../components/TestInfo';
import WriteEvaluation from '../../components/WriteEvaluation';
import { searchLectureApi } from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import WriteExam from '../../components/WriteExam';
import ModalStyle from '../../components/ModalStyle';
import { Button } from '../../components';

const LectureInfo = () => {
  const selectId = useSelector((state) => state.selectId.value);
  let navigate = useNavigate();
  const [check, setCheck] = useState('강의평가');
  const [search, setSearch] = useState('');
  const [written, setWritten] = useState(false);
  const menu = [
    { name: '강의평가', option: '강의평가' },
    { name: '시험정보', option: '시험정보' },
  ];
  const checkList = {
    0: <SearchEvaluationList selectId={selectId} setWritten={setWritten} />,
    1: <TestInfo selectId={selectId} setWritten={setWritten} />,
  };
  const menuList = menu.map((i, index) => (
    <Styled.MenuTitle
      key={i.option}
      id={i.option}
      check={check}
      onClick={(e) => clickFunc(e, index)}
    >
      {i.name}
    </Styled.MenuTitle>
  ));
  const [menuCheck, setMenuCheck] = useState(0);

  const clickFunc = (e, index) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search`, {
          state: {
            search_value: search,
            search_option: 'lectureHoneyAvg',
          },
        });
      }
    }
  };
  const [db, setDB] = useState({
    data: [],
  });
  useEffect(() => {
    searchLectureApi(selectId).then((data) => setDB(data));
  }, [selectId]);

  const teamSet = parseFloat(db.data.lectureTeamAvg).toFixed(0);
  const homeworkSet = parseFloat(db.data.lectureHomeworkAvg).toFixed(0);
  const difficultySet = parseFloat(db.data.lectureDifficultyAvg).toFixed(0);
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
    <Styled.Container>
      <Styled.SearchWrapper>
        <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
        <Styled.SearchInput
          onChange={onChange}
          placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
          onKeyPress={onKeypress}
        />
      </Styled.SearchWrapper>
      {!(localStorage.getItem('login') || sessionStorage.getItem('login')) ? (
        <Styled.FlexContainer id="col">
          <Button color="#346cfd" onClick={() => navigate('/login')}>
            로그인하기
          </Button>
        </Styled.FlexContainer>
      ) : isNaN(db.data.lectureTeamAvg) ? (
        <div>데이터를 불러오고 있어요.</div>
      ) : (
        <Styled.Wrapper>
          <Styled.Content id="top">
            <Styled.TitleWrapper id="top">
              <div>
                <Styled.SubWrapper>
                  <Styled.Title>{db.data.lectureName}</Styled.Title>
                </Styled.SubWrapper>
                <Styled.SubWrapper>
                  <Styled.Professor>
                    {db.data.majorType} | {db.data.professor}
                  </Styled.Professor>
                </Styled.SubWrapper>
                <Styled.TitleWrapper>
                  {db.data.semesterList &&
                    db.data.semesterList.split(', ').map((v) => {
                      return (
                        <Styled.Option key={v} id="semester">
                          {v}
                        </Styled.Option>
                      );
                    })}
                </Styled.TitleWrapper>
              </div>
              <Styled.Option id="type">{db.data.lectureType}</Styled.Option>
            </Styled.TitleWrapper>
            <Styled.FlexContainer id="col">
              <Styled.WidthContainer>
                <Styled.FlexContainer>
                  <Styled.OptionTitle>꿀강지수</Styled.OptionTitle>
                  <Styled.FlexContainer>
                    <Styled.Color
                      style={{
                        color: '#346cfd',
                        fontWeight: '500',
                      }}
                    >
                      {Number(db.data.lectureHoneyAvg).toFixed(1)}
                    </Styled.Color>
                    /5
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
                <Styled.FlexContainer>
                  <Styled.OptionTitle>조모임</Styled.OptionTitle>
                  <Styled.FlexContainer>
                    <Styled.Color style={{ color: '#6200ee', fontSize: '14px' }}>
                      {db.data.lectureHoneyAvg !== 0 ? (
                        team[teamSet]
                      ) : (
                        <Styled.DataColor id="black">-</Styled.DataColor>
                      )}
                    </Styled.Color>
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
              </Styled.WidthContainer>
              <Styled.WidthContainer>
                <Styled.FlexContainer>
                  <Styled.OptionTitle>배움지수</Styled.OptionTitle>
                  <Styled.FlexContainer>
                    <Styled.Color
                      style={{
                        color: '#346cfd',
                        fontWeight: '500',
                      }}
                    >
                      {Number(db.data.lectureLearningAvg).toFixed(1)}
                    </Styled.Color>
                    /5
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
                <Styled.FlexContainer>
                  <Styled.OptionTitle>과제</Styled.OptionTitle>
                  <Styled.FlexContainer>
                    <Styled.Color style={{ color: '#6200ee', fontSize: '14px' }}>
                      {db.data.lectureHoneyAvg !== 0  ? (
                        homework[homeworkSet]
                      ) : (
                        <Styled.DataColor id="black">-</Styled.DataColor>
                      )}
                    </Styled.Color>
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
              </Styled.WidthContainer>
              <Styled.WidthContainer>
                <Styled.FlexContainer>
                  <Styled.OptionTitle>만족도</Styled.OptionTitle>
                  <Styled.FlexContainer>
                    <Styled.Color
                      style={{
                        color: '#346cfd',
                        fontWeight: '500',
                      }}
                    >
                      {Number(db.data.lectureSatisfactionAvg).toFixed(1)}
                    </Styled.Color>
                    /5
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
                <Styled.FlexContainer>
                  <Styled.OptionTitle>학점</Styled.OptionTitle>
                  <Styled.FlexContainer>
                    <Styled.Color style={{ color: '#6200ee', fontSize: '14px' }}>
                      {db.data.lectureHoneyAvg !== 0  ? (
                        difficulty[difficultySet]
                      ) : (
                        <Styled.DataColor id="black">-</Styled.DataColor>
                      )}
                    </Styled.Color>
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
              </Styled.WidthContainer>
            </Styled.FlexContainer>
          </Styled.Content>
          <Styled.Content>
            <Styled.TitleWrapper id="top">
              <Styled.TitleWrapper id="bottom">{menuList}</Styled.TitleWrapper>
              <Styled.Writing
                src="img/btn_write.svg"
                onClick={() =>
                  !written ? setModalIsOpen(true) : alert(`이미 작성한 ${check}가 있습니다`)
                }
              />
            </Styled.TitleWrapper>
            {checkList[menuCheck]}
          </Styled.Content>
        </Styled.Wrapper>
      )}
      {menuCheck === 0 ? (
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <WriteEvaluation
            selectId={selectId}
            lectureName={db.data.lectureName}
            professor={db.data.professor}
            semesterList={db.data.semesterList}
            setModalIsOpen={setModalIsOpen}
          />
        </Modal>
      ) : (
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <WriteExam
            selectId={selectId}
            lectureName={db.data.lectureName}
            professor={db.data.professor}
            semesterList={db.data.semesterList}
            setModalIsOpen={setModalIsOpen}
          />
        </Modal>
      )}
    </Styled.Container>
  );
};

export default LectureInfo;
