import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import * as Styled from './styled';
import {Subject} from '../MainList/index'
import { mainApi } from '../../api/Api';

const Infinite = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(1);

  const [win, setWin] = useState(true)

  const showWin = () => {
    if (window.innerWidth <= 960) {
      setWin(false);
    } else {
      setWin(true);
    }
  };

  window.addEventListener('resize', showWin);


  const preventRef = useRef(true);
  const obsRef = useRef(null);

  useEffect(() => {
    showWin()
    getDog();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getDog();
  }, [page]);

  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev) => prev + 1);
    }
  };

  const getDog = useCallback(async () => {
    //글 불러오기
    console.log('고양이 사진 불러오기');
    setLoad(true); //로딩 시작
    const res = await mainApi('modifiedDate', page)
    if (res.data) {
        setList(prev=> [...prev, ...res.data ]);
      preventRef.current = true;
    } else {
      console.log(res); //에러
    }
    setLoad(false); //로딩 종료
  }, [page]);

  return (
    win ? 
    <>
    <Styled.FlexWrap>
      <Styled.FlexWrapSub>
        {list && list
          .filter((row, i) => !(i % 2))
          .map((row, i) => (
            <Subject
              key={Math.random()}
              id={row.id}
              lectureName={row.lectureName}
              professor={row.professor}
              lectureType={row.lectureType}
              star={row.lectureTotalAvg}
              lectureSatisfactionAvg={row.lectureSatisfactionAvg}
              lectureHoneyAvg={row.lectureHoneyAvg}
              lectureLearningAvg={row.lectureLearningAvg}
              majorType={row.majorType}
            />
          ))}
      </Styled.FlexWrapSub>
      <Styled.FlexWrapSub>
        {list
          .filter((row, i) => i % 2)
          .map((row, i) => (
            <Subject
              key={Math.random()}
              id={row.id}
              lectureName={row.lectureName}
              professor={row.professor}
              lectureType={row.lectureType}
              star={row.lectureTotalAvg}
              lectureSatisfactionAvg={row.lectureSatisfactionAvg}
              lectureHoneyAvg={row.lectureHoneyAvg}
              lectureLearningAvg={row.lectureLearningAvg}
              majorType={row.majorType}
            />
          ))}
      </Styled.FlexWrapSub>
      
    </Styled.FlexWrap> 
    {load ? <div style={{opacity: '0', height: '500px'}}>로딩 중</div> : <></>}
    <div ref={obsRef}  style={{opacity: '0',height: '1000px'}}>
      옵저버 Element
    </div>
    </>: 
    <Styled.FlexWrap style={{height: '100vh', display: 'grid'}}>
      <Styled.FullWrapSub>
        {list
          .map((row, i) => (
            <Subject
              key={row.id}
              id={row.id}
              lectureName={row.lectureName}
              professor={row.professor}
              lectureType={row.lectureType}
              star={row.lectureTotalAvg}
              lectureSatisfactionAvg={row.lectureSatisfactionAvg}
              lectureHoneyAvg={row.lectureHoneyAvg}
              lectureLearningAvg={row.lectureLearningAvg}
              majorType={row.majorType}
            />
          ))}
      </Styled.FullWrapSub>
      {load ? <div className="py-3 bg-blue-500 text-center">로딩 중</div> : <></>}
        <div ref={obsRef} className="py-3 bg-red-500 text-white text-center">
          옵저버 Element
        </div>
      </Styled.FlexWrap>
  ) 

  
};



export default Infinite;
