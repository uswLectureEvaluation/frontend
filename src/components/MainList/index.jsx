import { mainApi } from '../../api/Api';
import { useQuery } from 'react-query';
import Spinner from '../Spinner';
import LectureContainer from '../LectureContainer';

const MainList = ({ lecture, checkClass }) => {
  let major = checkClass === '전체' ? '' : checkClass;
  const { data, isLoading } = useQuery(['main', lecture, major], () => mainApi(lecture, 1, major));
  if (isLoading) return <Spinner />;

  return <LectureContainer data={data?.data} />;
};

export default MainList;
