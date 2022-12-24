import * as Styled from '../../pages/MyInfo/styled';

const UserAccount = ({ loginId, email, isLogin }) => {
  return (
    <Styled.Content id="top">
      <div style={{ filter: !isLogin ? 'blur(6px)' : 'none' }}>
        <Styled.Title id="top">내 계정</Styled.Title>

        <Styled.FlexContainer>
          <Styled.OptionTitle id="my">로그인 아이디</Styled.OptionTitle>
          <Styled.FlexContainer>{loginId}</Styled.FlexContainer>
        </Styled.FlexContainer>
        <Styled.FlexContainer>
          <Styled.OptionTitle id="my">학교 인증 메일</Styled.OptionTitle>
          <Styled.FlexContainer>{email}</Styled.FlexContainer>
        </Styled.FlexContainer>
      </div>
      {!isLogin ? (
        <Styled.FlexContainer id="needLogin">
          내가 쓴 글과 포인트를
          <br />
          확인하려면 로그인하세요
        </Styled.FlexContainer>
      ) : null}
    </Styled.Content>
  );
};

export default UserAccount;
