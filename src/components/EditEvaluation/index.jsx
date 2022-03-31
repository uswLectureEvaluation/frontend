import React, { useState, useEffect } from "react"
import { EvaluationInput } from "../../Pages/myinfodetail/del_editevaluation.element"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { evaluateUpdateApi } from "../../api/Api"
import * as Styled from "./styled"

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
            color={"#ffffff"}
        />
    )
    return [state, Slider, setSlide]
}

const EditEvaluation = (props) => {
    const [content, setContent] = useState()
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    const [db, setData] = useState({
        data: [],
    })
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

    const [semester, setSemester] = useState(props.semester) //학기
    const [team, setTeam] = useState(`${props.team}`) //조모임
    const [homework, setHomework] = useState(`${props.homework}`) //과제
    const [difficulty, setDifficulty] = useState(`${props.difficulty}`) //학점
    const semesterChange = (e) => {
        setSemester(e.target.value)
    }
    const teamChange = (newAlignment) => {
        setTeam(newAlignment)
    }
    const homeworkChange = (newAlignment) => {
        setHomework(newAlignment)
    }
    const difficultyChange = (newAlignment) => {
        setDifficulty(newAlignment)
    }

    return (
        <Styled.Wrapper>
            <Styled.TitleWrapper>
                <Styled.Title>학문과 사고</Styled.Title>
                <Styled.Title>X</Styled.Title>
            </Styled.TitleWrapper>

            <Styled.ContentWrapper>
                <Styled.Content id="group">
                    <Styled.ContentTitle>수강학기</Styled.ContentTitle>
                    <select onChange={semesterChange}>
                        <option>2021-1</option>
                        <option>2022-1</option>
                    </select>
                </Styled.Content>

                <Styled.Content>
                    <Styled.ContentTitle>꿀강지수</Styled.ContentTitle>
                    <HoneySlider /> {honey}
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>배움지수</Styled.ContentTitle>
                    <LearingSlider /> {learning}
                </Styled.Content>
                <Styled.Content id="group">
                    <Styled.ContentTitle>만족도</Styled.ContentTitle>
                    <SatisfactionSlider /> {satisfaction}
                </Styled.Content>

                <Styled.Content>
                    <Styled.ContentTitle>조모임</Styled.ContentTitle>
                    <ToggleButtonGroup
                        color="primary"
                        value={team}
                        exclusive
                        onChange={teamChange}
                    >
                        <ToggleButton value="0">없음</ToggleButton>
                        <ToggleButton value="1">있음</ToggleButton>
                    </ToggleButtonGroup>
                </Styled.Content>
                <Styled.Content>
                    <Styled.ContentTitle>과제</Styled.ContentTitle>
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
                </Styled.Content>
                <Styled.Content id="group">
                    <Styled.ContentTitle>학점</Styled.ContentTitle>
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
                </Styled.Content>
            </Styled.ContentWrapper>
            <EvaluationInput
                propsfunction={onChangeContent}
                content={props.content}
            />
            <button onClick={onEvaluate}>수정하기</button>
        </Styled.Wrapper>
    )
}

export default EditEvaluation
