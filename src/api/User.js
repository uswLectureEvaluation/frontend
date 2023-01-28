import JwtInterceptors from './ApiController';

const User = () => {
  const instance = JwtInterceptors().instance;
  // 내정보Api
  const info = () => {
    return instance({
      url: `/user/my-page`,
      method: 'GET',
    });
  };

  // 내가쓴글-강의평가Api
  const evaluateList = async (pageParam) => {
    const result = await instance({
      url: `/evaluate-posts/written/?page=${pageParam}`,
      method: 'GET',
    });
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 내가쓴글-시험정보Api
  const examInfoList = async (pageParam) => {
    const result = await instance({
      url: `/exam-posts/written/?page=${pageParam}`,
      method: 'GET',
    });
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  //강의평가수정 api 미완
  const updateEvaluation = (
    semester,
    satisfaction,
    learning,
    honey,
    team,
    difficulty,
    homework,
    content,
    id
  ) => {
    const data = {
      selectedSemester: semester,
      satisfaction,
      learning,
      honey,
      team,
      difficulty,
      homework,
      content,
    };

    return instance({
      url: `/evaluate-posts/?evaluateIdx=${id}`,
      method: 'PUT',
      data: data,
    });
  };

  //강의평가작성 api
  const writeEvaluation = (
    selectId,
    lectureName,
    professor,
    semester,
    satisfaction,
    learning,
    honey,
    team,
    difficulty,
    homework,
    content
  ) => {
    const data = {
      lectureName,
      professor,
      selectedSemester: semester,
      satisfaction,
      learning,
      honey,
      team,
      difficulty,
      homework,
      content,
    };
    return instance({
      url: `evaluate-posts/?lectureId=${selectId}`,
      method: 'POST',
      data: data,
    });
  };

  // 강의 평가 삭제 api
  const deleteEvaluation = (id) => {
    return instance({
      url: `/evaluate-posts/?evaluateIdx=${id}`,
      method: 'DELETE',
    });
  };

  //강의평가 신고 api
  const reportEvaluation = (evaluateIdx, content) => {
    const data = {
      evaluateIdx,
      content,
    };

    return instance({
      url: `/user/report/evaluate`,
      method: 'POST',
      data: data,
    });
  };

  //시험정보 신고 api
  const reportExamInfo = (examIdx, content) => {
    const data = {
      examIdx,
      content,
    };

    return instance({
      url: `/user/report/exam`,
      method: 'POST',
      data: data,
    });
  };

  //시험정보쓰기 api
  const writeExamInfo = (
    selectId,
    lectureName,
    professor,
    semester,
    examInfo,
    examType,
    examDifficulty,
    content
  ) => {
    const data = {
      lectureName,
      professor,
      selectedSemester: semester,
      examInfo,
      examType,
      examDifficulty,
      content,
    };

    return instance({
      url: `/exam-posts/?lectureId=${selectId}`,
      method: 'POST',
      data: data,
    });
  };

  //시험정보 구매
  const buyTestInfo = (selectId) => {
    return instance({
      url: `/exam-posts/purchase/?lectureId=${selectId}`,
      method: 'POST',
    });
  };

  //시험정보수정 api 미완
  const UpdateExamInfo = (semester, examInfo, examType, examDifficulty, content, id) => {
    const data = {
      selectedSemester: semester,
      examInfo,
      examType,
      examDifficulty,
      content,
    };

    return instance({
      url: `/exam-posts/?examIdx=${id}`,
      method: 'PUT',
      data: data,
    });
  };

  // 시험정보 삭제
  const deleteExamInfo = (id) => {
    return instance({
      url: `/exam-posts/?examIdx=${id}`,
      method: 'DELETE',
    });
  };

  //시험정보 구매이력
  const purchasedTestInfo = () => {
    return instance({
      url: `/exam-posts/purchase`,
      method: 'GET',
    });
  };

  const banList = () => {
    return instance({
      url: `user/blacklist-reason`,
      method: 'GET',
    });
  };

  const resList = () => {
    return instance({
      url: `user/restricted-reason`,
      method: 'GET',
    });
  };

  return {
    info,
    evaluateList,
    examInfoList,
    updateEvaluation,
    UpdateExamInfo,
    reportEvaluation,
    reportExamInfo,
    deleteEvaluation,
    deleteExamInfo,
    writeEvaluation,
    writeExamInfo,
    purchasedTestInfo,
    banList,
    resList,
    buyTestInfo,
  };
};

export default User;
