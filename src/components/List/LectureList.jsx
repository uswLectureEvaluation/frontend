import { useEffect } from 'react';
import { LectureContainer } from 'components';
import { fakeLectureList } from 'constants/placeholderData';
import { FlexWrap } from 'styles/common';
import useLectureQuery from 'hooks/useLectureQuery';

const LectureList = ({ setCount }) => {
  const { Search } = useLectureQuery();
  const { getSearch, searchLoading, nextLoading, value, ref } = Search();
  const count = getSearch?.pages[0].data.count;

  useEffect(() => {
    setCount(count);
  }, [count, setCount]);

  if (searchLoading) return <LectureContainer data={fakeLectureList} />;
  return count ? (
    <>
      {getSearch.pages.map((page) => (
        <LectureContainer key={page.nextPage} data={page.data.data} />
      ))}
      <div ref={ref} style={{ marginBottom: '10px' }}>
        {nextLoading ? <LectureContainer data={fakeLectureList} id="nextPage" /> : null}
      </div>
    </>
  ) : (
    <FlexWrap id="none">{value}에 대한 검색결과가 없습니다</FlexWrap>
  );
};

export default LectureList;
