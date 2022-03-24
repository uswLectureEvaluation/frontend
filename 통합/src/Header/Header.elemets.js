import React from 'react';
import style from 'styled-components'
import { Container } from '../globalStyles'
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import { styled } from '@mui/system';
import { PopperUnstyled } from '@mui/base';


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
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
   font-weight: bold;
    font-size: 20px;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 200px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 0 solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
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
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
   font-weight: bold;
    font-size: 20px;
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
  `,
);

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  border-radius: 0.45em;
  cursor: default;
  font-weight: bold;
    font-size: 20px;
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
  `,
);

const StyledPopper = styled(PopperUnstyled)`
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
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
};


// CSS는 같은 속성을 여러 번 정의했을 때, 나중에 설정한 값이 적용됩니다. 만약 나중에 설정한 값이 적용되지 않게 하려면 속성값
// 뒤에!important를 붙입니다.

export const Display = style.div`
width: 100%;
position: relative;
z-index: 99;
margin-top: 30px;

`

export const HeadSelection = style(Container)`
display: flex;
//아이템들의 사이에 균일한 간격을 만들어준다
justify-content: space-between;
padding: 0;
`

export const VerticalMiddle = style.div`
vertical-align: middle;
width: 100%;
height: 100%;
`

export const DContainer = style.div`
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
 min-height: 100%;
    position: relative;

`

export const Wrapper = style.div`
  width:70%;
  margin: 0 auto;

`

export const Img = style.img`

`

export const Row = style.div`
margin-right: -15px;
margin-left: -15px;
    
`

export const TextCenter = style.h1`
width: 100%;
float: left;
position: relative;
padding-right: 15px;
padding-left: 15px;
text-align: center;
line-height: 60px;
margin-bottom: 30px;
font: HanSans;
font-weight: bold;
font-size: 36px;
`

export const SearchBar = style.div`
background-color: #ffffff;
padding: 15px 20px 20px 20px;
border-color: #e7eaec;
border-image: none;
border-width: 1px 0;
`

export const SearchInput = style.input`
position: relative;
z-index: 2;
width: 100%;
height: 80px;
margin-bottom: 0;
transition: border-color 0.15s ease-in-out 0s, 
box-shadow 0.15s ease-in-out 0s;
font-size: 14px;
line-height: 1.3333333;
font-family: HanSans;
border-radius: 10px;
    background-color: rgb(255, 255, 255);
    border-width: 2px;
    border-style: solid;
    border-color: rgb(224, 224, 224);
::placeholder {
    padding-left: 20px;
    font-size: 16px;
    color: rgb(190, 190, 190);
}
`


