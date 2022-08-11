import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
`;

export const Color = styled.span`
  color: #336af8;
`;

export const Content = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;
  font-weight: bold;
  text-align: center;
  margin-top: 10rem;
`;

export const BtWidth = styled.div`
  margin: 0 auto;
  width: 30%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;
