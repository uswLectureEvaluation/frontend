import React, { useState, useEffect } from 'react'
import {  BoxString3, BoxString5 } from './styled'
import Modal from 'react-modal';
import * as Styled from './styled';
import { useNavigate } from "react-router-dom";
import { searchApi } from '../../api/Api'

const 모달스타일 = {
	overlay: {
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		zIndex: 1100,
	},
	content: {
    display: "flex",
		justifyContent: "center",
		background: "#ffffff",
		overflow: "auto",
    maxWidth:"600px",
    minWidth:"500px",
    left: "50%",
    top:"0%",
    transform: "translate(-50%, 3%)",
		WebkitOverflowScrolling: "touch",
		borderRadius: "14px",
		outline: "none",
		zIndex: 1100,
	},
};

const SearchList = (props) => {
  const [db, setData] = useState([])

  useEffect(() => {
      console.log(props)
        searchApi(setData, props.props.search_value, props.props.search_option)
  }, [props])
  
  console.log(db)
  return (
    db.length !== 0 ?
      <div style={{width:"100%"}}>
        {
          db.data.map((row)=><Subject key={row.id} lectureName={row.lectureName} professor={row.professor} lectureType={row.lectureType} star={row.lectureTotalAvg} />)
        }
      </div> :
      <div></div>
      );
}

export const Modal1 = () => {
  return (
    <Styled.StarFlex id='top'>
      <Styled.StarFlex>만족도 ⭐⭐⭐⭐</Styled.StarFlex>
      <Styled.StarFlex>꿀강 지수 ⭐⭐⭐⭐</Styled.StarFlex>
      <Styled.StarFlex>배움 지수 ⭐⭐⭐⭐</Styled.StarFlex>
    </Styled.StarFlex>
  )
}

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  let navigate = useNavigate();

  let title = props.lectureName

  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + "...";
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
        <Styled.TitleWrapper onClick={()=>navigate("/lectureinfo")}>
        <Styled.TitleWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Professor>{props.professor}</Styled.Professor>
        </Styled.TitleWrapper>
          <Styled.Option>{props.lectureType}</Styled.Option>
        </Styled.TitleWrapper>
        <span>평균지수</span>
        <BoxString3 style={{ padding: '0 5px', letterSpacing: '-2px' }}>⭐⭐⭐⭐⭐</BoxString3>
        <Styled.Rate>{ props.star.toFixed(1) }</Styled.Rate>
        <BoxString5 onClick={() => { setModal(!modal) }}>{modal === true ? '간략히' : '자세히'}</BoxString5>
      </Styled.MarginTop>
      {modal === true ? <Modal1 /> : null}
      <Modal 
      isOpen={modalIsOpen}
			style={모달스타일}
			 // 오버레이나 esc를 누르면 핸들러 동작
			ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    	>
    	</Modal>
      </Styled.LectureWrapper>
  )
}

export default SearchList