import React, { useState } from 'react'
import {YearText, SubjectText, ProfessorName, TestInfoDetail, EditButton, DeleteButton } from './testinformation.element'
import {CssBaseline,Container} from "@material-ui/core";
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
              <YearText>2020-1</YearText>
              <DeleteButton style={{float: "right"}} onClick={()=>{Delete()}}>삭제</DeleteButton>
              <EditButton style={{float: "right"}} onClick={() => { setModalIsOpen(true) }}>수정</EditButton>
            </div>
          <div style={{paddingBottom:'5px'}}>
          <SubjectText>{props.subjectName[props.index]}</SubjectText>
          <ProfessorName>이다미 교수님</ProfessorName>
          </div>
            <TestInfoDetail style={{fontWeight:'bold'}}>시험 내용</TestInfoDetail>
            <TestInfoDetail style={{fontWeight:'bold', color:'rgb(52, 152, 219)'}}>족보, 교재, ppt</TestInfoDetail>
            <div/>
            <TestInfoDetail style={{fontWeight:'bold'}}>난이도</TestInfoDetail>
            <TestInfoDetail style={{fontWeight:'bold', color:'rgb(52, 152, 219)'}}>보통</TestInfoDetail>
            <div style={{paddingBottom:'5px'}}/>
            <TestInfoDetail>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          가나다라마바사아자차카타파하
          </TestInfoDetail>
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