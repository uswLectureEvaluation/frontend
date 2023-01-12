import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Major from '../api/Major';
import { versionCheck } from '../app/versionCheck';
import { MajorModalStyle } from '../components/Etc/ModalStyle';
import MainList from '../components/List/MainList';
import MajorSearch from '../components/MajorSearch';

// const options = [
//   {
//     name: '최근 올라온 강의',
//     lec: 'modifiedDate',
//     imgs: 'images/icon_color_fire_36.svg',
//   },
//   {
//     name: '꿀 강의',
//     lec: 'lectureHoneyAvg',
//     imgs: 'images/icon_color_bee_36.svg',
//   },
//   {
//     name: '만족도가 높은 강의',
//     lec: 'lectureSatisfactionAvg',
//     imgs: 'images/icon_color_thumbs_36.svg',
//   },
//   {
//     name: '배울게 많은 강의',
//     lec: 'lectureLearningAvg',
//     imgs: 'images/icon_color_book_36.svg',
//   },
//   {
//     name: 'BEST 강의',
//     lec: 'lectureTotalAvg',
//     imgs: 'images/icon_color_best_36.svg',
//   },
// ];

const Main = () => {
  const navigate = useNavigate();
  const search = useRef(null);
  // const [search, setSearch] = useState('');
  const [lecture] = useState('modifiedDate');
  const [checkClass, setCheckClass] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const major = Major();

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (search.current.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search?q=${search.current.value}&option=lectureTotalAvg&majorType=전체`);
      }
    }
  };
  useEffect(() => {
    versionCheck(major);
  }, [major]);
  return (
    <div>
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
        <SearchWrapper>
          <SearchTitle>강의평가 검색</SearchTitle>
          <SearchInput
            ref={search}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
            onMouseLeave={() => document.activeElement.blur()}
          />
        </SearchWrapper>
        <SearchWrapper>
          <HeadSelection>
            <FlexWrapper onClick={() => setModalIsOpen(true)}>
              {/* <SortSelect id="major" defaultValue={checkClass}>
                {majorList.map((index) => (
                  <StyledOption id="semester" key={index} value={index}>
                    <Soption id="semester">{checkClass}</Soption>
                  </StyledOption>
                ))}
              </SortSelect> */}
            </FlexWrapper>
            {/* <CustomSelect defaultValue={'modifiedDate'} onChange={onChangeHandler}>
              {options.map((index) => (
                <StyledOption key={index.name} value={index.lec}>
                  <Soption>
                    <Img alt="option-icon" width="22" height="22" src={index.imgs} /> {index.name}
                  </Soption>
                </StyledOption>
              ))}
            </CustomSelect> */}
          </HeadSelection>
          <HeadSelection>
            <MainList lecture={lecture} checkClass={checkClass} />
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
