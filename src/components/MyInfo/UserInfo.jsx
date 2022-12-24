import * as Styled from '../../pages/MyInfo/styled';
import { useNavigate } from 'react-router-dom';
import { isLoginStorage } from '../../utils/loginStorage';
import UserAccount from './UserAccount';
import { fakeUserInfo } from '../placeholderData';
import UserPoint from './UserPoint';

const UserInfo = ({ my }) => {
  const navigate = useNavigate();
  const isLogin = isLoginStorage();
  const option = [
    {
      title: '이용 제한 내역',
      page: 'banreason',
    },
    {
      title: '구매이력',
      page: 'historytest',
    },
    {
      title: '비밀번호 변경',
      page: 'resetpassword',
    },
    {
      title: '회원 탈퇴',
      page: 'exit',
    },
  ];
  const urlOption = [
    {
      title: '피드백 전송',
      page: 'https://forms.gle/tZByKoN6rJCysvNz6',
    },
    {
      title: '문의하기',
      page: 'email',
    },
    {
      title: '이용약관',
      page: 'https://sites.google.com/view/suwiki-policy-terms/',
    },
    {
      title: '개인정보 처리 방침',
      page: 'https://sites.google.com/view/suwiki-policy-privacy',
    },
    {
      title: '오픈소스 라이선스',
      page: '',
    },
  ];
  const handleNavigate = () => {
    isLogin ? navigate('/myposting') : navigate('/login');
  };
  return (
    <Styled.Container>
      <Styled.InfoWrapper>
        <Styled.InfoTitle>내 정보</Styled.InfoTitle>
      </Styled.InfoWrapper>

      <Styled.Wrapper id="top">
        <Styled.Button id="mobile" onClick={() => navigate('/myposting')} background="#336af8">
          {isLogin ? '내가 쓴 글' : '로그인하기'}
        </Styled.Button>
        {!isLogin ? (
          <UserAccount
            isLogin={isLogin}
            loginId={fakeUserInfo.blurLoginId}
            email={fakeUserInfo.blurEmail}
          />
        ) : (
          <UserAccount isLogin={isLogin} loginId={my.loginId} email={my.email} />
        )}

        <Styled.Button id="pc" onClick={handleNavigate} background="#336af8">
          {isLogin ? '내가 쓴 글' : '로그인하기'}
        </Styled.Button>
      </Styled.Wrapper>

      <Styled.Wrapper>
        {!isLogin ? (
          <UserPoint my={fakeUserInfo} isLogin={isLogin} />
        ) : (
          <UserPoint my={my} isLogin={isLogin} />
        )}
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Content>
          <Styled.Title>포인트 제도 안내</Styled.Title>
          <Styled.OptionTitle id="text">
            - 포인트는 강의평가 서비스 내에서만 이용되는 제도입니다.
            <br />- 다른 계정으로 학교 인증 시 해당 계정으로 포인트가 합산 되며, 기존 계정의
            포인트는 초기화 됩니다.
            <br />- 포인트 획득을 위해 허위/중복/성의없는 정보를 작성할 경우, 서비스 이용이 영구
            제한될 수 있습니다.
            <br />- 허위 신고를 남용하는 이용자 또한 제재가 가해질 수 있습니다.
          </Styled.OptionTitle>
          <br />
          <br />

          <Styled.Title>포인트 획득</Styled.Title>
          <Styled.FlexPointContainer>
            -강의평 작성:
            <Styled.Color id="pp">+10P</Styled.Color>
          </Styled.FlexPointContainer>
          <Styled.FlexPointContainer>
            -시험정보 공유:
            <Styled.Color id="pp">+20P</Styled.Color>
          </Styled.FlexPointContainer>
          <Styled.FlexPointContainer>
            -신고 보상:
            <Styled.Color id="pp">+1P</Styled.Color>
          </Styled.FlexPointContainer>

          <br />
          <br />
          <Styled.Title>포인트 차감</Styled.Title>
          <Styled.FlexPointContainer>
            -시험정보 조회:
            <Styled.Color id="ppp">-20P</Styled.Color>
          </Styled.FlexPointContainer>
          <Styled.FlexPointContainer>
            -강의평가/시험정보 삭제:
            <Styled.Color id="ppp">-30P</Styled.Color>
          </Styled.FlexPointContainer>
        </Styled.Content>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.Content>
          <Styled.Title>이용 안내</Styled.Title>
          {isLogin
            ? option.slice(0, 2).map((i) => (
                <Styled.FlexContainer id="use" key={i.title}>
                  <Styled.FlexContainer id="last" onClick={() => navigate(`/${i.page}`)}>
                    {i.title}
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
              ))
            : null}
          {urlOption.map((i) => (
            <Styled.FlexContainer id="use" key={i.title}>
              <Styled.FlexContainer
                id="last"
                onClick={() => {
                  i.page === 'email'
                    ? (window.location = 'mailto:suwikiask@gmail.com')
                    : window.open(i.page);
                }}
              >
                {i.title}
              </Styled.FlexContainer>
            </Styled.FlexContainer>
          ))}
          {isLogin
            ? option.slice(2, 4).map((i) => (
                <Styled.FlexContainer id="use" key={i.title}>
                  <Styled.FlexContainer id="last" onClick={() => navigate(`/${i.page}`)}>
                    {i.title}
                  </Styled.FlexContainer>
                </Styled.FlexContainer>
              ))
            : null}
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default UserInfo;
