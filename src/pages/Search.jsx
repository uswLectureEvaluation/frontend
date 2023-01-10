import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LectureList from '../components/List/LectureList';
import MajorSearch from '../components/MajorSearch';
import Meta from '../components/Meta';
import { MajorModalStyle } from '../components/Etc/ModalStyle';
import styled from '@emotion/styled';
export const majorList = ['전체'];

const Search = () => {
  // const detail = [
  //   { name: '만족도', option: 'lectureSatisfactionAvg' },
  //   { name: '꿀강', option: 'lectureHoneyAvg' },
  //   { name: '배움', option: 'lectureLearningAvg' },
  //   { name: '날짜', option: 'modifiedDate' },
  //   { name: '종합', option: 'lectureTotalAvg' },
  // ];
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
  // const onSelect = (e) => {
  //   navigate(`/search?q=${searchValue}&option=${e}&majorType=${majorType}`);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  return (
    <div>
      <Meta title="SUWIKI : 검색" />
      <Container>
        <SearchWrapper>
          <SearchTitle>강의평가 검색</SearchTitle>
          <SearchInput
            onChange={onChange}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
            value={search}
          />
        </SearchWrapper>

        <SearchResultWrapper>
          <div style={{ display: 'flex' }}>
            <FlexWrapper onClick={() => setModalIsOpen(true)}>
              {/* <SortSelect id="major" defaultValue={majorType}>
                {majorList.map((index) => (
                  <StyledOption id="semester" key={index} value={index}>
                    <Soption id="semester">{majorType}</Soption>
                  </StyledOption>
                ))}
              </SortSelect> */}
            </FlexWrapper>
            <FlexWrapper>
              {/* <SortSelect id="sort" value={option} onChange={onSelect}>
                {detail.map((index) => (
                  <StyledOption id="semester" key={index.option} value={index.option}>
                    <Soption id="semester">{index.name}</Soption>
                  </StyledOption>
                ))}
              </SortSelect> */}
            </FlexWrapper>
          </div>

          <FlexWrapper id="count">
            총 <Color> {count}</Color>건
          </FlexWrapper>
        </SearchResultWrapper>

        <HeadSelection>
          <LectureList setCount={setCount} />
        </HeadSelection>
      </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    width: 90%;
  }
`;

const SearchResultWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
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

const HeadSelection = styled.div`
  padding-bottom: 10px;
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;

  &#count {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
`;

const Color = styled.span`
  color: #336af8;
  margin-left: 6px;
  text-align: center;
`;
