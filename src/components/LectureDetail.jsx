import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Lecture from '../api/Lecture';
import { lectureState } from '../app/recoilStore';
import { isLoginStorage } from '../utils/loginStorage';
import LectureInfoBox from './LectureInfoBox';
import { fakeLectureInfo } from './placeholderData';

const LectureDetail = () => {
  const lectures = Lecture();
  const [searchparams] = useSearchParams();
  const selectId = searchparams.get('id');
  const setLectureInfo = useSetRecoilState(lectureState);
  const isLogin = isLoginStorage();
  const { data: lecture, isLoading } = useQuery(
    ['lecture', 'detail', selectId],
    () => lectures.detail(selectId),
    {
      cacheTime: 0,
      staleTime: 0,
      enabled: isLogin,
      onSuccess: (lecture) => {
        setLectureInfo({
          selectId: selectId,
          lectureName: lecture.data.lectureName,
          professor: lecture.data.professor,
          semesterList: lecture.data.semesterList,
          selectedSemester: '선택',
          satisfaction: 0.5,
          honey: 0.5,
          learning: 0.5,
          team: undefined,
          homework: undefined,
          difficulty: undefined,
          examInfo: '',
          examType: '선택',
          examDifficulty: '',
          content: '',
        });
      },
    }
  );

  if (isLoading) return <LectureInfoBox isLogin={true} current={fakeLectureInfo} />;
  return isLogin ? (
    <LectureInfoBox isLogin={isLogin} current={lecture.data} />
  ) : (
    <LectureInfoBox isLogin={isLogin} current={fakeLectureInfo} />
  );
};

export default LectureDetail;
