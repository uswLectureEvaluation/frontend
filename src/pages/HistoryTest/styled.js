import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-bottom: 25rem;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding-bottom: 25rem;
    margin: 0 auto;
  }
`;

export const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;
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
  margin-right: 1rem;
  font-size: 14px;
  color: #a3a3a3;
`;

export const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Professor = styled.div`
  display: flex;
  color: #222;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-left: 10px;
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    margin-bottom: 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MobileTitleWrapper = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;
