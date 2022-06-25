import React, { useState, useEffect } from 'react';
import SearchList from '../../components/SearchList';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import * as Styled from './styled';
import MainList from '../../components/MainList';
import { SortSelect, StyledOption, Soption } from '../Main/styled';
import Modal from 'react-modal';
import {MajorModalStyle} from '../../components/ModalStyle';
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

  const location = useLocation();
  const { search_value, search_option } = location.state;

  let navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [option, setOption] = useState('lectureHoneyAvg');
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(search_option);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMajor, setSelectedMajor] = useState('');
  const [checkClass, setCheckClass] = useState('전체');

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const [win, setWin] = useState(true);

  const showWin = () => {
    if (window.innerWidth <= 960) {
      setWin(false);
    } else {
      setWin(true);
    }
  };

  window.addEventListener('resize', showWin);

  useEffect(() => {
    showWin();
  }, [win]);

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search`, {
        state: {
          search_value: search,
          search_option: option,
        },
      });
    }
  };

  const onSelect = (e) => {
    setCheck(e);
    setOption(e);
  };
  
  return (
    <div>
    <Styled.Container>
      <Styled.SearchWrapper>
        <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
        <Styled.SearchInput
          onChange={onChange}
          placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
          onKeyPress={onKeypress}
        />
      </Styled.SearchWrapper>

      <Styled.SearchResultWrapper>
        <div style={{display:"flex"}}>
        <Styled.FlexWrapper onClick={()=>setModalIsOpen(true)}>
          <SortSelect id="major" defaultValue={`${check}`} onChange={onSelect}>
            {detail.map((index) => (
              <StyledOption id="semester" key={index.name} value={index.option}>
                <Soption id="semester">{checkClass}</Soption>
              </StyledOption>
            ))}
          </SortSelect>
        </Styled.FlexWrapper>
        <Styled.FlexWrapper>
          <SortSelect id="sort" defaultValue={`${check}`} onChange={onSelect}>
            {detail.map((index) => (
              <StyledOption id="semester" key={index.option} value={index.option}>
                <Soption id="semester">{index.name}</Soption>
              </StyledOption>
            ))}
          </SortSelect>
        </Styled.FlexWrapper>
        </div>

        {win ? (
          <Styled.FlexWrapper>
            총 <Styled.Color> {count}</Styled.Color>건
          </Styled.FlexWrapper>
        ) : (
          ''
        )}
      </Styled.SearchResultWrapper>

      <Styled.HeadSelection>
        {search_value === 'all' ? (
          <Infinite />
        ) : (
          <SearchList lecture={location.state} setCount={setCount} checkClass={checkClass} />
        )}
      </Styled.HeadSelection>
    </Styled.Container>
    <Modal
          isOpen={modalIsOpen}
          style={MajorModalStyle}
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <MajorSearch setModalIsOpen={setModalIsOpen} setSelectedMajor={setSelectedMajor} setCheckClass={setCheckClass} selectedMajor={selectedMajor} />
        </Modal>
    </div>
  );
};

export default Search;
