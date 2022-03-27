import React, { useState } from 'react'
import {  BoxString3, BoxString5, ModalString1 } from './styled'
import { Grid } from "@material-ui/core";
import Modal from 'react-modal';
import * as Styled from './styled';
import { useNavigate } from "react-router-dom";

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

const MainList = (props) => {
  return (
        <Subject lectureName={props.data.lectureName} professor={props.data.professor} lectureType={props.data.lectureType} star={props.data.lectureTotalAvg} />
  );
}

export const Modal1 = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ModalString1>만족도 ⭐⭐⭐⭐</ModalString1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalString1>꿀강 지수 ⭐⭐⭐⭐</ModalString1>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalString1>배움 지수 ⭐⭐⭐⭐</ModalString1>
        </Grid>
      </Grid>
    </div>
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
      <div style={{ marginBottom: '15px' }}>
        {/* <BoxButton2 onClick={()=> {Delete()}} style={{ float: "right" }}>삭제</BoxButton2>
        <BoxButton1 onClick={()=> setModalIsOpen(true)} style={{ float: "right" }}>수정</BoxButton1> */}
      </div>
      <Styled.TitleWrapper onClick={()=>navigate("/lectureinfo")}>
      <Styled.TitleWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Professor>{props.professor}</Styled.Professor>
        </Styled.TitleWrapper>
        <Styled.Option>{props.lectureType}</Styled.Option>
      </Styled.TitleWrapper>
      <Styled.TempMargin>
      <Styled.EvText>평균지수</Styled.EvText>
      <BoxString3 style={{ padding: '0 10px', letterSpacing: '-2px' }}>⭐⭐⭐⭐⭐</BoxString3>
        <Styled.Rate>{ props.star.toFixed(1) }</Styled.Rate>
        <BoxString5 onClick={() => { setModal(!modal) }}>{modal === true ? '간략히' : '자세히'}</BoxString5>
      </Styled.TempMargin>
      {modal === true ? <Modal1 /> : null}
      {/* <BoxString6>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하
      </BoxString6> */}
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

export default MainList