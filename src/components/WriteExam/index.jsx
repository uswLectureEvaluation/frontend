import React, { useState, useEffect } from "react"
import {
    SubjectText,
    SubjectDetail,
    EvaluationInput,
    EditButton,
    ModalLine,
    CancelButton,
} from "./styled"
import { CssBaseline, Grid, Box, Container } from "@material-ui/core"
import { examWriteApi } from "../../api/Api"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"

const WriteExam = (props) => {
    const [db, setData] = useState({
        data: [],
    })
    const [semester, setSemester] = useState("") //학기
    const [examDifficulty, setDifficulty] = useState("") //난이도
    const [content, setContent] = useState("") //글쓰기
    const [exam, setExamInfo] = useState([]) //시험내용
    const examInfo = exam.join(", ")

    const difficultyChange = (e, newAlignment) => {
        setDifficulty(newAlignment)
    }
    const handleExam = (e, newInfo) => {
        setExamInfo(newInfo)
    }
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const onTest = () => {
        examWriteApi(
            props.selectId,
            props.lectureName,
            props.professor,
            semester,
            examInfo,
            examDifficulty,
            content,
        )
        props.setModalIsOpen(false)
    }

    useEffect(() => {
        console.log(db.data)
    }, [db.data])


    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                }}
            >
                <SubjectText>{props.lectureName}</SubjectText>
                <Grid container spacing={2} style={{ marginTop: "15px" }}>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>수강학기 선택</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{ float: "right" }}>
                            <select onChange={(e)=>{setSemester(e.target.value)}}>
                        <option key="2022-1" value="2022-1">
                            2022-1
                        </option>
                        <option key="2022-2" value="2022-2">
                            2022-2
                        </option>
                    </select>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>시험내용</SubjectDetail>
                        <div style={{ fontSize: "11px" }}>(복수선택)</div>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{ float: "right" }}>
                        <ToggleButtonGroup value={exam} onChange={handleExam}>
                            <ToggleButton value="족보">족보</ToggleButton>
                            <ToggleButton value="교재">교재</ToggleButton>
                            <ToggleButton value="PPT">PPT</ToggleButton>
                            <ToggleButton value="필기">필기</ToggleButton>
                            <ToggleButton value="응용">응용</ToggleButton>
                            <ToggleButton value="실습">실습</ToggleButton>
                            <ToggleButton value="과제">과제</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>난이도</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{ float: "right" }}>
                        <ToggleButtonGroup
                            color="primary"
                            value={examDifficulty}
                            exclusive
                            onChange={difficultyChange}
                        >
                            <ToggleButton value="매우 쉬움">
                                매우 쉬움
                            </ToggleButton>
                            <ToggleButton value="쉬움">쉬움</ToggleButton>
                            <ToggleButton value="보통">보통</ToggleButton>
                            <ToggleButton value="어려움">어려움</ToggleButton>
                            <ToggleButton value="매우 어려움">
                                매우 어려움
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
                <ModalLine />
                <EvaluationInput
                    propsfunction={onChangeContent}
                    content={props.content}
                />
                <Grid container spacing={3} style={{ marginTop: "5px" }}>
                    <Grid item xs={12} sm={12}>
                        <CancelButton
                            onClick={() => {
                                props.setModalIsOpen(false)
                            }}
                        >
                            취소
                        </CancelButton>
                        <EditButton onClick={onTest}>작성하기</EditButton>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default WriteExam
