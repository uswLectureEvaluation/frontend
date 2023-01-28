import { LectureContainer } from 'components';
import { fakeLectureList } from 'constants/placeholderData';
import useLectureQuery from 'hooks/useLectureQuery';
const MainList = () => {
  const { Main } = useLectureQuery();
  const { getMain, mainLoading } = Main();

  return <LectureContainer data={!mainLoading ? getMain?.data : fakeLectureList} />;
};

export default MainList;
