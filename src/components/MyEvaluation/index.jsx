import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { evaluatePostApi, deleteEvaluateApi } from '../../api/Api';
import * as Styled from './styled';
import StarRatings from 'react-star-ratings';
import EditEvaluation from '../EditEvaluation';
import ModalStyle from '../ModalStyle';
import { useInfiniteQuery, useMutation } from 'react-query';
import Spinner from '../Spinner';
import { useInView } from 'react-intersection-observer';
import { queryClient } from '../..';

export const DetailModal = (props) => {
  const teamSet = props.team;
  const homeworkSet = props.homework;
  const difficultySet = props.difficulty;
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
            <Styled.Rate id="modal">{props.satisfaction.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">조모임 {team[teamSet]}</Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            꿀강 지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.honey.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">과제 {homework[homeworkSet]}</Styled.StarFlex>
        </Styled.FlexContainer>
        <Styled.FlexContainer id="col">
          <Styled.StarFlex id="between">
            배움 지수
            <Styled.PaddingRight />
            <Styled.Rate id="modal">{props.learning.toFixed(1)}</Styled.Rate>
          </Styled.StarFlex>
          <Styled.StarFlex id="between">학점 {difficulty[difficultySet]}</Styled.StarFlex>
        </Styled.FlexContainer>
      </Styled.StarFlex>
    </div>
  );
};

const Myevaluation = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['myInfo', 'myEvaluation'],
    ({ pageParam = 1 }) => evaluatePostApi(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      enabled: (localStorage.getItem('login') || sessionStorage.getItem('login')) === 'true',
      cacheTime: 1000 * 60 * 30,
      staleTime: 1000 * 60 * 30,
    }
  );
  let isExistData = data?.pages[0].data.data.length === 0;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) return <Spinner id="myInfo" />;
  return (
    <>
      {isExistData ? (
        <Styled.NoEvaluation>아직 평가한 강의가 없어요.</Styled.NoEvaluation>
      ) : (
        data?.pages.map((page) => {
          let data = page.data.data;
          return (
            <Styled.Wrapper key={page.nextPage}>
              {data.map((row) => (
                <Subject key={Math.random()} row={row} />
              ))}
            </Styled.Wrapper>
          );
        })
      )}
      <div ref={ref} style={{ marginBottom: '10px' }}>
        {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
      </div>
    </>
  );
};

export const Subject = ({ row }) => {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let title = row.lectureName;
  let mobileTitle = row.lectureName;
  if (mobileTitle.length >= 8) {
    mobileTitle = row.lectureName.substr(0, 8) + '...';
  }
  if (title.length >= 14) {
    title = title.substr(0, 14) + '...';
  }
  const deleteEvaluate = useMutation(() => deleteEvaluateApi(row.id), {
    onSuccess: () => {
      alert('삭제 완료');
      queryClient.invalidateQueries({ queryKey: ['myInfo'] });
    },
    onError: (err) => alert(err.response.data.message),
  });

  const onDelete = () => {
    if (window.confirm('강의평가를 삭제하시겠습니까?') === true) {
      deleteEvaluate.mutate();
    }
  };
  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.MobileWrapper id="top">
            <Styled.YearText>{row.selectedSemester}</Styled.YearText>
            <div>
              <Styled.DeleteButton
                onClick={() => {
                  onDelete();
                }}
              >
                삭제
              </Styled.DeleteButton>
              <Styled.EditButton onClick={() => setModalIsOpen(true)}>수정</Styled.EditButton>
            </div>
          </Styled.MobileWrapper>
          <Styled.MobileWrapper>
            <Styled.Title>{mobileTitle}</Styled.Title>
            <Styled.Major>{row.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{row.professor}</Styled.Professor>
          </Styled.MobileWrapper>

          <Styled.TitleWrapper>
            <Styled.YearText>{row.selectedSemester}</Styled.YearText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Major>{row.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{row.professor}</Styled.Professor>
          </Styled.TitleWrapper>
          <Styled.DeleteButton
            id="pc"
            onClick={() => {
              onDelete();
            }}
          >
            삭제
          </Styled.DeleteButton>
          <Styled.EditButton id="pc" onClick={() => setModalIsOpen(true)}>
            수정
          </Styled.EditButton>

          <div style={{ marginBottom: '38px' }} />
          <StarRatings
            rating={row.totalAvg}
            starRatedColor="#336af8"
            numberOfStars={5}
            name="rating"
            starDimension="18px"
            starSpacing="0px"
            svgIconPath="M17.563,21.56a1,1,0,0,1-.466-.115L12,18.765l-5.1,2.68a1,1,0,0,1-1.451-1.054l.974-5.676L2.3,10.7A1,1,0,0,1,2.856,8.99l5.7-.828L11.1,3A1.04,1.04,0,0,1,12.9,3l2.549,5.164,5.7.828A1,1,0,0,1,21.7,10.7l-4.124,4.02.974,5.676a1,1,0,0,1-.985,1.169Z"
            svgIconViewBox="0 0 24 24"
          />
          <Styled.Rate>{row.totalAvg.toFixed(1)}</Styled.Rate>
          <Styled.ModalOpen
            onClick={() => {
              setModal(!modal);
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </Styled.ModalOpen>
        </Styled.MarginTop>
        {modal === true ? (
          <DetailModal
            satisfaction={row.satisfaction}
            honey={row.honey}
            learning={row.learning}
            team={row.team}
            homework={row.homework}
            difficulty={row.difficulty}
          />
        ) : null}
        <Styled.MarginTop id="bottom">
          <Styled.EvaluationDetail>
            {row.content.split('\n').map((value, index) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            })}
          </Styled.EvaluationDetail>
        </Styled.MarginTop>
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <EditEvaluation setModalIsOpen={setModalIsOpen} row={row} />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Myevaluation;
