import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const FlexBox = styled.div`
  width: 900px;
  padding-top: 40px;
`;

export const TextLink = styled.span`
  font-size: 20px;
  color: #a3a3a3;
  font-family: Pretendard;
  font-weight: 450;
  margin-left: 15px;
  &#selected {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;
