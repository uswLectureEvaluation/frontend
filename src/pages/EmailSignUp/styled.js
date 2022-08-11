import styled from 'styled-components';

export const Title = styled.div`
  font-size: 4vh;
  font-weight: 1000;
  margin: 3rem 0;
  text-align: center;
  font-family: 'Pretendard-Medium';
  font-weight: 700;
`;

export const Img = styled.div`
  text-align: center;
`;

export const Content = styled.div`
  text-align: center;
  margin: 4vh 0;
  font-weight: bold;
`;

export const Color = styled.span`
  color: #4b10f2;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  /* PC (해상도 1024px)*/
  @media all and (min-width: 1024px) {
    width: 500px;
  } /* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 400px;
  } /* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/

  @media all and (max-width: 767px) {
    width: 300px;
  }
`;
