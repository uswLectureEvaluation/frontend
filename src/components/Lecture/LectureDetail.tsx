import { LectureInfoBox } from 'components';
import { fakeLectureInfo } from 'constants/placeholderData';
import useLectureQuery from 'hooks/useLectureQuery';

const LectureDetail = () => {
  const { Detail } = useLectureQuery();
  const { data, isLoading, isLogin } = Detail();

  if (isLoading || !data) return <LectureInfoBox current={fakeLectureInfo} />;
  return <LectureInfoBox isLogin={isLogin} current={isLogin ? data.data : fakeLectureInfo} />;
};

export default LectureDetail;
