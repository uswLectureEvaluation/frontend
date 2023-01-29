import JwtInterceptors from './ApiController';

const Lecture = () => {
  const instance = JwtInterceptors().instance;

  // 메인페이지
  const main = (lecture, page, majorType) => {
    try {
      return instance.get(`/lecture/all/?option=${lecture}&page=${page}&majorType=${majorType}`);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // 통합검색결과
  //꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
  const search = async (searchValue, pageParam, option, major) => {
    try {
      const res = await instance.get(
        `/lecture/search/?searchValue=${searchValue}&option=${option}&page=${pageParam}&majorType=${major}`
      );
      return {
        data: res,
        isLast: res.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // 검색 결과 자세히보기 (Lecture)
  const detail = (selectId) => {
    try {
      return instance.get(`/lecture/?lectureId=${selectId}`);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // 검색 결과 자세히보기 (Evaluation)
  const evaluation = async (selectId, pageParam) => {
    try {
      const result = await instance.get(`/evaluate-posts/?lectureId=${selectId}&page=${pageParam}`);
      return {
        data: result,
        isLast: result.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // 검색 결과 자세히보기 (Exam)
  const examInfo = async (selectId, pageParam) => {
    try {
      const result = await instance.get(`/exam-posts/?lectureId=${selectId}&page=${pageParam}`);
      return {
        data: result,
        isLast: result.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return { main, search, evaluation, examInfo, detail };
};

export default Lecture;
