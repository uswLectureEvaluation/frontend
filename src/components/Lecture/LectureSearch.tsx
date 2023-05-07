import styled from '@emotion/styled';
import useSearch from 'hooks/useSearch';

const LectureSearch = () => {
  const [input, onKeypress] = useSearch();

  const handleMouseLeave = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <SearchWrapper>
      <SearchTitle>강의평가 검색</SearchTitle>
      <SearchInput
        ref={input}
        placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
        onKeyDown={onKeypress}
        onMouseLeave={handleMouseLeave}
      />
    </SearchWrapper>
  );
};

export default LectureSearch;

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
  padding-top: 4rem;
  padding-bottom: 1.5rem;

  font-weight: 600;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.5px solid #000000;
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
