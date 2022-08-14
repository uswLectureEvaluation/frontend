import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
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

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 1000;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const SearchResultMenu = styled.div`
  display: flex;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 5px 16px;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #336af8;
    color: white;
  }
  &#${({ check }) => check} {
    background-color: #336af8;
    color: white;
  }

  &#sort {
    border: none;
    margin-left: 0;
    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }
  &:first-child {
    cursor: context-menu;
  }

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    font-size: 1rem;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    padding: 5px 5px;
    cursor: pointer;
  }
`;

export const MyEvaluationWrapper = styled.div`
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  width: 100%;
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
  font-family: 'Pretendard-Regular';

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 123%;
    transform: scale(0.8);
  }
`;

export const HeadSelection = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-between;
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  font-family: Pretendard-Medium;
`;

export const Color = styled.span`
  color: #336af8;
  margin-left: 6px;
  text-align: center;
`;
