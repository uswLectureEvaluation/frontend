import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  &#top {
    display: flex;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media only screen and (max-width: 960px) {
    width: 90%;
  }
`;
export const Content = styled.div`
  border-radius: 10px;
  border: 1px solid rgb(224, 224, 224);
  padding: 1rem 1.8rem;
  margin: 10px 0;

  &#top {
    width: 100%;
    margin-right: 2rem;
  }
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

export const TitleFlex = styled.div`
  display: flex;
  color: #222222;
`;

export const OptionTitle = styled.div`
  display: flex;
  width: 160px;

  &#my {
    color: #222222;
  }

  &#text {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const OptionPoint = styled.div`
  display: flex;
  width: 36px;
  font-weight: bold;
  justify-content: flex-end;
  margin-left: auto;
  color: #346cfd;
  &#minus {
    color: #6200ee;
  }
  &#mypoint {
    font-size: 1.2rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  color: #a3a3a3;
  &#col {
    flex-direction: column;
  }
  &#last {
    color: #222222;
    align-items: center;
  }
`;

export const Button = styled.button`
  margin: 10px 0;
  width: 30%;
  padding: 0 1rem;
  border: none;
  background: ${(props) => props.background};
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  @media only screen and (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
`;

export const InfoTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 4rem;
  padding-bottom: 1rem;
`;

export const Color = styled.span`
  color: #346cfd;
  font-weight: bold;
  font-size: 1.2rem;
  &#p {
    color: #6200ee;
  }
`;
