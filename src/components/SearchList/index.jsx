import React, { useState, useEffect } from "react"
import { BoxString5 } from "./styled"
import * as Styled from "./styled"
import { useNavigate } from "react-router-dom"
import { searchApi } from "../../api/Api"
import StarRatings from "react-star-ratings"
import { Detail } from "../MainList/index"

const SearchList = (props) => {
    const [db, setData] = useState([])

    useEffect(() => {
        console.log(props)
        searchApi(setData, props.props.search_value, props.props.search_option)
    }, [props])

    console.log(db)
    return db.length !== 0 ? (
        <div style={{ width: "100%" }}>
            {db.data.map((row) => (
                <Subject
                    key={row.id}
                    lectureName={row.lectureName}
                    professor={row.professor}
                    lectureType={row.lectureType}
                    star={row.lectureTotalAvg}
                />
            ))}
        </div>
    ) : (
        <div></div>
    )
}

export const Modal1 = () => {
    return (
        <Styled.StarFlex id="top">
            <Styled.StarFlex>만족도 ⭐⭐⭐⭐</Styled.StarFlex>
            <Styled.StarFlex>꿀강 지수 ⭐⭐⭐⭐</Styled.StarFlex>
            <Styled.StarFlex>배움 지수 ⭐⭐⭐⭐</Styled.StarFlex>
        </Styled.StarFlex>
    )
}

export const Subject = (props) => {
    const [modal, setModal] = useState(false)

    let navigate = useNavigate()

    let title = props.lectureName

    if (title.length >= 14) {
        title = props.lectureName.substr(0, 14) + "..."
    }

    // const Delete = () => {
    //   if(window.confirm("강의평가를 삭제하시겠습니까?")===true){
    //     let arrayCopy = [...props.subjectName];
    //     arrayCopy.shift();
    //     props.setSubjectName(arrayCopy)
    //   }else{ return }
    // }
    return (
        <Styled.LectureWrapper>
            <Styled.MarginTop>
                {/* <BoxButton2 onClick={()=> {Delete()}} style={{ float: "right" }}>삭제</BoxButton2>
        <BoxButton1 onClick={()=> setModalIsOpen(true)} style={{ float: "right" }}>수정</BoxButton1> */}
                <Styled.TitleWrapper onClick={() => navigate("/lectureinfo")}>
                    <Styled.TitleWrapper>
                        <Styled.Title>{title}</Styled.Title>
                        <Styled.Professor>{props.professor}</Styled.Professor>
                    </Styled.TitleWrapper>
                    <Styled.Option>{props.lectureType}</Styled.Option>
                </Styled.TitleWrapper>
                <Styled.MarginRight>평균지수</Styled.MarginRight>
                <StarRatings
                    rating={props.star}
                    starRatedColor="#3DD3C4"
                    numberOfStars={5}
                    name="rating"
                    starDimension="24px"
                    starSpacing="0px"
                    svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
                    svgIconViewBox="0 0 24 24"
                />
                <Styled.Rate>{props.star.toFixed(1)}</Styled.Rate>
                <BoxString5
                    onClick={() => {
                        setModal(!modal)
                    }}
                >
                    {modal === true ? "간략히" : "자세히"}
                </BoxString5>
            </Styled.MarginTop>
            {modal === true ? <Detail /> : null}
        </Styled.LectureWrapper>
    )
}

export default SearchList
