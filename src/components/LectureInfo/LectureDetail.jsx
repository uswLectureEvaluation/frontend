import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Lecture from '../../api/Lecture';
import { lectureState } from '../../app/recoilStore';
import LectureInfoBox from '../LectureInfoBox';
import { fakeLectureInfo } from '../placeholderData';

const LectureDetail = () => {
  const lectures = Lecture();
  const [searchparams] = useSearchParams();
  const selectId = searchparams.get('id');
  const setLectureInfo = useSetRecoilState(lectureState);
  const { data: lecture, isLoading } = useQuery(
    ['lecture', 'detail', selectId],
    () => lectures.detail(selectId),
    {
      onSuccess: (lecture) => {
        setLectureInfo({
          selectId: selectId,
          lectureName: lecture.data.lectureName,
          professor: lecture.data.professor,
          semesterList: lecture.data.semesterList,
        });
      },
    }
  );

  if (isLoading) return <LectureInfoBox current={fakeLectureInfo} />;
  return <LectureInfoBox current={lecture.data} />;
};

export default LectureDetail;
