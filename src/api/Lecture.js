import JwtInterceptors from './ApiController';

const Lecture = () => {
  const instance = JwtInterceptors().instance;

  const main = async (lecture, page, majorType) => {
    return instance({
      url: `/lecture/all/?option=${lecture}&page=${page}&majorType=${majorType}`,
      method: 'GET',
    });
  };

  const mainInfinite = async (lecture, pageParam, majorType) => {
    const result = await instance({
      url: `/lecture/all/?option=${lecture}&page=${pageParam}&majorType=${majorType}`,
      method: 'GET',
    });
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 통합검색결과Api
  //꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
  const search = async (searchValue, pageParam, option, major) => {
    const result = await instance({
      url: `/lecture/search/?searchValue=${searchValue}&option=${option}&page=${pageParam}&majorType=${major}`,
      method: 'GET',
    });
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 검색 결과 자세히보기 (Lecture)
  const detail = (selectId) => {
    return instance({
      url: `/lecture/?lectureId=${selectId}`,
      method: 'GET',
    });
  };

  // 검색 결과 자세히보기 (Evaluation)
  const evaluation = async (selectId, pageParam) => {
    const result = await instance({
      url: `/evaluate-posts/?lectureId=${selectId}&page=${pageParam}`,
      method: 'GET',
    });
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 검색 결과 자세히보기 (Exam)
  const examInfo = async (selectId, pageParam) => {
    const result = await instance({
      url: `/exam-posts/?lectureId=${selectId}&page=${pageParam}`,
      method: 'GET',
    });
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  return { main, mainInfinite, search, evaluation, examInfo, detail };
};

export default Lecture;
