import { AxiosError } from 'axios';
import { ExamPostsResponse } from 'types/exam';
import { MainLecture, MainLectureItem } from 'types/lecture';
import JwtInterceptors from './ApiController';

const Lecture = () => {
  const instance = JwtInterceptors().instance;

  // 메인페이지
  const main = (lecture = 'modifiedDate', page = 1, majorType = '') => {
    try {
      return instance.get<MainLecture>(
        `/lecture/all/?option=${lecture}&page=${page}&majorType=${majorType}`
      );
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 통합검색결과
  //꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
  const search = async (
    searchValue = '{교수이름or과목이름}',
    pageParam = 1,
    option = 'modifiedDate',
    major: string
  ) => {
    try {
      const { data } = await instance.get(
        `/lecture/search/?searchValue=${searchValue}&option=${option}&page=${pageParam}&majorType=${major}`
      );
      return {
        data,
        isLast: data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 검색 결과 자세히보기 (Lecture)
  const detail = (selectId: string) => {
    try {
      return instance.get<MainLectureItem>(`/lecture/?lectureId=${selectId}`);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 검색 결과 자세히보기 (Evaluation)
  const evaluation = async (selectId: string, pageParam = 1) => {
    try {
      const result = await instance.get(`/evaluate-posts/?lectureId=${selectId}&page=${pageParam}`);
      return {
        data: result,
        isLast: result.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 검색 결과 자세히보기 (Exam)
  const examInfo = async (selectId: string, pageParam = 1) => {
    try {
      const data: ExamPostsResponse = await instance.get(
        `/exam-posts/?lectureId=${selectId}&page=${pageParam}`
      );
      return {
        data,
        isLast: data.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  return { main, search, evaluation, examInfo, detail };
};

export default Lecture;
