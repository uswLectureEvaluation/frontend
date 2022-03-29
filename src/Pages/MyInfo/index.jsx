import React, { useState, useEffect } from 'react'
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom'
import { myInfoApi } from '../../api/Api';

const MyInfo = () => {
    const navigate = useNavigate();
    const option = ['피드백 전송', '문의하기', '이용약관', '개인정보 처리 방침',
'오픈소스 라이선스', '비밀번호 변경', '회원 탈퇴']
    const [db, setData] = useState({
        data: []
    })

    useEffect(() => {
        myInfoApi(setData)
        }, []
    )
    console.log(db)
    return (
        <Styled.Container>
            <Styled.InfoWrapper>
                <Styled.InfoTitle>내 정보</Styled.InfoTitle>
            </Styled.InfoWrapper>
            <Styled.Wrapper id='top'>
                <Styled.Content id='top'>
                    <Styled.Title>내 계정</Styled.Title>

                    
                    <Styled.FlexContainer>
                        <Styled.OptionTitle id='my'>로그인 아이디</Styled.OptionTitle>
                        <Styled.FlexContainer>{db.loginId}</Styled.FlexContainer>
                    </Styled.FlexContainer>
                    <Styled.FlexContainer>
                        <Styled.OptionTitle id='my'>학교 인증 메일</Styled.OptionTitle>
                        <Styled.FlexContainer>{db.email}</Styled.FlexContainer>
                    </Styled.FlexContainer>
                </Styled.Content>
                <Styled.Button onClick={()=>navigate('/myinfodetail')} background='#3DD3C4' >
                    내가 쓴 글
                </Styled.Button>
            </Styled.Wrapper>

            <Styled.Wrapper>
                <Styled.Content>
                <Styled.TitleFlex>
                    <Styled.Title>현재 보유 포인트</Styled.Title>
                    <Styled.OptionPoint id='mypoint'>{db.point}p</Styled.OptionPoint>
                </Styled.TitleFlex>
                    
                    <Styled.FlexContainer>
                        <Styled.OptionTitle>작성한 강의평가</Styled.OptionTitle>
                        <Styled.FlexContainer id='last'><Styled.Color>{db.writtenLecture}</Styled.Color>개</Styled.FlexContainer>
                        <Styled.OptionPoint id='plus'>+100</Styled.OptionPoint>
                    </Styled.FlexContainer>
                    <Styled.FlexContainer>
                        <Styled.OptionTitle>작성한 시험정보</Styled.OptionTitle>
                        <Styled.FlexContainer id='last'><Styled.Color>{db.writtenExam}</Styled.Color>개</Styled.FlexContainer>
                        <Styled.OptionPoint id='plus'>+40</Styled.OptionPoint>
                    </Styled.FlexContainer>
                    <Styled.FlexContainer>
                        <Styled.OptionTitle>시험정보 열람 횟수</Styled.OptionTitle>
                        <Styled.FlexContainer id='last'><Styled.Color id='p'>{db.viewExam}</Styled.Color>개</Styled.FlexContainer>
                        <Styled.OptionPoint id='minus'>-40</Styled.OptionPoint>
                    </Styled.FlexContainer>
                </Styled.Content>
            </Styled.Wrapper>

            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.Title>포인트 제도 안내</Styled.Title>
                    <div style={{height:"20vh"}}></div>

                </Styled.Content>
            </Styled.Wrapper>


            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.Title>이용 안내</Styled.Title>
                    {
                        option.map((i)=> (
                            <Styled.FlexContainer>
                                <Styled.FlexContainer id='last'>{i}</Styled.FlexContainer>
                            </Styled.FlexContainer>
                        ))
                    }
                </Styled.Content>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default MyInfo;