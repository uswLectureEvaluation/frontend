import React from 'react';
import * as Styled from './styled';
import { Positioner } from '../../components/Wrapper/styled'
import MyEvaluation from '../../components/MyEvaluation/'

const LectureInfo = () => {

    return (
        <Positioner>
            <Styled.GlobalStyle />
            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.TitleWrapper id='top'>
                        <div>
                            <Styled.TitleWrapper>
                                <Styled.Title>학문과 사고</Styled.Title>
                                <Styled.Professor>이다민 교수님</Styled.Professor>
                            </Styled.TitleWrapper>
                            <Styled.TitleWrapper>
                                <Styled.Option> 2020-1 </Styled.Option>
                                <Styled.Option> 2019-1 </Styled.Option>
                                <Styled.Option> 2018-1 </Styled.Option>
                            </Styled.TitleWrapper>
                        </div>
                        <Styled.Option id='type'>
                            기교
                        </Styled.Option>
                    </Styled.TitleWrapper>
                    <div>
                        <Styled.IndexWrapper id='first'>
                            <Styled.Index>
                                <Styled.IndexGroup>꿀강 지수</Styled.IndexGroup>
                                <Styled.IndexGroup><Styled.Color style={{ color: "#f1c40f" }}>3.5</Styled.Color>/5</Styled.IndexGroup>
                            </Styled.Index>
                            <Styled.Index>
                                <Styled.IndexGroup>조모임</Styled.IndexGroup>
                                <Styled.IndexGroup><Styled.Color style={{ color: "#9e9e9e" }}>없음</Styled.Color></Styled.IndexGroup>
                            </Styled.Index>
                        </Styled.IndexWrapper>

                        <Styled.IndexWrapper>
                            <Styled.Index>
                                <Styled.IndexGroup>배움 지수</Styled.IndexGroup>
                                <Styled.IndexGroup><Styled.Color style={{ color: "#e74c3c" }}>3.5</Styled.Color>/5</Styled.IndexGroup>
                            </Styled.Index>
                            <Styled.Index>
                                <Styled.IndexGroup>과제</Styled.IndexGroup>
                                <Styled.IndexGroup><Styled.Color style={{ color: "#e74c3c" }}>많음</Styled.Color></Styled.IndexGroup>
                            </Styled.Index>
                        </Styled.IndexWrapper>
                        <Styled.IndexWrapper>
                            <Styled.Index>
                                <Styled.IndexGroup>만족도</Styled.IndexGroup>
                                <Styled.IndexGroup><Styled.Color style={{ color: "#2980b9" }}>3.5</Styled.Color>/5</Styled.IndexGroup>
                            </Styled.Index>
                            <Styled.Index>
                                <Styled.IndexGroup>학점비율</Styled.IndexGroup>
                                <Styled.IndexGroup><Styled.Color style={{ color: "#e74c3c" }}>까다로움</Styled.Color></Styled.IndexGroup>
                            </Styled.Index>
                        </Styled.IndexWrapper>

                    </div>
                </Styled.Content>

                <Styled.Content>
                    <Styled.TitleWrapper id='top'>
                        <Styled.TitleWrapper>
                            <Styled.Title id='sub'>강의 평가</Styled.Title>
                            <Styled.Title id='sub' style={{ color: 'gray', paddingLeft: '10px' }}>시험 정보</Styled.Title>
                        </Styled.TitleWrapper>
                        <Styled.Option id='type'>강의평가 쓰기</Styled.Option>
                    </Styled.TitleWrapper>
                    <MyEvaluation />
                </Styled.Content>
            </Styled.Wrapper>
        </Positioner>
    )
}


export default LectureInfo;