import { LectureInfoBox } from 'components';
import { fakeLectureInfo } from 'components/placeholderData';
import useLectureQuery from 'hooks/useLectureQuery';

const LectureDetail = () => {
  const { Detail } = useLectureQuery();
  const { data: lecture, isLoading, isLogin } = Detail();
  if (isLoading) return <LectureInfoBox isLogin={true} current={fakeLectureInfo} />;
  return <LectureInfoBox isLogin={isLogin} current={isLogin ? lecture.data : fakeLectureInfo} />;
};

export default LectureDetail;
