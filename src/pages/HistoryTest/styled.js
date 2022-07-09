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
  font-family: 'Pretendard-SemiBold';
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

export const Targetelement = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
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
  font-family: 'Pretendard';
`;

export const NoticeWrap = styled.div`
  width: 100%;
  border: 1.5px solid #f1f1f1;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  margin-top: 2vh;
  display : flex;
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

export const Button = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 8px 0;
  border: none;
  padding-bottom: 1rem;
  background: #346cfd;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;

  @media only screen and (max-width: 480px) {
    margin-top: 5rem;
  }
`;

export const Professor = styled.div`
  display: flex;
  color: #222;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-left: 10px;
`;