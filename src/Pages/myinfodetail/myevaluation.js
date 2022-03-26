import React, { useState, useEffect } from 'react'
import { YearText, SubjectText, StarPoint, ProfessorName, ModalOpenText, EvaluationDetail, EditButton, DeleteButton, ModalDetail, ModalDetailInfo } from './myevaluation.element'
import {CssBaseline, Grid, Container } from "@material-ui/core";
import Editevaluation from './editevaluation'
import Modal from 'react-modal';
import { evaluatePostApi } from '../../Api/Api';

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

const Myevaluation = () => {

  let [subjectName, setSubjectName] = useState(['학문과 사고', '네트워크 개론', '데이터베이스', '운영체제론', '졸업프로젝트'])

  const [db, setData] = useState({
    data: []
  })
  console.log(db)
  useEffect(() => {
    evaluatePostApi(setData)
  }, []
  )

  return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        {subjectName.map((name, index) =>
          <Subject subjectName={subjectName} setSubjectName={setSubjectName} index={index} />,
        )}
      </Container>
  );
}

export const DetailModal = () => {
  return (
    <div style={{ paddingBottom: '10px', paddingTop: '5px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <ModalDetail>만족도 ⭐⭐⭐⭐</ModalDetail>
          <ModalDetailInfo>조모임</ModalDetailInfo><ModalDetailInfo style={{color:'rgb(190, 190, 190)'}}>없음</ModalDetailInfo>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalDetail>꿀강 지수 ⭐⭐⭐⭐</ModalDetail>
          <ModalDetailInfo>과제</ModalDetailInfo><ModalDetailInfo style={{color:'rgb(231, 76, 60)'}}>많음</ModalDetailInfo>
        </Grid>
        <Grid item xs={12} sm={4}>
          <ModalDetail>배움 지수 ⭐⭐⭐⭐</ModalDetail>
          <ModalDetailInfo>학점</ModalDetailInfo><ModalDetailInfo style={{color:'rgb(231, 76, 60)'}}>까다로움</ModalDetailInfo>
        </Grid>
      </Grid>
    </div>
  )
}

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const Delete = () => {
    if(window.confirm("강의평가를 삭제하시겠습니까?")===true){
      let arrayCopy = [...props.subjectName];
      arrayCopy.shift();
      props.setSubjectName(arrayCopy)
    }else{ return }
  }

  return (
    <div style={{
      marginTop: "10px",
      borderTop: '2px solid rgba(158,158,158,.5)',
      padding: '15px',
    }}>
     
      <div style={{ marginBottom: '15px' }}>
        <YearText>2020-1</YearText>
        <DeleteButton onClick={()=> {Delete()}} style={{ float: "right" }}>삭제</DeleteButton>
        <EditButton onClick={()=> setModalIsOpen(true)} style={{ float: "right" }}>수정</EditButton>
      </div>
        <SubjectText>{props.subjectName[props.index]}</SubjectText>
        <ProfessorName>이다미 교수님</ProfessorName>
      <div/>
      <StarPoint>평균 지수</StarPoint>
      <StarPoint style={{ paddingLeft: '10px' }}>⭐⭐⭐⭐⭐</StarPoint>
      <span>5.0</span>
      <ModalOpenText onClick={() => { setModal(!modal) }}>{modal === true ? '간략하게 보기 >' : '자세히 보기 >'}</ModalOpenText>
      {modal === true ? <DetailModal /> : null}
      <EvaluationDetail>가나다라마바사아자차카타파하가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하
      </EvaluationDetail>
      <Modal 
      isOpen={modalIsOpen}
			style={모달스타일}
			ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    	>
    		<Editevaluation setModalIsOpen={setModalIsOpen} />
    	</Modal>
    </div>
  )
}

export default Myevaluation