import * as Styled from './styled';

const Button = ({ children, onClick, color, id, disabled, width }) => (
  <Styled.Wrapper width={width} disabled={disabled} onClick={onClick} background={color} id={id}>
    {children}
  </Styled.Wrapper>
);

export default Button;
