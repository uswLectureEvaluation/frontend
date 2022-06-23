import React, { useState, useEffect } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { myInfoApi } from '../../api/Api';

const MyInfo = () => {
  const navigate = useNavigate();
  const option = [
    {
      title: '이용 제한 내역',
      page: 'myinformation',
    },
    {
      title: '구매이력',
      page: 'historytest',
    },
    {
      title: '피드백 전송',
      page: 'myinformation',
    },
    {
      title: '문의하기',
      page: 'myinformation',
    },
    {
      title: '이용약관',
      page: 'myinformation',
    },
    {
      title: '개인정보 처리 방침',
      page: 'myinformation',
    },
    {
      title: '오픈소스 라이선스',
      page: 'myinformation',
    },
    {
      title: '비밀번호 변경',
      page: 'resetpassword',
    },
    {
      title: '회원 탈퇴',
      page: 'myinformation',
    },
  ];
  const [db, setData] = useState({
    data: [],
  });

  const [win, setWin] = useState(true);

  const showWin = () => {
    if (window.innerWidth <= 480) {
      setWin(false);
    } else {
      setWin(true);
    }
  };

  window.addEventListener('resize', showWin);

  useEffect(() => {
    showWin();
    myInfoApi().then((data) => setData(data));
  }, [win]);
  return win ? (
    <Styled.Container>
      <Styled.InfoWrapper>
        <Styled.InfoTitle>내 정보</Styled.InfoTitle>
      </Styled.InfoWrapper>
      <Styled.Wrapper id="top">
        <Styled.Content id="top">
          <Styled.Title>내 계정</Styled.Title>

          <Styled.FlexContainer>
            <Styled.OptionTitle id="my">로그인 아이디</Styled.OptionTitle>
            <Styled.FlexContainer>{db.loginId}</Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="my">학교 인증 메일</Styled.OptionTitle>
            <Styled.FlexContainer>{db.email}</Styled.FlexContainer>
          </Styled.FlexContainer>
        </Styled.Content>
        <Styled.Button onClick={() => navigate('/myinfodetail')} background="#346cfd">
          내가 쓴 글
        </Styled.Button>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Content>
          <Styled.TitleFlex>
            <Styled.Title>현재 보유 포인트</Styled.Title>
            <Styled.OptionPoint id="mypoint">{db.point}p</Styled.OptionPoint>
          </Styled.TitleFlex>

          <Styled.FlexContainer>
            <Styled.OptionTitle>작성한 강의평가</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color>{db.writtenEvaluation}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="plus">+{db.writtenEvaluation * 10}</Styled.OptionPoint>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle>작성한 시험정보</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color>{db.writtenExam}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="plus">+{db.writtenExam * 20}</Styled.OptionPoint>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle>시험정보 열람 횟수</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="p">{db.viewExam}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="minus">-{db.viewExam * 20}</Styled.OptionPoint>
          </Styled.FlexContainer>
        </Styled.Content>
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
          <br />

          <Styled.Title>포인트 획득</Styled.Title>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-강의평 작성:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="pp">+10P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-시험정보 공유:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="pp">+20P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-신고 보상:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="pp">+1P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>

          <br />
          <br />
          <br />
          <Styled.Title>포인트 차감</Styled.Title>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-시험정보 조회:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="ppp">-20P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="points">-강의평가/시험정보 삭제:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="ppp">-30P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
        </Styled.Content>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Content>
          <Styled.Title>이용 안내</Styled.Title>
          {option.map((i) => (
            <Styled.FlexContainer key={i.title}>
              <Styled.FlexContainer id="last" onClick={() => navigate(`/${i.page}`)}>
                {i.title}
              </Styled.FlexContainer>
            </Styled.FlexContainer>
          ))}
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Container>
  ) : (
    <Styled.Container>
      <Styled.InfoWrapper>
        <Styled.InfoTitle>내 정보</Styled.InfoTitle>
      </Styled.InfoWrapper>
      <Styled.Button onClick={() => navigate('/myinfodetail')} background="#346cfd">
        내가 쓴 글
      </Styled.Button>
      <Styled.Wrapper id="top">
        <Styled.Content id="top">
          <Styled.Title>내 계정</Styled.Title>

          <Styled.FlexContainer>
            <Styled.OptionTitle id="my">로그인 아이디</Styled.OptionTitle>
            <Styled.FlexContainer>{db.loginId}</Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="my">학교 인증 메일</Styled.OptionTitle>
            <Styled.FlexContainer>{db.email}</Styled.FlexContainer>
          </Styled.FlexContainer>
        </Styled.Content>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Content>
          <Styled.TitleFlex>
            <Styled.Title>현재 보유 포인트</Styled.Title>
            <Styled.OptionPoint id="mypoint">{db.point}p</Styled.OptionPoint>
          </Styled.TitleFlex>

          <Styled.FlexContainer>
            <Styled.OptionTitle>작성한 강의평가</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color>{db.writtenEvaluation}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="plus">+{db.writtenEvaluation * 10}</Styled.OptionPoint>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle>작성한 시험정보</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color>{db.writtenExam}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="plus">+{db.writtenExam * 20}</Styled.OptionPoint>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle>시험정보 열람 횟수</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="p">{db.viewExam}</Styled.Color>개
            </Styled.FlexContainer>
            <Styled.OptionPoint id="minus">-{db.viewExam * 20}</Styled.OptionPoint>
          </Styled.FlexContainer>
        </Styled.Content>
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
          <br />
          <Styled.Title>포인트 획득</Styled.Title>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-강의평 작성:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="pp">+10P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-시험정보 공유:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="pp">+20P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-신고 보상:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="pp">+1P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>

          <br />
          <br />
          <br />
          <Styled.Title>포인트 차감</Styled.Title>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="point">-시험정보 조회:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="ppp">-20P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
          <Styled.FlexContainer>
            <Styled.OptionTitle id="points">-강의평가/시험정보 삭제:</Styled.OptionTitle>
            <Styled.FlexContainer id="last">
              <Styled.Color id="ppp">-30P</Styled.Color>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
        </Styled.Content>
      </Styled.Wrapper>

      <Styled.Wrapper>
        <Styled.Content>
          <Styled.Title>이용 안내</Styled.Title>
          {option.map((i) => (
            <Styled.FlexContainer key={i.title}>
              <Styled.FlexContainer id="last" onClick={() => navigate(`${i.page}`)}>
                {i.title}
              </Styled.FlexContainer>
            </Styled.FlexContainer>
          ))}
        </Styled.Content>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default MyInfo;
