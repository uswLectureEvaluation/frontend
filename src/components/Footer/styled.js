import styled from 'styled-components';

export const FootWrapper = styled.footer`
  padding-top: 100px;
`;

export const Foot = styled.div`
  margin: 0 auto;
  background-color: rgb(237, 237, 237);
  display: flex;
  gap: 1.4rem;
  height: 170px;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.div`
  color: #222222;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
`;
