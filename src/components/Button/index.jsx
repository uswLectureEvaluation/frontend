import React from 'react';
import * as Styled from './styled';

const Button = ({ children, onClick, color, id, disabled }) => (
  <Styled.Wrapper disabled={disabled} onClick={onClick} background={color} id={id}>
    {children}
  </Styled.Wrapper>
);

export default Button;
