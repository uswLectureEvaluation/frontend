import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.7rem;
`;

export const Option = styled.div`
  border-radius: 10px;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: gray;
`;

export const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;

  &:hover {
    cursor: pointer;
  }
`;
