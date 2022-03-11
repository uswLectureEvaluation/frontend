import React, { useState } from 'react'
import {BoxString1, BoxString2, BoxString4,BoxString6, BoxButton1, BoxButton2 } from './testinformation.element'
import {CssBaseline,Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import Modal from 'react-modal';
import Edittestinfo from './edittestinfo'

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
    minWidth:"550px",
    left: "50%",
    top:"10%",
    transform: "translate(-50%, -5%)",
		WebkitOverflowScrolling: "touch",
		borderRadius: "14px",
		outline: "none",
		zIndex: 1100,
	},
};

const Testinformation =  () => {

  let [subjectName, setSubjectName] = useState(['학문과 사고', '네트워크 개론', '데이터베이스', '운영체제론', '졸업프로젝트'])

        return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        { subjectName.map((name, index)=>
                <Subject subjectName={subjectName} setSubjectName={setSubjectName} index={index}/>
        )}
      </Container>
  );
}


export const Subject = (props) => {
  const [edit, setEdit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const Delete = () => {
    if(window.confirm("시험정보를 삭제하시겠습니까?")==true){
      let arrayCopy = [...props.subjectName];
      arrayCopy.shift();
      props.setSubjectName(arrayCopy)
    }else{ return }
  }

  return(
    <div style={{
      marginTop: "10px",
      borderTop: '2px solid rgba(158,158,158)',
      borderTop: '2px solid rgba(158,158,158,.5)',
      padding: '15px',
    }}>
            <div style={{marginBottom:'15px'}}>
              <BoxString1>2020-1</BoxString1>
              <BoxButton2 style={{float: "right"}} onClick={()=>{Delete()}}>삭제</BoxButton2>
              <BoxButton1 style={{float: "right"}} onClick={() => { setModalIsOpen(true) }}>수정</BoxButton1>
            </div>
          <div style={{paddingBottom:'5px'}}>
          <BoxString2>{props.subjectName[props.index]}</BoxString2>
          <BoxString4>이다미 교수님</BoxString4>
          </div>
            <BoxString6 style={{fontWeight:'bold'}}>시험 내용</BoxString6>
            <BoxString6 style={{fontWeight:'bold', color:'rgb(52, 152, 219)'}}>족보, 교재, ppt</BoxString6>
            <div/>
            <BoxString6 style={{fontWeight:'bold'}}>난이도</BoxString6>
            <BoxString6 style={{fontWeight:'bold', color:'rgb(52, 152, 219)'}}>보통</BoxString6>
            <div style={{paddingBottom:'5px'}}/>
            <BoxString6>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          </BoxString6>
          <Modal 
      isOpen={modalIsOpen}
			style={모달스타일}
			 // 오버레이나 esc를 누르면 핸들러 동작
			ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    	>
    		<Edittestinfo setModalIsOpen={setModalIsOpen}/>
    	</Modal>
          </div>
  )
}

export default Testinformation