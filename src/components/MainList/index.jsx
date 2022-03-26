import React, { useState } from 'react'
import {  BoxString3, BoxString5, ModalString1, ModalString2 } from './styled'
import {CssBaseline, Grid } from "@material-ui/core";
import Modal from 'react-modal';
import * as Styled from './styled';

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
      <div>
        <CssBaseline />
          <Subject lectureName={props.data.lectureName} professor={props.data.professor} lectureType={props.data.lectureType} />
      </div>
  );
}

export const Modal1 = () => {
  return (
    <div style={{paddingBottom:'10px', paddingTop:'5px'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ModalString1>만족도 ⭐⭐⭐⭐</ModalString1>
          <ModalString2>조모임</ModalString2><ModalString2 style={{color:'rgb(190, 190, 190)'}}>없음</ModalString2>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalString1>꿀강 지수 ⭐⭐⭐⭐</ModalString1>
          <ModalString2>과제</ModalString2><ModalString2 style={{color:'rgb(231, 76, 60)'}}>많음</ModalString2>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalString1>배움 지수 ⭐⭐⭐⭐</ModalString1>
          <ModalString2>학점</ModalString2><ModalString2 style={{color:'rgb(231, 76, 60)'}}>까다로움</ModalString2>
        </Grid>
      </Grid>
    </div>
  )
}

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // const Delete = () => {
  //   if(window.confirm("강의평가를 삭제하시겠습니까?")===true){
  //     let arrayCopy = [...props.subjectName];
  //     arrayCopy.shift();
  //     props.setSubjectName(arrayCopy)
  //   }else{ return }
  // }
  return (
    <div style={{
      border: '1.5px solid #f1f1f1',
      padding: '0 25px 20px 25px',
      borderRadius: '10px',
      marginBottom:"10px"
    }}>
     
      <div style={{ marginBottom: '15px' }}>
        {/* <BoxButton2 onClick={()=> {Delete()}} style={{ float: "right" }}>삭제</BoxButton2>
        <BoxButton1 onClick={()=> setModalIsOpen(true)} style={{ float: "right" }}>수정</BoxButton1> */}
      </div>
      <Styled.TitleWrapper>
      <Styled.TitleWrapper>
        <Styled.Title>{props.lectureName}</Styled.Title>
        <Styled.Professor>{props.professor}</Styled.Professor>
        </Styled.TitleWrapper>
        <Styled.Option>{props.lectureType}</Styled.Option>
      </Styled.TitleWrapper>
      <Styled.TempMargin>
      <Styled.EvText>평균지수</Styled.EvText>
      <BoxString3 style={{ padding: '0 10px', letterSpacing: '-2px' }}>⭐⭐⭐⭐⭐</BoxString3>
      <Styled.Rate>5.0</Styled.Rate>
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
      </div>
  )
}

export default MainList