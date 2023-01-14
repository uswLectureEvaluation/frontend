import { Lecture } from 'api';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

const useLectureQuery = () => {
  const [searchParams] = useSearchParams();
  const lecture = Lecture();
  const option = searchParams.get('option') || 'modifiedDate';
  const majorType = searchParams.get('majorType') || '전체';
  const major = majorType === '전체' ? '' : majorType;

  // 메인 쿼리(key: 정렬,전공)
  const { data: getMain, isLoading: mainLoading } = useQuery(
    ['main', option, major],
    () => lecture.main(option, 1, major),
    { keepPreviousData: true }
  );

  return { getMain, mainLoading };
};

export default useLectureQuery;
