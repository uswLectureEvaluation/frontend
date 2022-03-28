import React, { useState } from 'react';
import * as Styled from './styled';
import MyEvaluation from '../../components/MyEvaluation'
import MainList from '../../components/MainList';
import TestInfo from '../../components/TestInfo'
import { searchApi } from '../../api/Api'
import { useNavigate } from 'react-router-dom'

const checkList = {
    0: <MainList lecture='lectureHoneyAvg' />,
    1: <TestInfo />,
}

const LectureInfo = () => {
    let navigate = useNavigate();
    const [search, setSearch] = useState('');
    const menu = ['강의 평가(N)', '시험 정보(M)'];
    const menuList = menu.map((i, index) => <Styled.MenuTitle onClick={()=>clickFunc(index)}>{i}</Styled.MenuTitle>);
    
    const [menuCheck, setMenuCheck] = useState(0);

    const clickFunc = (index) => {
        setMenuCheck(index);
    };

        let setData;


    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onClick = () => {
        searchApi(setData, search)
        navigate(`/search`)
    }

    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            onClick()
        }
    }

    return (
        <Styled.Container>
            <Styled.SearchWrapper>
                <Styled.SearchTitle>검색 결과 (N)</Styled.SearchTitle>
                <Styled.SearchInput
                    onChange={onChange}
                    placeholder="강의명, 교수명으로 원하는 강의평가를 찾아보세요"
                    onKeyPress={onKeypress}
                />
            </Styled.SearchWrapper>

            <Styled.Wrapper>
                <Styled.Content>
                    <Styled.TitleWrapper id='top'>
                        <div>
                            <Styled.TitleWrapper>
                                <Styled.Title>학문과 사고</Styled.Title>
                                <Styled.Professor>이다민</Styled.Professor>
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
                    <Styled.FlexContainer id='col'>
                                <Styled.WidthContainer>
                                    <Styled.FlexContainer>
                                        <Styled.OptionTitle>꿀강지수</Styled.OptionTitle>
                                        <Styled.FlexContainer><Styled.Color style={{ color: "#3DD3C4"}}>3.0</Styled.Color>/5</Styled.FlexContainer>
                                    </Styled.FlexContainer>
                                    <Styled.FlexContainer>
                                        <Styled.OptionTitle>조모임</Styled.OptionTitle>
                                        <Styled.FlexContainer>없음</Styled.FlexContainer>
                                    </Styled.FlexContainer>
                                </Styled.WidthContainer>
                                <Styled.WidthContainer>
                                    <Styled.FlexContainer>
                                        <Styled.OptionTitle>배움지수</Styled.OptionTitle>
                                        <Styled.FlexContainer><Styled.Color style={{ color: "#3DD3C4"}}>3.0</Styled.Color>/5</Styled.FlexContainer>
                                    </Styled.FlexContainer>
                                    <Styled.FlexContainer>
                                        <Styled.OptionTitle>과제</Styled.OptionTitle>
                                        <Styled.FlexContainer><Styled.Color>많음</Styled.Color></Styled.FlexContainer>
                                    </Styled.FlexContainer>
                                </Styled.WidthContainer>
                                <Styled.WidthContainer>
                                    <Styled.FlexContainer>
                                        <Styled.OptionTitle>만족도</Styled.OptionTitle>
                                        <Styled.FlexContainer><Styled.Color style={{ color: "#3DD3C4"}}>3.0</Styled.Color>/5</Styled.FlexContainer>
                                    </Styled.FlexContainer>
                                    <Styled.FlexContainer>
                                        <Styled.OptionTitle>학점비율</Styled.OptionTitle>
                                        <Styled.FlexContainer><Styled.Color>까다로움</Styled.Color></Styled.FlexContainer>
                                    </Styled.FlexContainer>
                                </Styled.WidthContainer>
                            </Styled.FlexContainer>
                </Styled.Content>
                
                <Styled.Content>
                    <Styled.TitleWrapper id='top'>
                        <Styled.TitleWrapper>
                            {menuList}
                        </Styled.TitleWrapper>
                        <Styled.Writing src='img/btn_write.svg'/>
                    </Styled.TitleWrapper>
                    {checkList[menuCheck]}
                </Styled.Content>
            </Styled.Wrapper>
        </Styled.Container>
    )
}


export default LectureInfo;