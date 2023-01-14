import { LectureContainer } from 'components';
import { fakeLectureList } from 'components/placeholderData';
import useLectureQuery from 'hooks/useLectureQuery';
const MainList = () => {
  const { getMain, mainLoading } = useLectureQuery();
  if (mainLoading) return <LectureContainer data={fakeLectureList} />;

  return <LectureContainer data={getMain?.data} />;
};

export default MainList;
