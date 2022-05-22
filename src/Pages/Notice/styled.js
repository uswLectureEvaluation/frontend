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

 .Target-Element {
  height: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
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
