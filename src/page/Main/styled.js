import styled, { createGlobalStyle } from 'styled-components';
import { Color } from '../../GlobalStyle';
import * as React from 'react';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import { styled as styled_mui } from '@mui/system';
import { PopperUnstyled } from '@mui/base';

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
  height: 40vh;
  background-color: #eeeeee;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const BannerWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 40vh;
  display: flex;
  align-items: center;
  color: #000000;
  font-size: 1.8rem;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    width: 80%;
    margin: 0 auto;
    height: 40vh;
    display: flex;
    align-items: center;
    color: #000000;
    font-size: 1.3rem;
    justify-content: space-evenly;
  }
`;

export const BannerSub = styled.div`
  font-size: 1rem;
  margin-top: 1vh;
  font-family: 'Pretendard-Light';

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    margin-top: 1vh;
    font-family: 'Pretendard-Light';
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
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
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.5px solid #000000;
  margin: 1.5rem 0;
  background-image: url('img/icon_search_24.svg');
  background-repeat: no-repeat;
  background-position: 99%;

  &:focus {
    outline: none;
  }
`;

export const HeadSelection = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
  width: 100%;
  justify-content: flex-start;
`;

export const Select = styled.select`
  height: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  background-color: white;
  padding-right: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  font-size: 16px;
  border-color: ${Color('border')};
  &:focus-visible {
    outline: white solid 2px;
  }
  option {
    border-radius: 8px;
    color: black;
  }
`;

export const More = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: ${Color('main')};
  padding-right: 5px;
`;

export const BannerImg = styled.img`
  vertical-align: bottom;
  pointer-events: none;
  @media screen and (max-width: 960px) {
    width: 400px;
    vertical-align: bottom;
    pointer-events: none;
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
    font-family: Pretendard;
    font-size: 16px;
    font-weight: normal;
  }
`;

export const Button = styled.button`
  margin: 10px 0;
  margin-bottom: 10vh;
  width: 40%;
  padding: 0.8rem 1rem;
  border: none;
  background: ${(props) => props.background};
  color: white;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  font-family: 'Pretendard-Medium';

  @media screen and (max-width: 480px) {
    margin: 10px 0;
    margin-bottom: 10vh;
    width: 50%;
    padding: 0.8rem 1rem;
    border: none;
    background: ${(props) => props.background};
    color: white;
    text-align: center;
    font-size: 1.1rem;
    border-radius: 12px;
    cursor: pointer;
    user-select: none;
    font-family: 'Pretendard-Medium';
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
  font-family: Pretendard-Regular;
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
    color: #346cfd;
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    &::before {
      content: '정렬';
      margin-right: 10px;
      color: black;
      font-size: 15px;
      font-family: Pretendard-Regular;
    }
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: url('img/icon_up_arrow_solid_24.svg');
        color: black;
      }
    }
  
    &::after {
      content: url('img/icon_down_arrow_solid_24.svg');
      float: right;
      color: black;
    }
  }
  &#major {
    min-width: 150px;
    min-height: calc(1.5em + 0px);
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 10px;
    color: #346cfd;
    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
    &::before {
      content: '개설학과';
      margin-right: 10px;
      color: black;
      font-size: 15px;
      font-family: Pretendard-Regular;
    }
    &.${selectUnstyledClasses.expanded} {
      &::after {
        content: url('img/icon_up_arrow_solid_24.svg');
        color: black;
      }
    }
  
    &::after {
      content: url('img/icon_down_arrow_solid_24.svg');
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
      content: url('img/icon_up_arrow_solid_24.svg');
      color: black;
    }
  }

  &::after {
    content: url('img/icon_down_arrow_solid_24.svg');
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
  font-family: Pretendard-Regular;
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
