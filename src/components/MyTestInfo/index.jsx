import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from 'react-modal';
import { useInfiniteQuery, useMutation } from 'react-query';
import { queryClient } from '../..';
import User from '../../api/User';
import { isLoginStorage } from '../../utils/loginStorage';
import EditTestInfo from '../EditTestInfo';
import ModalStyle from '../ModalStyle';
import Spinner from '../Spinner';
import * as Styled from './styled';

const Testinformation = () => {
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
      enabled: isLoginStorage() === 'true',
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
                <Subject key={row.id} row={row} />
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
    '매우 쉬움': <Styled.DataColor id="cyan">매우 쉬움</Styled.DataColor>,
    쉬움: <Styled.DataColor id="cyan">쉬움</Styled.DataColor>,
    보통: <Styled.DataColor>보통</Styled.DataColor>,
    어려움: <Styled.DataColor id="purple">어려움</Styled.DataColor>,
    '매우 어려움': <Styled.DataColor id="purple">매우 어려움</Styled.DataColor>,
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <Styled.LectureWrapper>
        <Styled.MarginTop id="top">
          <Styled.DeleteButton
            onClick={() => {
              onDelete();
            }}
          >
            삭제
          </Styled.DeleteButton>
          <Styled.EditButton onClick={() => setModalIsOpen(true)}>수정</Styled.EditButton>
          <Styled.TitleWrapper>
            <Styled.YearText>{row.selectedSemester}</Styled.YearText>
            <Styled.YearText>{row.examType}</Styled.YearText>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Major>{row.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{row.professor}</Styled.Professor>
          </Styled.TitleWrapper>
          <div style={{ marginBottom: '30px' }} />
        </Styled.MarginTop>

        <Styled.MobileMarginTop>
          <div style={{ marginBottom: '20px' }}>
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
            <div>
              <Styled.YearText>{row.selectedSemester}</Styled.YearText>
              <Styled.YearText>{row.examType}</Styled.YearText>
            </div>
          </div>
          <div>
            <Styled.Title>{mobileTitle}</Styled.Title>
            <Styled.Major>{row.majorType}</Styled.Major>
            <Styled.Major id="border">|</Styled.Major>
            <Styled.Professor>{row.professor}</Styled.Professor>
          </div>
        </Styled.MobileMarginTop>

        <div>
          <Styled.StarFlex id="top">
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                난이도
                <Styled.StarFlex id="data">{examDifficulty[examDifficultySet]}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
            <Styled.FlexContainer id="col">
              <Styled.StarFlex id="between">
                <div style={{ minWidth: '45px' }}>시험유형</div>
                <Styled.StarFlex id="black">{row.examInfo}</Styled.StarFlex>
              </Styled.StarFlex>
            </Styled.FlexContainer>
          </Styled.StarFlex>
        </div>

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
          // 오버레이나 esc를 누르면 핸들러 동작
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <EditTestInfo setModalIsOpen={setModalIsOpen} row={row} />
        </Modal>
      </Styled.LectureWrapper>
    </div>
  );
};

export default Testinformation;
