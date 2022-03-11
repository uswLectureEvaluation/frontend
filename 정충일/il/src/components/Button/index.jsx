import React from 'react';
import * as Styled from './styled';

const Button = ({ children, onClick, color, id }) => (
    <Styled.Wrapper onClick={onClick} background={color} id={id}>
            {children}
    </Styled.Wrapper>
);

export default Button;