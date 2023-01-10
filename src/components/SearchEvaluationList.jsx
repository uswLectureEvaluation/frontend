import { useState, useEffect, Fragment } from 'react';
import { useInView } from 'react-intersection-observer';
import StarRatings from 'react-star-ratings';
import { useInfiniteQuery } from 'react-query';
import Spinner from './Spinner';
import Lecture from '../api/Lecture';
import User from '../api/User';
import { fakeEvaluationList } from './placeholderData';
import styled from 'styled-components';
// import { fakeEvaluationList } from '../placeholderData';

export const FakeList = () => {
  return (
    <Wrapper>
      <div style={{ filter: 'blur(10px)' }}>
        {fakeEvaluationList.slice(0, 3).map((lecture) => (
          <Subject key={lecture.id} lecture={lecture} />
        ))}
      </div>
    </Wrapper>
  );
};

export const DetailModal = ({ lecture }) => {
  const teamSet = lecture.team;
  const homeworkSet = lecture.homework;
  const difficultySet = lecture.difficulty;
  const team = {
    0: <DataColor id="cyan">없음</DataColor>,
    1: <DataColor id="purple">있음</DataColor>,
  };
  const homework = {
    0: <DataColor id="cyan">없음</DataColor>,
    1: <DataColor id="black">보통</DataColor>,
    2: <DataColor id="purple">많음</DataColor>,
  };
  const difficulty = {
    0: <DataColor id="cyan">너그러움</DataColor>,
    1: <DataColor id="black">보통</DataColor>,
    2: <DataColor id="purple">까다로움</DataColor>,
  };

  return (
    <div>
      <StarFlex id="top">
        <FlexContainer id="col">
          <StarFlex id="between">
            만족도
            <PaddingRight />
            <Rate id="modal">{lecture.satisfaction?.toFixed(1)}</Rate>
          </StarFlex>
          <StarFlex id="between">조모임 {team[teamSet]}</StarFlex>
        </FlexContainer>
        <FlexContainer id="col">
          <StarFlex id="between">
            꿀강 지수
            <PaddingRight />
            <Rate id="modal">{lecture.honey?.toFixed(1)}</Rate>
          </StarFlex>
          <StarFlex id="between">과제 {homework[homeworkSet]}</StarFlex>
        </FlexContainer>
        <FlexContainer id="col">
          <StarFlex id="between">
            배움 지수
            <PaddingRight />
            <Rate id="modal">{lecture.learning?.toFixed(1)}</Rate>
          </StarFlex>
          <StarFlex id="between">학점 {difficulty[difficultySet]}</StarFlex>
        </FlexContainer>
      </StarFlex>
    </div>
  );
};

const SearchEvaluationList = ({ selectId, setWritten, isLogin }) => {
  const lectures = Lecture();
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
      cacheTime: 0,
      staleTime: 0,
      enabled: isLogin,
    }
  );
  useEffect(() => {
    if (inView && isLogin) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, isLogin]);

  if (isLoading) return <Spinner id="nextPage" />;
  const pages = data?.pages;
  const count = data?.pages[0].data.data.length;

  return !isLogin ? (
    <FakeList />
  ) : count !== 0 ? (
    <Wrapper>
      <div style={{ filter: !isLogin ? 'blur(10px)' : null }}>
        {pages?.map((page) => (
          <Fragment key={page.nextPage}>
            {page.data.data.map((lecture) => (
              <Subject key={lecture.id} lecture={lecture} />
            ))}
          </Fragment>
        ))}
        <div ref={ref} style={{ marginBottom: '10px' }}>
          {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
        </div>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <Content>등록된 강의평가가 없어요</Content>
    </Wrapper>
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
      <LectureWrapper>
        <MarginTop id="top">
          <TitleWrapper>
            <YearText>{lecture.selectedSemester}</YearText>
          </TitleWrapper>
          <EditButton onClick={onReport}>신고</EditButton>
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
          <Rate>{lecture.totalAvg?.toFixed(1)}</Rate>
          <ModalOpen
            onClick={() => {
              setModal(!modal);
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </ModalOpen>
        </MarginTop>
        <MobileWrapper>
          <div style={{ marginBottom: '15px' }}>
            <TitleWrapper>
              <YearText>{lecture.selectedSemester}</YearText>
            </TitleWrapper>
            <EditButton onClick={onReport}>신고</EditButton>
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
            <Rate>{lecture.totalAvg?.toFixed(1)}</Rate>
            <ModalOpen
              onClick={() => {
                setModal(!modal);
              }}
            >
              {modal === true ? '간략히' : '자세히'}
            </ModalOpen>
          </div>
        </MobileWrapper>

        <div style={{ marginBottom: '5px' }} />
        {modal === true ? <DetailModal lecture={lecture} /> : null}
        <MarginTop id="bottom">
          <EvaluationDetail>
            {lecture.content.split('\n').map((value, index) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            })}
          </EvaluationDetail>
        </MarginTop>
      </LectureWrapper>
    </div>
  );
};

export default SearchEvaluationList;

export const ModalOpen = styled.span`
  font-weight: 400;
  font-size: 12px;
  color: #222;
  text-decoration: underline;
  margin-left: 11px;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  font-size: 1.5rem;
  margin: 2rem 0;

  font-weight: 600;
  text-align: center;
  margin-top: 10rem;
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  float: left;
  align-items: center;
`;

export const Rate = styled.span`
  color: #336af8;

  font-size: 18px;
  font-weight: 500;
  padding-left: 5px;
  &#modal {
    font-size: 16px;
    padding-left: 0px;
  }
`;

export const LectureWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const MarginTop = styled.div`
  &#top {
    padding: 14px 24px 0px 24px;
    @media only screen and (max-width: 550px) {
      display: none;
    }
  }
  &#bottom {
    padding: 0px 24px 14px 24px;
    margin-top: 5px;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    padding: 14px 24px 0px 24px;
    flex-direction: column;
  }
`;
export const DataColor = styled.div`
  padding-left: 0.7rem;

  &#black {
    color: black;
  }
  &#cyan {
    color: #336af8;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 1rem;
  padding: 5px 12px;

  font-size: 13px;
  &#top {
    padding: 8px 12px 0px 12px;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
  }
  &#between {
    justify-content: space-between;

    font-weight: 300;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  &#col {
    flex-direction: column;
  }
`;

export const YearText = styled.span`
  font-weight: 400;
  font-size: 14px;
  padding: 4.5px 13px 4.5px 13px;
  border-radius: 12.5px;
  background-color: #eee;
  margin-right: 12px;
`;

export const EvaluationDetail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  font-weight: 400;
  line-height: 1.3;
  font-size: 1rem;
  padding-top: 0.7rem;
  word-break: break-all;
`;
export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;
export const EditButton = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: #a3a3a3;
  float: right;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
