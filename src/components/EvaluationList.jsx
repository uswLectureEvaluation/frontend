import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { useInfiniteQuery, useMutation } from 'react-query';
import StarRatings from 'react-star-ratings';
import User from '../api/User';
import { isLoginStorage } from '../utils/loginStorage.js';
import ModalStyle from './ModalStyle';
import Spinner from './Spinner';
import WriteEvaluation from './WriteEvaluation';
import styled from 'styled-components';
import { queryClient } from '..';

export const DetailModal = (props) => {
  const teamSet = props.team;
  const homeworkSet = props.homework;
  const difficultySet = props.difficulty;
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
    <StarFlex id="top">
      <FlexContainer id="col">
        <StarFlex id="between">
          만족도
          <PaddingRight />
          <Rate id="modal">{props.satisfaction?.toFixed(1)}</Rate>
        </StarFlex>
        <StarFlex id="between">조모임 {team[teamSet]}</StarFlex>
      </FlexContainer>
      <FlexContainer id="col">
        <StarFlex id="between">
          꿀강 지수
          <PaddingRight />
          <Rate id="modal">{props.honey?.toFixed(1)}</Rate>
        </StarFlex>
        <StarFlex id="between">과제 {homework[homeworkSet]}</StarFlex>
      </FlexContainer>
      <FlexContainer id="col">
        <StarFlex id="between">
          배움 지수
          <PaddingRight />
          <Rate id="modal">{props.learning?.toFixed(1)}</Rate>
        </StarFlex>
        <StarFlex id="between">학점 {difficulty[difficultySet]}</StarFlex>
      </FlexContainer>
    </StarFlex>
  );
};

const EvaluationList = () => {
  const user = User();

  const { ref, inView } = useInView();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['myInfo', 'myEvaluation'],
    ({ pageParam = 1 }) => user.evaluateList(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
      enabled: isLoginStorage(),
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
        <NoEvaluation>아직 평가한 강의가 없어요.</NoEvaluation>
      ) : (
        data?.pages.map((page) => {
          let data = page.data.data;
          return (
            <Wrapper key={page.nextPage}>
              {data.map((row) => (
                <EvaluationCard key={row.id} row={row} />
              ))}
            </Wrapper>
          );
        })
      )}
      <div ref={ref} style={{ marginBottom: '10px' }}>
        {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
      </div>
    </>
  );
};

export const EvaluationCard = ({ row }) => {
  const user = User();
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
  const deleteEvaluate = useMutation(() => user.deleteEvaluation(row.id), {
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
      <LectureWrapper>
        <MarginTop id="top">
          <MobileWrapper id="top">
            <YearText>{row.selectedSemester}</YearText>
            <div>
              <DeleteButton
                onClick={() => {
                  onDelete();
                }}
              >
                삭제
              </DeleteButton>
              <EditButton onClick={() => setModalIsOpen(true)}>수정</EditButton>
            </div>
          </MobileWrapper>
          <MobileWrapper>
            <Title>{mobileTitle}</Title>
            <Major>{row.majorType}</Major>
            <Major id="border">|</Major>
            <Professor>{row.professor}</Professor>
          </MobileWrapper>

          <TitleWrapper>
            <YearText>{row.selectedSemester}</YearText>
            <Title>{title}</Title>
            <Major>{row.majorType}</Major>
            <Major id="border">|</Major>
            <Professor>{row.professor}</Professor>
          </TitleWrapper>
          <DeleteButton
            id="pc"
            onClick={() => {
              onDelete();
            }}
          >
            삭제
          </DeleteButton>
          <EditButton id="pc" onClick={() => setModalIsOpen(true)}>
            수정
          </EditButton>

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
          <Rate>{row.totalAvg?.toFixed(1)}</Rate>
          <ModalOpen
            onClick={() => {
              setModal(!modal);
            }}
          >
            {modal === true ? '간략히' : '자세히'}
          </ModalOpen>
        </MarginTop>
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
        <MarginTop id="bottom">
          <EvaluationDetail>
            {row.content.split('\n').map((value, index) => {
              return (
                <div key={index}>
                  {value}
                  <br />
                </div>
              );
            })}
          </EvaluationDetail>
        </MarginTop>
        <Modal
          isOpen={modalIsOpen}
          style={ModalStyle}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <WriteEvaluation type="update" setModalIsOpen={setModalIsOpen} row={row} />
        </Modal>
      </LectureWrapper>
    </div>
  );
};

export default EvaluationList;

export const ModalOpen = styled.span`
  font-size: 12px;

  font-weight: 400;
  color: #222222;
  text-decoration: underline;
  margin-left: 11px;
  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  margin: 0px 20px;
`;

export const NoEvaluation = styled.div`
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  float: left;
  align-items: center;
  @media only screen and (max-width: 550px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 550px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    float: left;
    align-items: center;
    margin-bottom: 10px;
    &#top {
      justify-content: space-between;
    }
  }
`;

export const Title = styled.span`
  font-size: 16px;
  margin-right: 8px;
`;

export const Major = styled.span`
  font-size: 14px;

  font-weight: 400;
  color: #515151;
  &#border {
    color: #e0e0e0;
    padding: 0px 5px;
  }
`;

export const Professor = styled.span`
  font-size: 14px;

  font-weight: 400;
  color: #515151;
`;

export const Rate = styled.span`
  color: #336af8;
  font-size: 18px;

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
  }
  &#bottom {
    padding: 0px 24px 14px 24px;
    margin-top: 5px;
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
  font-size: 14px;

  font-weight: 400;
  padding: 4.5px 13px 4.5px 13px;
  border-radius: 12.5px;
  background-color: #eee;
  margin-right: 12px;
`;

export const EvaluationDetail = styled.div`
  display: flex;
  flex-direction: column;

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

  font-weight: 400;
  text-align: center;
  color: #a3a3a3;
  float: right;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  &#pc {
    @media only screen and (max-width: 550px) {
      display: none;
    }
  }
`;
export const DeleteButton = styled.span`
  font-size: 12px;

  font-weight: 400;
  text-align: center;
  color: #a3a3a3;
  float: right;
  &:hover {
    cursor: pointer;
  }
  &#pc {
    @media only screen and (max-width: 550px) {
      display: none;
    }
  }
`;
