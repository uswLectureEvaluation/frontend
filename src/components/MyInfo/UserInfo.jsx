import * as Styled from '../../pages/MyInfo/styled';
import { useNavigate } from 'react-router-dom';

const UserInfo = ({ my }) => {
  const navigate = useNavigate();

  return (
    <>
      <Styled.Wrapper id="top">
        <Styled.Button id="mobile" onClick={() => navigate('/myposting')} background="#336af8">
          내가 쓴 글
        </Styled.Button>
        <Styled.Content id="top">
          <Styled.Title id="top">내 계정</Styled.Title>

          <Styled.FlexContainer>
            <Styled.OptionTitle id="my">로그인 아이디</Styled.OptionTitle>
            <Styled.FlexContainer>{my.loginId}</Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="my">학교 인증 메일</Styled.OptionTitle>
            <Styled.FlexContainer>{my.email}</Styled.FlexContainer>
          </Styled.FlexContainer>
        </Styled.Content>
        <Styled.Button id="pc" onClick={() => navigate('/myposting')} background="#336af8">
          내가 쓴 글
        </Styled.Button>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Content>
          <Styled.TitleFlex>
            <Styled.Title id="top">현재 보유 포인트</Styled.Title>
            <Styled.OptionPoint id="mypoint">{my.point ?? '0'}p</Styled.OptionPoint>
          </Styled.TitleFlex>

          <Styled.FlexContainer>
            <Styled.OptionTitle>작성한 강의평가</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color>{my.writtenEvaluation ?? '0'}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="plus">+{(my.writtenEvaluation ?? '0') * 10}</Styled.OptionPoint>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle>작성한 시험정보</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color>{my.writtenExam ?? '0'}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="plus">+{(my.writtenExam ?? '0') * 20}</Styled.OptionPoint>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle>시험정보 열람 횟수</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="p">{my.viewExam ?? '0'}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="minus">-{(my.viewExam ?? '0') * 20}</Styled.OptionPoint>
          </Styled.FlexContainer>
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};

export default UserInfo;
