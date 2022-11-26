import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  &#col {
    width: 35%;
    @media screen and (max-width: 550px) {
      width: 90%;
    }

`;
export const FlexBox = styled.div`
  width: 900px;
  padding-top: 40px;
`;

export const TextLink = styled.span`
  font-size: 20px;
  color: #a3a3a3;
  font-family: 'Pretendard-Medium';
  font-weight: 450;
  margin-left: 15px;
  &#selected {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;
