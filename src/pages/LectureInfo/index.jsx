import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import SearchEvaluationList from '../../components/SearchEvaluationList';
import TestInfo from '../../components/TestInfo';
import WriteEvaluation from '../../components/WriteEvaluation';
import { searchApi, searchLectureApi } from '../../api/Api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import WriteExam from '../../components/WriteExam';
import ModalStyle from '../../components/ModalStyle';
import { Cookies } from 'react-cookie';
import { Button } from '../../components';

const LectureInfo = () => {
  const cookies = new Cookies();
  const selectId = useSelector((state) => state.selectId.value);
  let navigate = useNavigate();
  const [check, setCheck] = useState('lecture');
  const [search, setSearch] = useState('');
  const menu = [
    { name: '강의평가', option: 'lecture' },
    { name: '시험정보', option: 'info' },
  ];
  const checkList = {
    0: <SearchEvaluationList selectId={selectId} />,
    1: <TestInfo selectId={selectId} />,
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

  let setData;

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if(e.currentTarget.value.length < 2) {
        alert("두 글자 이상 입력해주세요");
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
  const [db, lectureData] = useState({
    data: [],
  });

  useEffect(() => {
    searchLectureApi(selectId).then((data) => lectureData(data));
  }, [selectId]);

  const teamSet = parseFloat(db.data.lectureTeamAvg).toFixed(0);
  const homeworkSet = parseFloat(db.data.lectureHomeworkAvg).toFixed(0);
  const difficultySet = parseFloat(db.data.lectureDifficultyAvg).toFixed(0);
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
    <Styled.Container>
      <Styled.SearchWrapper>
        <Styled.SearchTitle>검색 결과</Styled.SearchTitle>
        <Styled.SearchInput
          onChange={onChange}
          placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
          onKeyPress={onKeypress}
        />
      </Styled.SearchWrapper>
      {cookies.get('AccessToken') ? (
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
                  <Styled.Option> {db.data.semesterList} </Styled.Option>
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
                      {team[teamSet]}
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
                      {homework[homeworkSet]}
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
                      {difficulty[difficultySet]}
                    </Styled.Color>
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
              </Styled.WidthContainer>
            </Styled.FlexContainer>
          </Styled.Content>

          <Styled.Content>
            <Styled.TitleWrapper id="top">
              <Styled.TitleWrapper id="bottom">{menuList}</Styled.TitleWrapper>
              <Styled.Writing src="img/btn_write.svg" onClick={() => setModalIsOpen(true)} />
            </Styled.TitleWrapper>
            {checkList[menuCheck]}
          </Styled.Content>
        </Styled.Wrapper>
      ) : (
        <Styled.FlexContainer id="col">
          <Button color="#346cfd" onClick={() => navigate('/login')}>
            로그인하기
          </Button>
        </Styled.FlexContainer>
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
