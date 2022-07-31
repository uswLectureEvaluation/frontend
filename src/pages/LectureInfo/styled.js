import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;
export const DataColor = styled.div`
  &#cyan {
    color: #346cfd;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  font-family: 'Pretendard';
  padding-bottom: 25rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  margin-right: auto;
  font-family: 'Pretendard-SemiBold';
  padding-top: 4rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.5px solid #000000;
  margin: 1.5rem 0;
  background-image: url('img/icon_search_24.svg');
  background-repeat: no-repeat;
  background-position: 99%;
  
  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 123%;
    transform: scale(0.8);

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  margin: 10px 0;
  margin-bottom: 3rem;

  &#top {
    padding: 1rem 2rem;
    border: 1px solid rgb(224, 224, 224);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Color = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
`;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: flex-end;

  &#top {
    justify-content: space-between;
    align-items: flex-start;
  }
  &#bottom {
    margin-top: 1rem;
  }
`;
export const SubWrapper = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  &#sub {
    font-size: 1.5rem;
  }
`;

export const MenuTitle = styled.li`
  font-size: 16px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: Pretendard;
  display: flex;
  color: lightgray;
  padding-right: 1rem;

  &:hover {
    cursor: pointer;
  }
  &#${({ check }) => check} {
    font-weight: 500;
    color: black;
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
`;

export const Option = styled.div`
  border-radius: 12px;
  background-color: #eeeeee;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 4.5px 12px;
  font-size: 14px;
  &#type {
    height: 25px;
    margin-top: 0px;
  }
  &#semester {
    margin-right: 8px;
  }
`;

export const Writing = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const OptionTitle = styled.div`
  display: flex;
  color: #222222;
  align-items: flex-end;
  margin-left: 5px;
  width: 80px;
  font-size: 14px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  color: #a3a3a3;
  width: 45%;
  &#col {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const WidthContainer = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 10px;
  margin-left: 0px;
`;
