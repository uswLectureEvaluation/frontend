import React, { useState, useEffect } from "react"
import { CssBaseline, Container } from "@material-ui/core"
import Modal from "react-modal"
import { examPostApi } from "../../api/Api"
import * as Styled from "./styled"

const SearchTestList = (props) => {
    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            {props.db.map((v, i) => (
                <Subject
                    content={v.content}
                    examDifficulty={v.examDifficulty}
                    examInfo={v.examInfo}
                    id={v.id}
                    semester={v.semester}
                />
            ))}
        </Container>
    )
}

export const Subject = (props) => {
    const examDifficultySet = props.examDifficulty

    const examDifficulty = {
        "매우 쉬움": <Styled.DataColor>매우 쉬움</Styled.DataColor>,
        쉬움: <Styled.DataColor>쉬움</Styled.DataColor>,
        보통: <Styled.DataColor id="cyan">보통</Styled.DataColor>,
        어려움: <Styled.DataColor id="purple">어려움</Styled.DataColor>,
        "매우 어려움": (
            <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>
        ),
    }


    return (
        <div style={{ marginTop: "15px" }}>
            <Styled.LectureWrapper>
                <Styled.MarginTop id="top">
                    <div style={{ marginBottom: "10px" }}>
                        <Styled.YearText>{props.semester}</Styled.YearText>
                        <Styled.DeleteButton
                            style={{ float: "right" }}
                        >
                            신고
                        </Styled.DeleteButton>
                    </div>
                    <Styled.TitleWrapper>
                        <Styled.TitleWrapper>
                            <Styled.Professor>
                            </Styled.Professor>
                        </Styled.TitleWrapper>
                    </Styled.TitleWrapper>
                    <Styled.TitleWrapper>
                        <Styled.TitleWrapper>
                            <Styled.ExamDetail id="top">
                                시험내용
                            </Styled.ExamDetail>
                            <Styled.DataColor id="cyan">
                                {props.examInfo}
                            </Styled.DataColor>
                        </Styled.TitleWrapper>
                    </Styled.TitleWrapper>
                    <Styled.TitleWrapper>
                        <Styled.TitleWrapper>
                            <Styled.ExamDetail id="bottom">
                                난이도
                            </Styled.ExamDetail>
                            <Styled.ExamDetail id="data">
                                {examDifficulty[examDifficultySet]}
                            </Styled.ExamDetail>
                        </Styled.TitleWrapper>
                    </Styled.TitleWrapper>
                    <Styled.TitleWrapper>
                        <Styled.TitleWrapper>
                            <Styled.ExamDetail id="data">
                                {props.content}
                            </Styled.ExamDetail>
                        </Styled.TitleWrapper>
                    </Styled.TitleWrapper>
                </Styled.MarginTop>
            </Styled.LectureWrapper>
        </div>
    )
}

export default SearchTestList
