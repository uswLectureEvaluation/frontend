import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { useInfiniteQuery, useMutation } from 'react-query';
import { queryClient } from '..';
import User from '../api/User';
import { isLoginStorage } from '../utils/loginStorage';
import ModalStyle from './ModalStyle';
import Spinner from './Spinner';
import WriteExam from './WriteTestInfo';
import styled from 'styled-components';

const TestInfoList = () => {
  const { ref, inView } = useInView();
  const user = User();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['myInfo', 'myExamInfo'],
    ({ pageParam = 1 }) => user.examInfoList(pageParam),
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
                <TestInfoCard key={row.id} row={row} />
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

export const TestInfoCard = ({ row }) => {
  const user = User();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  let title = row.lectureName;
  let mobileTitle = row.lectureName;
  if (mobileTitle.length >= 8) {
    mobileTitle = row.lectureName.substr(0, 8) + '...';
  }
  if (title.length >= 14) {
    title = row.lectureName.substr(0, 14) + '...';
  }

  const deleteExamInfo = useMutation(() => user.deleteExamInfo(row.id), {
    onSuccess: () => {
      alert('삭제 완료');
      queryClient.invalidateQueries({ queryKey: ['myInfo'] });
    },
    onError: (err) => alert(err.response.data.message),
  });

  const onDelete = () => {
    if (window.confirm('시험정보를 삭제하시겠습니까?') === true) {
      deleteExamInfo.mutate();
    }
  };

  const examDifficultySet = row.examDifficulty;

  const examDifficulty = {
    '매우 쉬움': <DataColor id="cyan">매우 쉬움</DataColor>,
    쉬움: <DataColor id="cyan">쉬움</DataColor>,
    보통: <DataColor>보통</DataColor>,
    어려움: <DataColor id="purple">어려움</DataColor>,
    '매우 어려움': <DataColor id="purple">매우 어려움</DataColor>,
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <LectureWrapper>
        <MarginTop id="top">
          <DeleteButton
            onClick={() => {
              onDelete();
            }}
          >
            삭제
          </DeleteButton>
          <EditButton onClick={() => setModalIsOpen(true)}>수정</EditButton>
          <TitleWrapper>
            <YearText>{row.selectedSemester}</YearText>
            <YearText>{row.examType}</YearText>
            <Title>{title}</Title>
            <Major>{row.majorType}</Major>
            <Major id="border">|</Major>
            <Professor>{row.professor}</Professor>
          </TitleWrapper>
          <div style={{ marginBottom: '30px' }} />
        </MarginTop>

        <MobileMarginTop>
          <div style={{ marginBottom: '20px' }}>
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
            <div>
              <YearText>{row.selectedSemester}</YearText>
              <YearText>{row.examType}</YearText>
            </div>
          </div>
          <div>
            <Title>{mobileTitle}</Title>
            <Major>{row.majorType}</Major>
            <Major id="border">|</Major>
            <Professor>{row.professor}</Professor>
          </div>
        </MobileMarginTop>

        <div>
          <StarFlex id="top">
            <FlexContainer id="col">
              <StarFlex id="between">
                난이도
                <StarFlex id="data">{examDifficulty[examDifficultySet]}</StarFlex>
              </StarFlex>
            </FlexContainer>
            <FlexContainer id="col">
              <StarFlex id="between">
                <div style={{ minWidth: '45px' }}>시험유형</div>
                <StarFlex id="black">{row.examInfo}</StarFlex>
              </StarFlex>
            </FlexContainer>
          </StarFlex>
        </div>

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
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <WriteExam setModalIsOpen={setModalIsOpen} type="update" row={row} />
        </Modal>
      </LectureWrapper>
    </div>
  );
};

export default TestInfoList;

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
  justify-content: center;
  float: left;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
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

export const MobileMarginTop = styled.div`
  display: none;
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding: 14px 24px 0px 24px;
  }
`;

export const DataColor = styled.div`
  font-weight: 500;
  &#cyan {
    color: #336af8;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 11px;
  font-size: 13px;

  font-weight: 300;
  &#top {
    padding: 8px 12px 0px 12px;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
  }
  &#between {
    justify-content: space-between;
  }
  &#black {
    font-weight: 500;
  }
  &#data {
    padding-right: 0px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  min-width: 90px;
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
  font-size: 1rem;

  font-weight: 400;
  line-height: 1.3;
  padding-top: 0.7rem;
  word-break: break-all;
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
`;
