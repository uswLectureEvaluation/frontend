import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import * as Styled from './styled';
import StarRatings from 'react-star-ratings';
import { useInfiniteQuery } from 'react-query';
import Spinner from '../Spinner';
import { useRecoilValue } from 'recoil';
import { lectureState } from '../../app/recoilStore';
import Lecture from '../../api/Lecture';
import User from '../../api/User';

export const DetailModal = ({ lecture }) => {
  const teamSet = lecture.team;
  const homeworkSet = lecture.homework;
  const difficultySet = lecture.difficulty;
  const team = {
    0: <Styled.DataColor id="cyan">없음</Styled.DataColor>,
    1: <Styled.DataColor id="purple">있음</Styled.DataColor>,
  };
  const homework = {
    0: <Styled.DataColor id="cyan">없음</Styled.DataColor>,
    1: <Styled.DataColor id="black">보통</Styled.DataColor>,
    2: <Styled.DataColor id="purple">많음</Styled.DataColor>,
  };
  const difficulty = {
    0: <Styled.DataColor id="cyan">너그러움</Styled.DataColor>,
    1: <Styled.DataColor id="black">보통</Styled.DataColor>,
    2: <Styled.DataColor id="purple">까다로움</Styled.DataColor>,
  };

  return (
    <div>
      <Styled.StarFlex id="top">
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            만족도
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{lecture.satisfaction.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">조모임 {team[teamSet]}</Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            꿀강 지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{lecture.honey.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">과제 {homework[homeworkSet]}</Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            배움 지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{lecture.learning.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">학점 {difficulty[difficultySet]}</Styled.StarFlex>
        </Styled.FlexContainer>
      </Styled.StarFlex>
    </div>
  );
};

const SearchEvaluationList = ({ selectId, setWritten }) => {
  const lectures = Lecture();
  const lectureInfo = useRecoilValue(lectureState);
  const { ref, inView } = useInView();
  const { data, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery(
    ['lecture', 'evaluationList', selectId],
    ({ pageParam = 1 }) => lectures.evaluation(selectId, pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      onSuccess: (data) => setWritten(data.pages[0].data.written),
      cacheTime: 1000 * 60 * 10,
      staleTime: 1000 * 60 * 10,
      enabled: selectId === lectureInfo?.selectId,
    }
  );
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) return <></>;
  const pages = data?.pages;
  const count = data?.pages[0].data.data.length;

  return count !== 0 ? (
    <Styled.Wrapper>
      {pages?.map((page) =>
        page.data.data.map((lecture) => <Subject key={Math.random()} lecture={lecture} />)
      )}
      <div ref={ref} style={{ marginBottom: '10px' }}>
        {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
      </div>
    </Styled.Wrapper>
  ) : (
    <Styled.Wrapper>
      <Styled.Content>등록된 강의평가가 없어요</Styled.Content>
    </Styled.Wrapper>
  );
};

export const Subject = ({ lecture }) => {
  const user = User();
  const [modal, setModal] = useState(false);
  const onReport = () => {
    if (window.confirm('정말 신고하시겠어요? \n*허위 신고 시 제재가 가해질 수 있습니다!'))
      user.reportEvaluation(lecture.id).then(() => alert('신고 완료'));
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.TitleWrapper>
            <Styled.YearText>{lecture.selectedSemester}</Styled.YearText>
          </Styled.TitleWrapper>
          <Styled.EditButton onClick={onReport}>신고</Styled.EditButton>
          <StarRatings
            rating={lecture.totalAvg}
            starRatedColor="#336af8"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Styled.Rate>{lecture.totalAvg.toFixed(1)}</Styled.Rate>
          <Styled.ModalOpen
            onClick={() => {
              setModal(!modal);
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </Styled.ModalOpen>
        </Styled.MarginTop>
        <Styled.MobileWrapper>
          <div style={{ marginBottom: '15px' }}>
            <Styled.TitleWrapper>
              <Styled.YearText>{lecture.selectedSemester}</Styled.YearText>
            </Styled.TitleWrapper>
            <Styled.EditButton onClick={onReport}>신고</Styled.EditButton>
          </div>
          <div>
            <StarRatings
              rating={lecture.totalAvg}
              starRatedColor="#336af8"
              numberOfStars={5}
              name="rating"
              starDimension="18px"
              starSpacing="0px"
              svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
              svgIconViewBox="0 0 24 24"
            />
            <Styled.Rate>{lecture.totalAvg.toFixed(1)}</Styled.Rate>
            <Styled.ModalOpen
              onClick={() => {
                setModal(!modal);
              }}
            >
              {modal === true ? '간략히' : '자세히'}
            </Styled.ModalOpen>
          </div>
        </Styled.MobileWrapper>

        <div style={{ marginBottom: '5px' }} />
        {modal === true ? <DetailModal lecture={lecture} /> : null}
        <Styled.MarginTop id="bottom">
          <Styled.EvaluationDetail>
            {lecture.content.split('\n').map((value, index) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            })}
          </Styled.EvaluationDetail>
        </Styled.MarginTop>
      </Styled.LectureWrapper>
    </div>
  );
};

export default SearchEvaluationList;
