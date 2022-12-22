import styled from 'styled-components';

export const Foot = styled.div`
  margin: 0 auto;
  background-color: rgb(237, 237, 237);
  display: flex;
  height: 170px;
  padding: 3rem;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  padding-left: ${(props) => props.left || '1rem'};
  padding-right: ${(props) => props.right || '0rem'};
  color: #222222;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
