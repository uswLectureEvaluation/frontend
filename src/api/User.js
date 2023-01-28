import JwtInterceptors from './ApiController';

const User = () => {
  const instance = JwtInterceptors().instance;
  // 내 정보
  const info = () => {
    return instance.get('/user/my-page');
  };

  // 내가 쓴 글 - 강의평가
  const evaluateList = async (pageParam) => {
    const result = await instance(`/evaluate-posts/written/?page=${pageParam}`);
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 내가 쓴 글 - 시험정보
  const examInfoList = async (pageParam) => {
    const result = await instance.get(`/exam-posts/written/?page=${pageParam}`);
    return {
      data: result,
      isLast: result.data.length < 10,
      nextPage: pageParam + 1,
    };
  };

  // 강의 평가 수정
  const updateEvaluation = (id, data) => {
    return instance.put(`/evaluate-posts/?evaluateIdx=${id}`, data);
  };

  // 강의 평가 작성
  const writeEvaluation = (id, data) => {
    return instance.post(`evaluate-posts/?lectureId=${id}`, data);
  };

  // 강의 평가 삭제
  const deleteEvaluation = (id) => {
    return instance.delete(`/evaluate-posts/?evaluateIdx=${id}`);
  };

  // 강의 평가 신고
  const reportEvaluation = (data) => {
    return instance.post('/user/report/evaluate', data);
  };

  // 시험 정보 신고
  const reportExamInfo = (data) => {
    return instance.post('/user/report/exam', data);
  };

  // 시험 정보 쓰기
  const writeExamInfo = (id, data) => {
    return instance.post(`/exam-posts/?lectureId=${id}`, data);
  };

  // 시험 정보 구매
  const buyTestInfo = (id) => {
    return instance.post(`/exam-posts/purchase/?lectureId=${id}`);
  };

  // 시험 정보 수정
  const UpdateExamInfo = (id, data) => {
    return instance.put(`/exam-posts/?examIdx=${id}`, data);
  };

  // 시험 정보 삭제
  const deleteExamInfo = (id) => {
    return instance.delete(`/exam-posts/?examIdx=${id}`);
  };

  // 시험 정보 구매이력
  const purchasedTestInfo = () => {
    return instance.get('/exam-posts/purchase');
  };

  // 밴 사유 리스트
  const banList = () => {
    return instance.get('user/blacklist-reason');
  };

  // 제재 사유 리스트
  const resList = () => {
    return instance.get('user/restricted-reason');
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
