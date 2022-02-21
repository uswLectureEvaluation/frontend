import React from 'react';
import * as Styled from './styled';

const Button = ({ children, onClick, color}) => (
    <Styled.Wrapper onClick={onClick} background={color}>
            {children}
    </Styled.Wrapper>
);

export default Button;