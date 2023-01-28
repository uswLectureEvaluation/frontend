import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Major } from 'api';
import { versionCheck } from 'app/versionCheck';
import { MainList, LectureSearch, OptionSelect, MajorSelect } from 'components';
import { sortOptions } from '../constants/placeholderData';

const Main = () => {
  const navigate = useNavigate();
  const [select, onSelect] = useState(false);
  const major = Major();

  useEffect(() => {
    versionCheck(major);
  }, [major]);
  return (
    <div role="presentation" onClick={() => select && onSelect(false)}>
      <Banner>
        <BannerWrapper>
          <div>
            수위키,
            <br />
            강의평가의 모든 것<BannerSub>강의평가의 모든 것 수위키</BannerSub>
          </div>
          <picture>
            <source srcSet="/images/resize_banner.avif" type="image/avif" />
            <source srcSet="/images/resize_banner.webp" type="image/webp" />
            <source srcSet="/images/banner.webp" type="image/webp" />
            <source srcSet="/images/banner.svg" type="image/png" />
            <BannerImg src="images/banner.svg" alt="banner" width={450} height={450} />
          </picture>
        </BannerWrapper>
      </Banner>
      <Container>
        <LectureSearch />
        <SearchWrapper>
          <HeadSelection>
            <FlexWrapper>
              <MajorSelect />
            </FlexWrapper>
            <OptionSelect
              list={sortOptions}
              state={select}
              controller={onSelect}
              icon={true}
              itemTitle="name"
              location="main"
            />
          </HeadSelection>
          <HeadSelection>
            <MainList />
          </HeadSelection>
        </SearchWrapper>
        <Button
          onClick={() => {
            navigate(`/search?q=&option=lectureTotalAvg&majorType=전체`);
          }}
        >
          더 보러 가기 →
        </Button>
      </Container>
    </div>
  );
};

export default Main;

const Banner = styled.div`
  width: 100%;
  background-color: #eeeeee;
  cursor: default;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const BannerWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  justify-content: space-between;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

const BannerSub = styled.div`
  font-size: 1rem;
  padding-top: 0.4rem;
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

const HeadSelection = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
  width: 100%;
  justify-content: flex-start;
`;

const BannerImg = styled.img`
  vertical-align: bottom;
  pointer-events: none;
  @media screen and (max-width: 1300px) {
    width: 450px;
    height: 450px;
    vertical-align: bottom;
    pointer-events: none;
  }

  @media screen and (max-width: 960px) {
    width: 400px;
    height: 400px;
    vertical-align: bottom;
    pointer-events: none;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 40%;
  height: 50px;
  border: none;
  background: #336af8;
  color: white;
  font-size: 1.1rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 550px) {
    width: 50%;
  }
`;
