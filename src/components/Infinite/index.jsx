import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import Spinner from '../Spinner';
import { useInView } from 'react-intersection-observer';
import LectureContainer, { FlexWrap } from '../LectureContainer';
import { useSearchParams } from 'react-router-dom';
import Lecture from '../../api/Lecture';

const Infinite = ({ setCount }) => {
  const lectures = Lecture();
  const { ref, inView } = useInView();
  const [searchParams] = useSearchParams();
  const value = searchParams.get('q');
  const option = searchParams.get('option');
  const checkClass = searchParams.get('majorType');

  let major = checkClass === '전체' ? '' : checkClass;
  let searchValue = value === 'all' ? '' : value;

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ['search', searchValue, option, major],
    ({ pageParam = 1 }) => lectures.search(searchValue, pageParam, option, major),
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
        <LectureContainer key={page.nextPage} data={page.data.data} />
      ))}
      <div ref={ref} style={{ marginBottom: '10px' }}>
        {isFetchingNextPage ? <Spinner id="nextPage" /> : null}
      </div>
    </>
  ) : (
    <FlexWrap id="none">{value}에 대한 검색결과가 없습니다</FlexWrap>
  );
};

export default Infinite;
