import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-size : 1.8rem;
    font-weight : 1000;
    margin-bottom : 3rem;
    text-align: center;
`

const Content = styled.div`
    margin-bottom: 2rem;
`

const AuthContent = ({title, children}) => (
    <Content>
        <Title>{title}</Title>
        {children}
    </Content>
)

export default AuthContent;