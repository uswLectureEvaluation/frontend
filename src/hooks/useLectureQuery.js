import { Lecture } from 'api';
import { useEffect } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { isLoginStorage } from 'utils/loginStorage';
import { useSetRecoilState } from 'recoil';
import { lectureState } from 'app/recoilStore';

const useLectureQuery = () => {
  const [searchParams] = useSearchParams();
  const setLectureInfo = useSetRecoilState(lectureState);
  const lecture = Lecture();
  const searchValue = searchParams.get('q') || '';
  const selectId = searchParams.get('id');
  const option = searchParams.get('option') || 'modifiedDate';
  const majorType = searchParams.get('majorType') || '전체';
  const major = majorType === '전체' ? '' : majorType;
  const value = searchValue === 'all' ? '' : searchValue;

  // 메인 쿼리(key: 정렬,전공)
  const Main = () => {
    const { data: getMain, isLoading: mainLoading } = useQuery(
      ['main', option, major],
      () => lecture.main(option, 1, major),
      { keepPreviousData: true }
    );
    return { getMain, mainLoading };
  };

  // 검색 쿼리(key: 검색어,정렬,전공)
  const Search = () => {
    const { ref, inView } = useInView();
    const {
      data: getSearch,
      isLoading: searchLoading,
      fetchNextPage: getNextSearch,
      isFetchingNextPage: nextLoading,
    } = useInfiniteQuery(
      ['search', value, option, major],
      ({ pageParam = 1 }) => lecture.search(value, pageParam, option, major),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.isLast) return lastPage.nextPage;
          return undefined;
        },
        keepPreviousData: true,
      }
    );
    useEffect(() => {
      if (inView) {
        getNextSearch();
      }
    }, [inView, getNextSearch]);
    return { getSearch, searchLoading, nextLoading, value, ref };
  };

  // 강의 상세 쿼리(key: 강의id)
  const Detail = () => {
    const { data, isLoading } = useQuery(
      ['lecture', 'detail', selectId],
      () => lecture.detail(selectId),
      {
        cacheTime: 0,
        staleTime: 0,
        enabled: isLoginStorage(),
        onSuccess: (lecture) => {
          setLectureInfo({
            id: selectId,
            lectureName: lecture.data.lectureName,
            professor: lecture.data.professor,
            semesterList: lecture.data.semesterList,
            selectedSemester: '선택',
            satisfaction: 0.5,
            honey: 0.5,
            learning: 0.5,
            team: undefined,
            homework: undefined,
            difficulty: undefined,
            examInfo: '',
            examType: '선택',
            examDifficulty: '',
            content: '',
          });
        },
      }
    );
    return { data, isLoading, isLogin: isLoginStorage() };
  };

  // 강의평가 쿼리(key: 강의id)
  const Evaluation = (id, setWritten) => {
    const { ref, inView } = useInView();
    const { data, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery(
      ['lecture', 'evaluationList', id],
      ({ pageParam = 1 }) => lecture.evaluation(id, pageParam),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.isLast) return lastPage.nextPage;
          return undefined;
        },
        onSuccess: (data) => setWritten(data.pages[0].data.written),
        cacheTime: 0,
        staleTime: 0,
        enabled: isLoginStorage(),
      }
    );
    useEffect(() => {
      if (inView && isLoginStorage()) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);
    return { data, isFetchingNextPage, isLoading, ref };
  };

  // 시험정보 쿼리(key: 강의id)
  const TestInfo = (id, setWritten) => {
    const { ref, inView } = useInView();
    const { data, isFetchingNextPage, isLoading, fetchNextPage } = useInfiniteQuery(
      ['lecture', 'examList', id],
      ({ pageParam = 1 }) => lecture.examInfo(id, pageParam),
      {
        getNextPageParam: (lastPage) => {
          if (!lastPage.isLast) return lastPage.nextPage;
          return undefined;
        },
        onSuccess: (data) => setWritten(data.pages[0].data.written),
        cacheTime: 0,
        staleTime: 0,
        enabled: isLoginStorage(),
      }
    );
    useEffect(() => {
      if (inView && isLoginStorage()) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);
    return { data, isFetchingNextPage, isLoading, ref };
  };
  return { Main, Search, Detail, Evaluation, TestInfo };
};

export default useLectureQuery;
