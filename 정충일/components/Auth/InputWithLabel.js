import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    && {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    font-size: 14px;
    color: #444444;
    font-weight: 700;
    margin-bottom: 0.4rem;
`;

const Input = styled.input`
    border: 1px solid gray;
    outline: none;
    border-radius: 12px;
    line-height: 2rem;
    font-size: 1rem;
    padding: 10px 40px 10px 14px;
`;

const InputWithLabel = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {...rest}/>
    </Wrapper>
)

export default InputWithLabel;