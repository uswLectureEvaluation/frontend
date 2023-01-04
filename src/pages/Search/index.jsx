import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Infinite from '../../components/Infinite';
import MajorSearch from '../../components/MajorSearch';
import Meta from '../../components/Meta';
import { MajorModalStyle } from '../../components/ModalStyle';
import { Soption, SortSelect, StyledOption } from '../Main/styled';
import * as Styled from './styled';
export const majorList = ['전체'];

const Search = () => {
  const detail = [
    { name: '만족도', option: 'lectureSatisfactionAvg' },
    { name: '꿀강', option: 'lectureHoneyAvg' },
    { name: '배움', option: 'lectureLearningAvg' },
    { name: '날짜', option: 'modifiedDate' },
    { name: '종합', option: 'lectureTotalAvg' },
  ];
  const [searchParams] = useSearchParams();

  let searchValue = searchParams.get('q');
  let majorType = searchParams.get('majorType');
  let option = searchParams.get('option');

  const navigate = useNavigate();

  const [search, setSearch] = useState(searchValue);
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search?q=${search}&option=${option}&majorType=${majorType}`);
      }
    }
  };
  const onSelect = (e) => {
    navigate(`/search?q=${searchValue}&option=${e}&majorType=${majorType}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return (
    <div>
      <Meta title="SUWIKI : 검색" />
      <Styled.Container>
        <Styled.SearchWrapper>
          <Styled.SearchTitle>강의평가 검색</Styled.SearchTitle>
          <Styled.SearchInput
            onChange={onChange}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
            value={search}
          />
        </Styled.SearchWrapper>

        <Styled.SearchResultWrapper>
          <div style={{ display: 'flex' }}>
            <Styled.FlexWrapper onClick={() => setModalIsOpen(true)}>
              <SortSelect id="major" defaultValue={majorType}>
                {majorList.map((index) => (
                  <StyledOption id="semester" key={index} value={index}>
                    <Soption id="semester">{majorType}</Soption>
                  </StyledOption>
                ))}
              </SortSelect>
            </Styled.FlexWrapper>
            <Styled.FlexWrapper>
              <SortSelect id="sort" value={option} onChange={onSelect}>
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
        <MajorSearch setModalIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
};

export default Search;
