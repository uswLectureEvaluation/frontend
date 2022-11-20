import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as Styled from './styled';
import { SortSelect, StyledOption, Soption } from '../Main/styled';
import Modal from 'react-modal';
import { MajorModalStyle } from '../../components/ModalStyle';
import MajorSearch from '../../components/MajorSearch';
import Infinite from '../../components/Infinite';

const Search = () => {
  const detail = [
    { name: '만족도', option: 'lectureSatisfactionAvg' },
    { name: '꿀강', option: 'lectureHoneyAvg' },
    { name: '배움', option: 'lectureLearningAvg' },
    { name: '날짜', option: 'modifiedDate' },
    { name: '종합', option: 'lectureTotalAvg' },
  ];
  const majorList = window.localStorage.getItem('majorType').split(',');
  const [searchParams] = useSearchParams();

  const searchValue = searchParams.get('q');
  const majorType = searchParams.get('majorType');
  const option = searchParams.get('option');

  let navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [lecture, setLecture] = useState(option);
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkClass, setCheckClass] = useState(majorType);

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search?q=${search}&option=${lecture}&majorType=${checkClass}`);
      }
    }
  };
  const onSelect = (e) => {
    setLecture(e);
  };

  useEffect(() => {
    navigate(`/search?q=${searchValue}&option=${lecture}&majorType=${checkClass}`);
  }, [lecture, checkClass, searchValue, navigate]);
  return (
    <div>
      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
          <Styled.SearchInput
            onChange={onChange}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
            defaultValue={searchValue}
          />
        </Styled.SearchWrapper>

        <Styled.SearchResultWrapper>
          <div style={{ display: 'flex' }}>
            <Styled.FlexWrapper onClick={() => setModalIsOpen(true)}>
              <SortSelect id="major" defaultValue={checkClass}>
                {majorList.map((index) => (
                  <StyledOption id="semester" key={index} value={index}>
                    <Soption id="semester">{checkClass}</Soption>
                  </StyledOption>
                ))}
              </SortSelect>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>
              <SortSelect id="sort" defaultValue={lecture} onChange={onSelect}>
                {detail.map((index) => (
                  <StyledOption id="semester" key={index.option} value={index.option}>
                    <Soption id="semester">{index.name}</Soption>
                  </StyledOption>
                ))}
              </SortSelect>
            </Styled.FlexWrapper>
          </div>

          <Styled.FlexWrapper id="count">
            총 <Styled.Color> {count}</Styled.Color>건
          </Styled.FlexWrapper>
        </Styled.SearchResultWrapper>

        <Styled.HeadSelection>
          <Infinite setCount={setCount} />
        </Styled.HeadSelection>
      </Styled.Container>
      <Modal
        isOpen={modalIsOpen}
        style={MajorModalStyle}
        // 오버레이나 esc를 누르면 핸들러 동작
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <MajorSearch
          checkClass={checkClass}
          setModalIsOpen={setModalIsOpen}
          setCheckClass={setCheckClass}
        />
      </Modal>
    </div>
  );
};

export default Search;
