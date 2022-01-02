import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: #4b89dc;
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 12px;

    cursor: pointer;
    user-select: none;
    transition: .3s all;

    &:hover, &:active {
        background: #4b10f2;
    }

`;

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;