import styled, { createGlobalStyle } from 'styled-components';
import { Color } from '../../globalStyles';
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
     width: 100%;
  margin: 0 auto;
  height: 40vh;
  display: flex;
  align-items: center;
  color: #000000;
  font-size: 2rem;
  justify-content: flex-end;

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
  align-items: flex-end;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-between;
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

export const Img = styled.img`
  vertical-align: bottom;
  pointer-events: none;
   @media screen and (max-width: 960px) {
      vertical-align: bottom;
      pointer-events: none;
  }
 
`;

export const Soption = styled.span`
  font-weight: bold;
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
  min-width: 220px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
  border:none;
  border-radius: 0.75em;
  margin: 0.5em 0.5em 0 0;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }

  & img {
    margin-right: 10px;
  }
  `
);

const StyledListbox = styled_mui('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
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
    margin-right: 10px;
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
