import styled from '@emotion/styled';
import { LectureList, LectureSearch, MajorSelect, Meta, OptionSelect } from 'components';
import { sortOptions } from 'constants/placeholderData';
import { useState } from 'react';

const Search = () => {
  const [count, setCount] = useState(0);
  const [select, onSelect] = useState(false);

  return (
    <div>
      <Meta title="SUWIKI : 검색" />
      <Container>
        <LectureSearch />
        <SearchResultWrapper>
          <div style={{ display: 'flex' }}>
            <FlexWrapper>
              <MajorSelect />
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
    margin-right: 0;
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
