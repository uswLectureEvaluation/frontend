import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding-bottom: 25rem;
  margin: 0 auto;
`;

export const AppTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1.5px solid #f1f1f1;
  border-radius: 15px;
  padding: 1.5rem 1.5rem;
  margin-top: 2vh;
`;

export const Img = styled.img`
  margin-right: 6px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.7rem;
  padding-bottom: 0.7rem;
`;
export const Date = styled.div`
  display: flex;
  font-size: 0.9rem;
  padding-bottom: 3rem;
  color: #a3a3a3;
`;

export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

export const Back = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;
