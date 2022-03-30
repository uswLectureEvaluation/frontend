import React, { useState, useEffect } from "react"
import {
    SubjectText,
    SubjectDetail,
    EvaluationInput,
    EditButton,
    ModalLine,
    CancelButton,
} from "./editevaluation.element"
import { CssBaseline, Grid, Box, Container } from "@material-ui/core"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { evaluateUpdateApi } from "../../api/Api"

// Range바 로직
const useSlider = (min, max, defaultState, id) => {
    const [state, setSlide] = useState(defaultState)
    const handleChange = (e) => {
        setSlide(e.target.value)
    }

    const Slider = () => (
        <input
            type="range"
            id={id}
            min={min}
            max={max}
            step={0.5}
            defaultValue={state}
            onMouseUp={handleChange}
        />
    )
    return [state, Slider, setSlide]
}

const Editevaluation = (props) => {
    let detail = ["꿀강 지수", "배움 지수", "만족도"]
    const [content, setContent] = useState()
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const [db, setData] = useState({
        data: [],
    })
    const onEvaluate = () => {
        evaluateUpdateApi(
            setData,
            semester,
            satisfaction,
            learning,
            honey,
            team,
            difficulty,
            homework,
            content,
            props.id
        )
        props.setModalIsOpen(false)
    }
    useEffect(() => {
        console.log(db.data)
    }, [db.data])

    const [honey, HoneySlider] = useSlider(0.5, 5, props.honey)
    const [learning, LearingSlider] = useSlider(0.5, 5, props.learning)
    const [satisfaction, SatisfactionSlider] = useSlider(
        0.5,
        5,
        props.satisfaction
    )
    const [semester, setSemester] = useState(props.semester) //학기
    const [team, setTeam] = useState(`${props.team}`) //조모임
    const [homework, setHomework] = useState(`${props.homework}`) //과제
    const [difficulty, setDifficulty] = useState(`${props.difficulty}`) //학점

    const semesterChange = (e) => {
        setSemester(e.target.value)
    }
    const teamChange = (event, newAlignment) => {
        setTeam(newAlignment)
    }
    const homeworkChange = (event, newAlignment) => {
        setHomework(newAlignment)
    }
    const difficultyChange = (event, newAlignment) => {
        setDifficulty(newAlignment)
    }

    const SelectBox = () => {
        return (
            <select onChange={semesterChange}>
                <option key="2022-1" value="2022-1">
                    2022 - 1
                </option>
                <option key="2022-2" value="2022-2">
                    2022 - 2
                </option>
            </select>
        )
    }

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                }}
            >
                <SubjectText>학문과 사고</SubjectText>
                <ModalLine />
                <Grid container spacing={2} style={{ marginTop: "15px" }}>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>수강학기 선택</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <SelectBox />
                    </Grid>
                </Grid>
                <div style={{ marginTop: "10px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <SubjectDetail>{detail[0]}</SubjectDetail>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <HoneySlider />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <SubjectDetail>{honey}</SubjectDetail>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <SubjectDetail>{detail[1]}</SubjectDetail>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LearingSlider />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <SubjectDetail>{learning}</SubjectDetail>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <SubjectDetail>{detail[2]}</SubjectDetail>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SatisfactionSlider />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <SubjectDetail>{satisfaction}</SubjectDetail>
                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={3} style={{ marginTop: "15px" }}>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>조모임</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{ float: "right" }}>
                        <ToggleButtonGroup
                            color="primary"
                            value={team}
                            exclusive
                            onChange={teamChange}
                        >
                            <ToggleButton value="0">없음</ToggleButton>
                            <ToggleButton value="1">있음</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>과제</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{ float: "right" }}>
                        <ToggleButtonGroup
                            color="primary"
                            value={homework}
                            exclusive
                            onChange={homeworkChange}
                        >
                            <ToggleButton value="0">없음</ToggleButton>
                            <ToggleButton value="1">보통</ToggleButton>
                            <ToggleButton value="2">많음</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <SubjectDetail>학점</SubjectDetail>
                    </Grid>
                    <Grid item xs={12} sm={9} style={{ float: "right" }}>
                        <ToggleButtonGroup
                            color="primary"
                            value={difficulty}
                            exclusive
                            onChange={difficultyChange}
                        >
                            <ToggleButton value="0">까다로움</ToggleButton>
                            <ToggleButton value="1">보통</ToggleButton>
                            <ToggleButton value="2">잘줌</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
                <ModalLine />
                <EvaluationInput
                    propsfunction={onChangeContent}
                    content={props.content}
                />
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <CancelButton
                            onClick={() => {
                                props.setModalIsOpen(false)
                            }}
                        >
                            취소
                        </CancelButton>
                        <EditButton onClick={onEvaluate}>수정하기</EditButton>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
export default Editevaluation
