import JwtInterceptors from './ApiController';

const Lecture = () => {
  const instance = JwtInterceptors().instance;

  // 메인페이지
  const main = async (lecture, page, majorType) => {
    return instance.get(`/lecture/all/?option=${lecture}&page=${page}&majorType=${majorType}`);
  };

  // 통합검색결과
  //꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
  const search = async (searchValue, pageParam, option, major) => {
    const result = await instance.get(
      `/lecture/search/?searchValue=${searchValue}&option=${option}&page=${pageParam}&majorType=${major}`
    );
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 검색 결과 자세히보기 (Lecture)
  const detail = (selectId) => {
    return instance.get(`/lecture/?lectureId=${selectId}`);
  };

  // 검색 결과 자세히보기 (Evaluation)
  const evaluation = async (selectId, pageParam) => {
    const result = await instance.get(`/evaluate-posts/?lectureId=${selectId}&page=${pageParam}`);
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 검색 결과 자세히보기 (Exam)
  const examInfo = async (selectId, pageParam) => {
    const result = await instance.get(`/exam-posts/?lectureId=${selectId}&page=${pageParam}`);
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  return { main, search, evaluation, examInfo, detail };
};

export default Lecture;
