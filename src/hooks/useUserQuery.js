import { useInfiniteQuery } from 'react-query';
import { User } from 'api';
import { isLoginStorage } from 'utils/loginStorage';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CACHE_TIME } from 'constants/cacheTime';

const useUserQuery = () => {
  const user = User();
  // 내가 작성한 평가
  const EvaluationList = () => {
    const { ref, inView } = useInView();
    const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      ['myInfo', 'myEvaluation'],
      ({ pageParam = 1 }) => user.evaluateList(pageParam),
      userQueryOption
    );
    useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);
    return { data, isLoading, isFetchingNextPage, ref };
  };

  // 내가 작성한 시험정보
  const TestInfoList = () => {
    const { ref, inView } = useInView();
    const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
      ['myInfo', 'myExamInfo'],
      ({ pageParam = 1 }) => user.examInfoList(pageParam),
      userQueryOption
    );
    useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);
    return { data, isLoading, isFetchingNextPage, ref };
  };

  return { EvaluationList, TestInfoList };
};
export default useUserQuery;

const userQueryOption = {
  getNextPageParam: (lastPage) => {
    if (!lastPage.isLast) return lastPage.nextPage;
    return undefined;
  },
  enabled: isLoginStorage(),
  cacheTime: CACHE_TIME.MINUTE_30,
  staleTime: CACHE_TIME.MINUTE_30,
};
