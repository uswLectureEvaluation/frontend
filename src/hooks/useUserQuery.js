import { useInfiniteQuery, useMutation } from 'react-query';
import { User } from 'api';
import { isLoginStorage } from 'utils/loginStorage';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { queryClient } from 'index';

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

  // 내가 작성한 시험정보
  const TestInfoList = () => {
    const { ref, inView } = useInView();
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
    useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);
    return { data, isLoading, isFetchingNextPage, ref };
  };

  // 평가 삭제
  const DeleteEvaluate = (id) => {
    const { mutate: remove } = useMutation(() => user.deleteEvaluation(id), {
      onSuccess: () => {
        alert('삭제 완료');
        queryClient.invalidateQueries({ queryKey: ['myInfo'] });
      },
      onError: (err) => alert(err.response.data.message),
    });
    return { remove };
  };

  // 시험정보 삭제
  const DeleteTestInfo = (id) => {
    const { mutate: remove } = useMutation(() => user.deleteExamInfo(id), {
      onSuccess: () => {
        alert('삭제 완료');
        queryClient.invalidateQueries({ queryKey: ['myInfo'] });
      },
      onError: (err) => alert(err.response.data.message),
    });
    return { remove };
  };

  // 시험정보 구매
  const BuyTestInfo = (id) => {
    const { mutate: buy } = useMutation(() => user.buyTestInfo(id), {
      onSuccess: () => {
        alert('구매 완료');
        queryClient.invalidateQueries(['lecture', 'examList', id]);
      },
    });
    return { buy };
  };
  return { EvaluationList, TestInfoList, DeleteEvaluate, DeleteTestInfo, BuyTestInfo };
};
export default useUserQuery;
