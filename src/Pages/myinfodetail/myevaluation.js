import React, { useState, useEffect } from 'react'
import { BoxString3, BoxString5, YearText, EvaluationDetail, EditButton, DeleteButton } from './myevaluation.element'
import {CssBaseline, Container } from "@material-ui/core";
import Editevaluation from './editevaluation'
import Modal from 'react-modal';
import { evaluatePostApi } from '../../api/Api';
import * as Styled from './myevaluation.element';


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
    <div>
    <Styled.StarFlex id='top'>
      <Styled.StarFlex>만족도 ⭐⭐⭐⭐</Styled.StarFlex>
      <Styled.StarFlex>꿀강 지수 ⭐⭐⭐⭐</Styled.StarFlex>
      <Styled.StarFlex>배움 지수 ⭐⭐⭐⭐</Styled.StarFlex>
    </Styled.StarFlex>
    <Styled.StarFlex id='bottom'>
      <Styled.StarFlex>조모임 ⭐⭐⭐⭐</Styled.StarFlex>
      <Styled.StarFlex>과제 ⭐⭐⭐⭐</Styled.StarFlex>
      <Styled.StarFlex>학점 ⭐⭐⭐⭐</Styled.StarFlex>
    </Styled.StarFlex>

    </div>
    
  )
}

const Myevaluation = () => {
  const [db, setData] = useState({
    data: []
  })
  // const [target, setTarget] = useState(null);
  const target = null;
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
  let title = props.lectureName

  if (title.length >= 14) {
    title = props.lectureName.substr(0, 14) + "...";
  }
 const Delete = () => {
    if(window.confirm("강의평가를 삭제하시겠습니까?")===true){
      let arrayCopy = [...props.subjectName];
      arrayCopy.shift();
      props.setSubjectName(arrayCopy)
    }else{ return }
  }
 
  return (
    <div style={{marginTop:"15px"}}>
    <Styled.LectureWrapper>
      <Styled.MarginTop id='top'>
        <div style={{marginBottom:"10px"}}>
          <YearText>{props.semester}</YearText>
          <DeleteButton onClick={()=> {Delete()}} style={{ float: "right" }}>삭제</DeleteButton>
          <EditButton onClick={()=> setModalIsOpen(true)} style={{ float: "right" }}>수정</EditButton>
        </div>
        <Styled.TitleWrapper>
        <Styled.TitleWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Professor>{props.professor}</Styled.Professor>
        </Styled.TitleWrapper>
        </Styled.TitleWrapper>
        <span>평균지수</span>
        <BoxString3 style={{ padding: '0 5px', letterSpacing: '-2px' }}>⭐⭐⭐⭐⭐</BoxString3>
        <Styled.Rate>{ props.totalAvg.toFixed(1) }</Styled.Rate>
        <BoxString5 onClick={() => { setModal(!modal) }}>{modal === true ? '간략히' : '자세히'}</BoxString5>
      </Styled.MarginTop>
      {modal === true ? <DetailModal /> : null}
      <Styled.MarginTop id='bottom'>
      <EvaluationDetail>{props.content}</EvaluationDetail>
      </Styled.MarginTop>
      <Modal 
      isOpen={modalIsOpen}
			style={모달스타일}
			 // 오버레이나 esc를 누르면 핸들러 동작
			ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
    	>
        <Editevaluation setModalIsOpen={setModalIsOpen} semester={props.semester} satisfaction={props.satisfaction} learning={props.learning}
        honey={props.honey} team={props.team} difficulty={props.difficulty} homework={props.homework} content={props.content}
        semesterList={props.semesterList} id={props.id}/>
    	</Modal>
      </Styled.LectureWrapper>
      </div>
  )
}

export default Myevaluation
