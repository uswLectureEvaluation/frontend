import { useEffect } from 'react';
import styled from 'styled-components';
import Button from './Button';
import SearchTestInfoList from './SearchTestInfoList';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery, useMutation } from 'react-query';
import Spinner from './Spinner';
import { queryClient } from '..';
import Lecture from '../api/Lecture';
import User from '../api/User';
import { isLoginStorage } from '../utils/loginStorage';
import { fakeEvaluationList } from './placeholderData';

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
    <Wrapper>
      <Content>
        시험 정보 열람시
        <br />
        <Color> 20 포인트</Color>가 차감됩니다.
      </Content>
      <BtWidth>
        <Button color="#336af8" onClick={unlock}>
          포인트 사용하기 (-20P)
        </Button>
      </BtWidth>
    </Wrapper>
  );
};

export const NoTestInfo = () => (
  <Wrapper>
    <Content>등록된 시험정보가 없어요</Content>
  </Wrapper>
);

const IsTestInfo = ({ selectId, setWritten }) => {
  const lectures = Lecture();
  const isLogin = isLoginStorage();
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

  if (isLoading) return <Spinner />;
  const pages = data?.pages;
  const listLength = data?.pages[0].data.data.length;
  const examDataExist = data?.pages[0].data.examDataExist;
  if (!isLogin) {
    return <SearchTestInfoList page={fakeEvaluationList} />;
  } else if (listLength === 0 && examDataExist) {
    return <NotUsePoint selectId={selectId} />;
  } else if (listLength === 0 && !examDataExist) {
    return <NoTestInfo />;
  } else {
    return (
      <>
        {pages.map((page) => (
          <SearchTestInfoList isLogin={isLogin} key={page.nextPage} page={page.data.data} />
        ))}
        <div ref={ref} style={{ marginBottom: '10px' }}>
          {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
        </div>
      </>
    );
  }
};
export default IsTestInfo;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Color = styled.span`
  color: #336af8;
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

export const BtWidth = styled.div`
  margin: 0 auto;
  width: 30%;

  @media only screen and (max-width: 550px) {
    width: 70%;
  }
`;
