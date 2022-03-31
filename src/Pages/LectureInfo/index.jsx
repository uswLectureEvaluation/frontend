import React, { useState, useEffect } from "react"
import * as Styled from "./styled"
import MainList from "../../components/MainList"
import TestInfo from "../../components/TestInfo"
import { searchApi, searchLectureApi } from "../../api/Api"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const checkList = {
    0: <MainList lecture="lectureHoneyAvg" />,
    1: <TestInfo />,
}

const LectureInfo = () => {
    const selectId = useSelector((state) => state.selectId.value)
    let navigate = useNavigate()
    const [search, setSearch] = useState("")
    const menu = ["강의 평가(N)", "시험 정보(M)"]
    const menuList = menu.map((i, index) => (
        <Styled.MenuTitle onClick={() => clickFunc(index)}>
            {i}
        </Styled.MenuTitle>
    ))

    const [menuCheck, setMenuCheck] = useState(0)

    const clickFunc = (index) => {
        setMenuCheck(index)
    }

    console.log("여기", selectId)
    let setData

    const onChange = (e) => {
        setSearch(e.currentTarget.value)
    }

    const onKeypress = (e) => {
        if (e.key === "Enter") {
            searchApi(setData, search)
            navigate(`/search`)
        }
    }
    const [db, lectureData] = useState({
        data: [],
    })

    useEffect(() => {
        searchLectureApi(lectureData, selectId)
    }, [selectId])

    const teamSet = db.data.lectureTeamAvg
    const homeworkSet = db.data.lectureHomeworkAvg
    const difficultySet = db.data.lectureDifficultyAvg
    const team = {
        0: <Styled.DataColor>없음</Styled.DataColor>,
        1: <Styled.DataColor id="purple">있음</Styled.DataColor>,
    }
    const homework = {
        0: <Styled.DataColor>없음</Styled.DataColor>,
        1: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
        2: <Styled.DataColor id="purple">많음</Styled.DataColor>,
    }
    const difficulty = {
        0: <Styled.DataColor>까다로움</Styled.DataColor>,
        1: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
        2: <Styled.DataColor id="purple">잘줌</Styled.DataColor>,
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
                    <Styled.TitleWrapper id="top">
                        <div>
                            <Styled.TitleWrapper>
                                <Styled.Title>
                                    {db.data.lectureName}
                                </Styled.Title>
                                <Styled.Professor>
                                    {db.data.professor}
                                </Styled.Professor>
                            </Styled.TitleWrapper>
                            <Styled.TitleWrapper>
                                <Styled.Option>
                                    {" "}
                                    {db.data.semester}{" "}
                                </Styled.Option>
                            </Styled.TitleWrapper>
                        </div>
                        <Styled.Option id="type">
                            {db.data.lectureType}
                        </Styled.Option>
                    </Styled.TitleWrapper>
                    <Styled.FlexContainer id="col">
                        <Styled.WidthContainer>
                            <Styled.FlexContainer>
                                <Styled.OptionTitle>
                                    꿀강지수
                                </Styled.OptionTitle>
                                <Styled.FlexContainer>
                                    <Styled.Color
                                        style={{
                                            color: "#3DD3C4",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {db.data.lectureHoneyAvg}
                                    </Styled.Color>
                                    /5
                                </Styled.FlexContainer>
                            </Styled.FlexContainer>
                            <Styled.FlexContainer>
                                <Styled.OptionTitle>조모임</Styled.OptionTitle>
                                <Styled.FlexContainer>
                                    {team[teamSet]}
                                </Styled.FlexContainer>
                            </Styled.FlexContainer>
                        </Styled.WidthContainer>
                        <Styled.WidthContainer>
                            <Styled.FlexContainer>
                                <Styled.OptionTitle>
                                    배움지수
                                </Styled.OptionTitle>
                                <Styled.FlexContainer>
                                    <Styled.Color
                                        style={{
                                            color: "#3DD3C4",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {db.data.lectureLearningAvg}
                                    </Styled.Color>
                                    /5
                                </Styled.FlexContainer>
                            </Styled.FlexContainer>
                            <Styled.FlexContainer>
                                <Styled.OptionTitle>과제</Styled.OptionTitle>
                                <Styled.FlexContainer>
                                    <Styled.Color style={{ color: "#6200ee" }}>
                                        {homework[homeworkSet]}
                                    </Styled.Color>
                                </Styled.FlexContainer>
                            </Styled.FlexContainer>
                        </Styled.WidthContainer>
                        <Styled.WidthContainer>
                            <Styled.FlexContainer>
                                <Styled.OptionTitle>만족도</Styled.OptionTitle>
                                <Styled.FlexContainer>
                                    <Styled.Color
                                        style={{
                                            color: "#3DD3C4",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {db.data.lectureSatisfactionAvg}
                                    </Styled.Color>
                                    /5
                                </Styled.FlexContainer>
                            </Styled.FlexContainer>
                            <Styled.FlexContainer>
                                <Styled.OptionTitle>학점</Styled.OptionTitle>
                                <Styled.FlexContainer>
                                    <Styled.Color style={{ color: "#6200ee" }}>
                                        {difficulty[difficultySet]}
                                    </Styled.Color>
                                </Styled.FlexContainer>
                            </Styled.FlexContainer>
                        </Styled.WidthContainer>
                    </Styled.FlexContainer>
                </Styled.Content>

                <Styled.Content>
                    <Styled.TitleWrapper id="top">
                        <Styled.TitleWrapper>{menuList}</Styled.TitleWrapper>
                        <Styled.Writing src="img/btn_write.svg" />
                    </Styled.TitleWrapper>
                    {checkList[menuCheck]}
                </Styled.Content>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default LectureInfo
