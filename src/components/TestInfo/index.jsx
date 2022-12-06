import { useEffect } from 'react';
import * as Styled from './styled';
import Button from '../Button';
import SearchTestList from '../../components/SearchTestList';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useMutation } from 'react-query';
import Spinner from '../Spinner';
import { lectureState } from '../../app/recoilStore';
import { queryClient } from '../..';
import Lecture from '../../api/Lecture';
import User from '../../api/User';

export const NotUsePoint = ({ selectId }) => {
  const user = User();
  const purchaseTestInfo = useMutation(() => user.buyTestInfo(selectId), {
    onSuccess: () => {
      alert('구매 완료');
      queryClient.invalidateQueries(['lecture', 'examList', selectId]);
    },
  });
  const unlock = () => {
    if (window.confirm('시험정보를 열람하시겠습니까?')) purchaseTestInfo.mutate();
  };

  return (
    <Styled.Wrapper>
      <Styled.Content>
        시험 정보 열람시
        <br />
        <Styled.Color> 20 포인트</Styled.Color>가 차감됩니다.
      </Styled.Content>
      <Styled.BtWidth>
        <Button color="#336af8" onClick={unlock}>
          포인트 사용하기 (-20P)
        </Button>
      </Styled.BtWidth>
    </Styled.Wrapper>
  );
};

export const NoTestInfo = () => (
  <Styled.Wrapper>
    <Styled.Content>등록된 시험정보가 없어요</Styled.Content>
  </Styled.Wrapper>
);

const TestInfo = ({ selectId, setWritten }) => {
  const lectures = Lecture();
  const lectureInfo = useRecoilValue(lectureState);
  const { ref, inView } = useInView();
  const { data, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery(
    ['lecture', 'examList', selectId],
    ({ pageParam = 1 }) => lectures.examInfo(selectId, pageParam),
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
  const listLength = data?.pages[0].data.data.length;
  const examDataExist = data?.pages[0].data.examDataExist;

  if (listLength === 0 && examDataExist) {
    return <NotUsePoint selectId={selectId} />;
  } else if (listLength === 0 && !examDataExist) {
    return <NoTestInfo />;
  } else {
    return (
      <>
        {pages.map((page) => (
          <SearchTestList key={Math.random()} page={page.data.data} />
        ))}
        <div ref={ref} style={{ marginBottom: '10px' }}>
          {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
        </div>
      </>
    );
  }
};
export default TestInfo;
