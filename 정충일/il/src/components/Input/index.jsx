import React from 'react';
import * as Styled from './styled';

const Input = ({ onChange, placeholder }) => (
    <Styled.Input onChange={onChange} placeholder={placeholder} />
);

export default Input;