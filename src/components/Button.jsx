import styled from 'styled-components';

const Button = ({ children, onClick, color, id, disabled, width }) => (
  <Wrapper width={width} disabled={disabled} onClick={onClick} background={color} id={id}>
    {children}
  </Wrapper>
);

export default Button;

const Wrapper = styled.button`
  margin: 0;
  width: ${({ width }) => width || '100%'};
  padding: 0 1rem;
  padding-top: 0.6rem;
  border: none;
  padding-bottom: 0.5rem;
  background: ${({ background }) => background};
  color: white;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
  &:disabled {
    background-color: rgba(170, 170, 170);
    cursor: auto;
  }
  &#email {
    width: 40%;
    margin: 16px 0 8px 8px;
    font-size: 0.9rem;
  }
  &#emailcheck {
    width: 40%;
    margin: 16px 0 8px 8px;
    font-size: 0.9rem;
    background-color: skyblue;
  }
`;
