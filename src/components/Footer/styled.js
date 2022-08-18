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

export const Use = styled.div`
  font-family: 'Pretendard-Light';
  padding-right: 1rem;
  color: #222222;

  &:hover {
    cursor: pointer;
  }
`;

export const Privacy = styled.div`
  font-family: 'Pretendard-Medium';
  padding-left: 1rem;
  color: #222222;

  &:hover {
    cursor: pointer;
  }
`;

export const Contact = styled.div`
  font-family: 'Pretendard-Light';
  padding-left: 2rem;
  color: #222222;

  &:hover {
    cursor: pointer;
  }
`;
