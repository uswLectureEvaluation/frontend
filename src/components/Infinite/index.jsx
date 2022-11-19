import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { searchApi } from '../../api/Api';
import Spinner from '../Spinner';
import { useInView } from 'react-intersection-observer';
import LectureContainer, { FlexWrap } from '../LectureContainer';

const Infinite = ({ lecture, checkClass, option, setCount }) => {
  const { ref, inView } = useInView();

  let major = checkClass === '전체' ? '' : checkClass;
  let searchValue = lecture.search_value === 'all' ? '' : lecture.search_value;

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['search', searchValue, option, major],
    ({ pageParam = 1 }) => searchApi(searchValue, pageParam, option, major),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLast) return lastPage.nextPage;
        return undefined;
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  const count = data?.pages[0].data.count;
  useEffect(() => {
    setCount(count);
  }, [count, setCount]);
  if (isLoading) return <Spinner />;

  return count ? (
    <>
      {data.pages.map((page) => (
        <LectureContainer key={page.data.count} data={page.data.data} />
      ))}
      <div ref={ref} style={{ marginBottom: '10px' }}>
        {isFetchingNextPage ? <Spinner /> : null}
      </div>
    </>
  ) : (
    <FlexWrap id="none">{lecture.search_value}에 대한 검색결과가 없습니다</FlexWrap>
  );
};

export default Infinite;
