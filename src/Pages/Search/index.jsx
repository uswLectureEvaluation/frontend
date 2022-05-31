import React, { useState, useEffect } from 'react';
import SearchList from '../../components/SearchList';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import * as Styled from './styled';
import MainList from '../../components/MainList';
import { SortSelect, StyledOption, Soption } from '../Main/styled';

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
  const [check, setCheck] = useState(search_option);

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
        <Styled.FlexWrapper>
          <SortSelect id="sort" defaultValue={`${check}`} onChange={onSelect}>
            {detail.map((index) => (
              <StyledOption id="semester" key={index.option} value={index.option}>
                <Soption id="semester">{index.name}</Soption>
              </StyledOption>
            ))}
          </SortSelect>
        </Styled.FlexWrapper>

        {win ? (
          <Styled.FlexWrapper>
            총 <Styled.Color> 777</Styled.Color>건
          </Styled.FlexWrapper>
        ) : (
          ''
        )}
      </Styled.SearchResultWrapper>

      <Styled.HeadSelection>
        {search_value === 'all' ? (
          <MainList lecture={check} />
        ) : (
          <SearchList lecture={location.state} />
        )}
      </Styled.HeadSelection>
    </Styled.Container>
  );
};

export default Search;
