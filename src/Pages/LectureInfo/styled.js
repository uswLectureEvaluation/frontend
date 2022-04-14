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
  font-weight: bold;
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
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 4rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 20px;
  height: 50px;
  border-radius: 20px;
  border: 1.5px solid #346cfd;
  margin: 1.5rem 0;
  background-image: url('img/icon_search_24.svg');
  background-repeat: no-repeat;
  background-position: 98%;

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  margin: 10px 0;

  &#top {
    padding: 1rem 2rem;
    border: 1px solid rgb(224, 224, 224);
  }
`;

export const Color = styled.div`
  display: flex;
  color: black;
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
    margin-top: 2rem;
    margin-left: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 1000;
  text-align: center;

  &#sub {
    font-size: 1.5rem;
  }
`;

export const MenuTitle = styled.li`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Pretendard-SemiBold';
  display: flex;
  color: lightgray;
  padding-right: 1rem;

  &:hover {
    cursor: pointer;
  }
  &#${({ check }) => check} {
    font-weight: bold;
    color: black;
  }
`;

export const Professor = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const Option = styled.div`
  border-radius: 12px;
  background-color: rgb(224, 224, 224);
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  margin: 0 0.5rem;
  /* font-weight: bold; */

  &#type {
    height: 25px;
  }
`;

export const Writing = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export const OptionTitle = styled.div`
  display: flex;
  color: #a3a3a3;
  align-items: flex-end;
  width: 80px;
`;

export const FlexContainer = styled.div`
  display: flex;
  width: 45%;
  &#col {
    flex-direction: column;
  }
`;

export const WidthContainer = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 10px;
`;
