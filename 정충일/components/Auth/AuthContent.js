import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-size : 1.5rem;
    font-weight : 1000;
    margin-bottom : 1rem;
`

const AuthContent = ({title, children}) => (
    <div>
        <Title>{title}</Title>
        {children}
    </div>
)

export default AuthContent;