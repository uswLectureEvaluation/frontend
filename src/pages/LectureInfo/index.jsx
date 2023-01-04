import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { lectureState } from '../../app/recoilStore';
import LectureDetail from '../../components/LectureInfo/LectureDetail';
import Meta from '../../components/Meta';
import ModalStyle from '../../components/ModalStyle';
import SearchEvaluationList from '../../components/SearchEvaluationList';
import TestInfo from '../../components/TestInfo';
import WriteEvaluation from '../../components/WriteEvaluation';
import WriteExam from '../../components/WriteExam';
import { isLoginStorage } from '../../utils/loginStorage';
import * as Styled from './styled';

const LectureInfo = () => {
  const navigate = useNavigate();
  const [check, setCheck] = useState('강의평가');
  const [search, setSearch] = useState('');
  const [written, setWritten] = useState(false);
  const [menuCheck, setMenuCheck] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const lectureInfo = useRecoilValue(lectureState);
  const [searchparams] = useSearchParams();
  const selectId = searchparams.get('id');
  const isLogin = isLoginStorage();
  const menu = [
    { name: '강의평가', option: '강의평가' },
    { name: '시험정보', option: '시험정보' },
  ];
  const checkList = {
    0: <SearchEvaluationList isLogin={isLogin} selectId={selectId} setWritten={setWritten} />,
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

  const clickFunc = (e, index) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search?q=${search}&option=lectureTotalAvg&majorType=전체`);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Styled.Container>
      <Meta title="SUWIKI : 검색" />
      <Styled.SearchWrapper>
        <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
        <Styled.SearchInput
          onChange={onChange}
          placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
          onKeyPress={onKeypress}
        />
      </Styled.SearchWrapper>

      <Styled.Wrapper>
        {/* 강의 정보 세부 */}
        <LectureDetail />
        {/* 강의 평가 / 시험 정보 리스트 */}
        <Styled.Content>
          <Styled.TitleWrapper id="top">
            <Styled.TitleWrapper id="bottom">{menuList}</Styled.TitleWrapper>
            <Styled.Writing
              width={78}
              height={34}
              src="images/btn_write.svg"
              onClick={() =>
                !isLogin
                  ? null
                  : !written
                  ? setModalIsOpen(true)
                  : alert(`이미 작성한 ${check}가 있습니다`)
              }
            />
          </Styled.TitleWrapper>
          {checkList[menuCheck]}
        </Styled.Content>
      </Styled.Wrapper>

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
    </Styled.Container>
  );
};

export default LectureInfo;
