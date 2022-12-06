import { useQuery } from 'react-query';
import Spinner from '../Spinner';
import LectureContainer from '../LectureContainer';
import Lecture from '../../api/Lecture';

const MainList = ({ lecture, checkClass }) => {
  // 메인 강의 리스트 API
  const lectures = Lecture();
  // 선택된 전공
  let major = checkClass === '전체' ? '' : checkClass;
  // 메인 쿼리(key: 정렬,전공)
  const { data, isLoading } = useQuery(['main', lecture, major], () =>
    lectures.main(lecture, 1, major)
  );
  // 로딩 컴포넌트
  if (isLoading) return <Spinner />;

  return <LectureContainer data={data?.data} />;
};

export default MainList;
