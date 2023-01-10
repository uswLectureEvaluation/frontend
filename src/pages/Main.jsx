import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Major from '../api/Major';
import { versionCheck } from '../app/versionCheck';
import MainList from '../components/MainList';
import MajorSearch from '../components/MajorSearch';
import { MajorModalStyle } from '../components/ModalStyle';
import { majorList } from './Search';
import styled, { createGlobalStyle } from 'styled-components';
import * as React from 'react';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import { styled as styled_mui } from '@mui/system';
import PopperUnstyled from '@mui/base/PopperUnstyled';

const options = [
  {
    name: '최근 올라온 강의',
    lec: 'modifiedDate',
    imgs: 'images/icon_color_fire_36.svg',
  },
  {
    name: '꿀 강의',
    lec: 'lectureHoneyAvg',
    imgs: 'images/icon_color_bee_36.svg',
  },
  {
    name: '만족도가 높은 강의',
    lec: 'lectureSatisfactionAvg',
    imgs: 'images/icon_color_thumbs_36.svg',
  },
  {
    name: '배울게 많은 강의',
    lec: 'lectureLearningAvg',
    imgs: 'images/icon_color_book_36.svg',
  },
  {
    name: 'BEST 강의',
    lec: 'lectureTotalAvg',
    imgs: 'images/icon_color_best_36.svg',
  },
];
const Main = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [lecture, setLecture] = useState('modifiedDate');
  const [checkClass, setCheckClass] = useState('전체');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const major = Major();
  const onChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const onChangeHandler = (e) => {
    setLecture(e);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length < 2) {
        alert('두 글자 이상 입력해주세요');
      } else {
        navigate(`/search?q=${search}&option=lectureTotalAvg&majorType=전체`);
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
            onChange={onChange}
            placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
            onKeyPress={onKeypress}
            onMouseLeave={() => document.activeElement.blur()}
          />
        </SearchWrapper>
        <SearchWrapper>
          <HeadSelection>
            <FlexWrapper onClick={() => setModalIsOpen(true)}>
              <SortSelect id="major" defaultValue={checkClass}>
                {majorList.map((index) => (
                  <StyledOption id="semester" key={index} value={index}>
                    <Soption id="semester">{checkClass}</Soption>
                  </StyledOption>
                ))}
              </SortSelect>
            </FlexWrapper>
            <CustomSelect defaultValue={'modifiedDate'} onChange={onChangeHandler}>
              {options.map((index) => (
                <StyledOption key={index.name} value={index.lec}>
                  <Soption>
                    <Img alt="option-icon" width="22" height="22" src={index.imgs} /> {index.name}
                  </Soption>
                </StyledOption>
              ))}
            </CustomSelect>
          </HeadSelection>
          <HeadSelection>
            <MainList lecture={lecture} checkClass={checkClass} />
          </HeadSelection>
        </SearchWrapper>
        <Button
          background="#336af8"
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

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  background-color: #eeeeee;
  cursor: default;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const BannerWrapper = styled.div`
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

export const BannerSub = styled.div`
  font-size: 1rem;
  padding-top: 0.4rem;
  font-weight: 300;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 1.5rem;

  font-weight: 600;
  width: 100%;
`;

export const SearchInput = styled.input`
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

export const HeadSelection = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
  width: 100%;
  justify-content: flex-start;
`;

export const BannerImg = styled.img`
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

export const FlexWrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  vertical-align: bottom;
  pointer-events: none;
  @media screen and (max-width: 960px) {
    vertical-align: bottom;
    pointer-events: none;
  }
`;

export const Soption = styled.span`
  font-weight: normal;
  &#semester {
    font-size: 16px;
    font-weight: normal;
  }
`;

export const Button = styled.button`
  width: 40%;
  height: 50px;
  border: none;
  background: ${(props) => props.background};
  color: white;
  font-size: 1.1rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 550px) {
    width: 50%;
  }
`;

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#e0e0e0',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled_mui('button')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 166px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  margin: 0.5em 0.5em 0 0;
  padding: 5px 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  &#semester {
    min-width: 130px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 30px;
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  }
  &#sort {
    min-width: 150px;
    min-height: calc(1.5em + 0px);
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 10px;
    color: #336af8;
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    &::before {
      content: '정렬';
      margin-right: 10px;
      color: black;
      font-size: 15px;
    }
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: url('images/icon_up_arrow_solid_24.svg');
        color: black;
      }
    }
  
    &::after {
      content: url('images/icon_down_arrow_solid_24.svg');
      float: right;
      color: black;
    }
  }
  &#major {
    min-width: 150px;
    min-height: calc(1.5em + 22px);
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 10px;
    color: #336af8;
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    &::before {
      content: '개설학과';
      margin-right: 10px;
      color: black;
      font-size: 15px;
    }
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: url('images/icon_up_arrow_solid_24.svg');
        color: black;
      }
    }
  
    &::after {
      content: url('images/icon_down_arrow_solid_24.svg');
      float: right;
      color: black;
    }
  }
  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url('images/icon_up_arrow_solid_24.svg');
      color: black;
    }
  }

  &::after {
    content: url('images/icon_down_arrow_solid_24.svg');
      float: right;
      color: black;
  }

  & img {
    margin-right: 5px;
  }
  `
);

const StyledListbox = styled_mui('ul')(
  ({ theme }) => `
  font-size: 0.875rem;
   
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 166px;
  max-height: 400px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledSemesterListbox = styled_mui('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 130px;
  max-height: 400px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledSortListbox = styled_mui('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 150px;
  max-height: 400px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

export const StyledOption = styled_mui(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;
  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  & img {
    margin-right: 5px;
  }
  `
);

const StyledPopper = styled_mui(PopperUnstyled)`
    z-index: 1;
`;

export const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};

export const SemesterSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledSemesterListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

SemesterSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};

export const SortSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledSortListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

SortSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};
