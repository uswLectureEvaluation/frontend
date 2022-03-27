import React, { useState, useEffect } from 'react'
import { YearText, SubjectText, StarPoint, ProfessorName, ModalOpenText, EvaluationDetail, EditButton, DeleteButton, ModalDetail, ModalDetailInfo } from './myevaluation.element'
import {CssBaseline, Grid, Container } from "@material-ui/core";
import Editevaluation from './editevaluation'
import Modal from 'react-modal';
import { evaluatePostApi } from '../../Api/Api';
import Loader from '../Notice/Loader'

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

const Myevaluation = () => {
  const [db, setData] = useState({
    data: []
  })
  const [target, setTarget] = useState(null);
  const [itemLists, setItemLists] = useState([1]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  });

  console.log(db)
  useEffect(() => {
    evaluatePostApi(setData)
  }, []
  )

  return (
      <Container component="main" maxWidth="md">
        <CssBaseline />
        {itemLists.map((a,i)=> {
          return db.data.map((v,i)=>{
            return <Subject lectureName={v.lectureName} professor={v.professor} semester={v.semester} totalAvg={v.totalAvg} content={v.content}
            satisfaction={v.satisfaction} learning={v.learning} honey={v.honey} team={v.team} difficulty={v.difficulty} homework={v.homework}
             semesterList={v.semesterList} id={v.id}/>;
          })
        })}
{/*         {db.data.map((v, i) => {
            return <Subject lectureName={v.lectureName} professor={v.professor} semester={v.semester} totalAvg={v.totalAvg} content={v.content}/>;
          })} */}
{/*        <div ref={setTarget}>
        {isLoaded && <Loader />}
        </div>  */}
      </Container>
  );
}

export const Subject = (props) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

/*   const Delete = () => {
    if(window.confirm("강의평가를 삭제하시겠습니까?")===true){
      let arrayCopy = [...props.subjectName];
      arrayCopy.shift();
      props.setSubjectName(arrayCopy)
    }else{ return }
  }
 */
  return (
    <div style={{
      marginTop: "10px",
      borderTop: '2px solid rgba(158,158,158,.5)',
      padding: '15px',
    }}>
     
      <div style={{ marginBottom: '15px' }}>
        <YearText>{props.semester}</YearText>
        <DeleteButton onClick={()=> {Delete()}} style={{ float: "right" }}>삭제</DeleteButton>
        <EditButton onClick={()=> setModalIsOpen(true)} style={{ float: "right" }}>수정</EditButton>
      </div>
        <SubjectText>{props.lectureName}</SubjectText>
        <ProfessorName>{props.professor}</ProfessorName>
      <div/>
      <StarPoint>평균 지수</StarPoint>
      <StarPoint style={{ paddingLeft: '10px' }}>⭐⭐⭐⭐⭐</StarPoint>
      <span>{props.totalAvg}</span>
      <ModalOpenText onClick={() => { setModal(!modal) }}>{modal === true ? '간략하게 보기 >' : '자세히 보기 >'}</ModalOpenText>
      {modal === true ? <DetailModal /> : null}
      <EvaluationDetail>{props.content}
      </EvaluationDetail>
      <Modal 
      isOpen={modalIsOpen}
			style={모달스타일}
			ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    	>
    		<Editevaluation setModalIsOpen={setModalIsOpen} semester={props.semester} satisfaction={props.satisfaction} learning={props.learning}
        honey={props.honey} team={props.team} difficulty={props.difficulty} homework={props.homework} content={props.content}
        semesterList={props.semesterList} id={props.id}/>
    	</Modal>
    </div>
  )
}

export default Myevaluation