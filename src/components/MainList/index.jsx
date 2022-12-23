import { useQuery } from 'react-query';
import LectureContainer from '../LectureContainer';
import Lecture from '../../api/Lecture';
import { fakeLectureList } from '../placeholderData';

const MainList = ({ lecture, checkClass }) => {
  // 메인 강의 리스트 API
  const lectures = Lecture();
  // 선택된 전공
  let major = checkClass === '전체' ? '' : checkClass;
  // 메인 쿼리(key: 정렬,전공)
  const { data, isLoading } = useQuery(
    ['main', lecture, major],
    () => lectures.main(lecture, 1, major),
    {
      keepPreviousData: true,
    }
  );
  // 로딩 컴포넌트
  if (isLoading) return <LectureContainer data={fakeLectureList} />;

  return <LectureContainer data={data?.data} />;
};

export default MainList;
