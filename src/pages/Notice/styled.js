import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 5rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1rem;
  margin-right: 0.7rem;
`;

export const Option = styled.div`
  border-radius: 10px;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: #a3a3a3;
  font-family: 'Pretendard-Light';
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

export const NoNotice = styled.div`
  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
`;
