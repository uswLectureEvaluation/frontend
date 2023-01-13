import styled from '@emotion/styled';
import { useState } from 'react';
import Modal from 'react-modal';
import { MajorModalStyle } from '../components/Etc/ModalStyle';
import LectureSearch from '../components/LectureSearch';
import LectureList from '../components/List/LectureList';
import MajorSearch from '../components/MajorSearch';
import Meta from '../components/Meta';
import OptionSelect from '../components/OptionSelect';
import { sortOptions } from '../components/placeholderData';

// const majorList = ['전체'];

const Search = () => {
  const [count, setCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [select, onSelect] = useState(false);

  return (
    <div role="presentation" onClick={() => select && onSelect(false)}>
      <Meta title="SUWIKI : 검색" />
      <Container>
        <LectureSearch />
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
              <OptionSelect
                list={sortOptions}
                state={select}
                controller={onSelect}
                icon={false}
                itemTitle="sub"
                location="search"
              />
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
