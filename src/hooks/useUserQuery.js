import { useInfiniteQuery } from 'react-query';
import { User } from 'api';
import { isLoginStorage } from 'utils/loginStorage';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useUserQuery = () => {
  const user = User();
  // 내가 작성한 평가
  const EvaluationList = () => {
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
    useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);
    return { data, isLoading, isFetchingNextPage, ref };
  };
  return { EvaluationList };
};
export default useUserQuery;
