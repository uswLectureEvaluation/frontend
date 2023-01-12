import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { lectureState } from '../app/recoilStore';
import ModalStyle from '../components/Etc/ModalStyle';
import IsTestInfo from '../components/Lecture/IsTestInfo';
import LectureDetail from '../components/Lecture/LectureDetail';
import SearchEvaluationList from '../components/List/SearchEvaluationList';
import Meta from '../components/Meta';
import WriteEvaluation from '../components/Write/WriteEvaluation';
import WriteExam from '../components/Write/WriteTestInfo';
import { AppContainer } from '../styles/Common';
import { isLoginStorage } from '../utils/loginStorage';

const menu = [
  { name: '강의평가', option: '강의평가' },
  { name: '시험정보', option: '시험정보' },
];

const LectureInfo = () => {
  const input = useRef(null);
  const navigate = useNavigate();
  const [check, setCheck] = useState('강의평가');
  const [written, setWritten] = useState(false);
  const [menuCheck, setMenuCheck] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const lectureInfo = useRecoilValue(lectureState);
  const [searchparams] = useSearchParams();
  const selectId = searchparams.get('id');
  const isLogin = isLoginStorage();

  const checkList = {
    0: <SearchEvaluationList isLogin={isLogin} selectId={selectId} setWritten={setWritten} />,
    1: <IsTestInfo selectId={selectId} setWritten={setWritten} />,
  };
  const menuList = menu.map((i, index) => (
    <MenuTitle key={i.option} id={i.option} check={check} onClick={(e) => clickFunc(e, index)}>
      {i.name}
    </MenuTitle>
  ));

  const clickFunc = (e, index) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };

  const onKeypress = (e) => {
    if (e.key !== 'Enter') return;
    if (input.current.value.length < 2) {
      alert('두 글자 이상 입력해주세요');
      return;
    }

    navigate(`/search?q=${input.current.value}&option=lectureTotalAvg&majorType=전체`);
  };

  return (
    <AppContainer>
      <Meta title="SUWIKI : 검색" />
      <SearchWrapper>
        <SearchTitle>강의평가 검색</SearchTitle>
        <SearchInput
          ref={input}
          placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
          onKeyPress={onKeypress}
        />
      </SearchWrapper>

      <Wrapper>
        {/* 강의 정보 세부 */}
        <LectureDetail />
        {/* 강의 평가 / 시험 정보 리스트 */}
        <Content>
          <TitleWrapper id="top">
            <TitleWrapper id="bottom">{menuList}</TitleWrapper>
            <Writing
              width={78}
              height={34}
              src="images/btn_write.svg"
              onClick={() =>
                !isLogin
                  ? alert('로그인해 주세요')
                  : !written
                  ? setModalIsOpen(true)
                  : alert(`이미 작성한 ${check}가 있습니다`)
              }
            />
          </TitleWrapper>
          {checkList[menuCheck]}
        </Content>
      </Wrapper>

      <Modal
        isOpen={modalIsOpen}
        style={ModalStyle}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        {menuCheck === 0 ? (
          <WriteEvaluation row={lectureInfo} type="write" setModalIsOpen={setModalIsOpen} />
        ) : (
          <WriteExam row={lectureInfo} type="write" setModalIsOpen={setModalIsOpen} />
        )}
      </Modal>
    </AppContainer>
  );
};

export default LectureInfo;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const SearchTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-right: auto;

  font-weight: 600;
  padding-top: 4rem;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.5px solid #000000;
  margin: 1.5rem 0;
  background-image: url('images/icon_search_24.svg');
  background-repeat: no-repeat;
  background-position: 99%;

  font-weight: 400;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 550px) {
    font-size: 16px;
    width: 123%;
    transform: scale(0.8);
  }
`;

const Content = styled.div`
  border-radius: 10px;
  margin: 10px 0;
  margin-bottom: 3rem;

  &#top {
    padding: 1rem 2rem;
    border: 1px solid rgb(224, 224, 224);
  }

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: flex-end;

  &#top {
    justify-content: space-between;
    align-items: flex-start;
  }
  &#bottom {
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MenuTitle = styled.li`
  font-size: 16px;
  margin-bottom: 1rem;
  text-align: center;

  display: flex;
  color: lightgray;
  padding-right: 1rem;

  &:hover {
    cursor: pointer;
  }
  &#${({ check }) => check} {
    color: black;
  }
`;

const Writing = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
