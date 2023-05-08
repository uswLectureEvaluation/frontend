import { queryClient } from 'index';
import JwtInterceptors from './ApiController';
import { AxiosError } from 'axios';
import {
  EvaluatePostCreate,
  EvaluatePostUpdate,
  EvaluateReportCreate,
  ExamPostCreate,
  ExamPostUpdate,
  ExamReportCreate,
} from 'types/user';
import { AxiosResponseSuccess } from 'types/common';

const User = () => {
  const instance = JwtInterceptors().instance;
  // 내 정보
  const info = () => {
    try {
      return instance.get('/user/my-page');
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 내가 쓴 글 - 강의평가
  const evaluateList = async (pageParam = 1) => {
    try {
      const res = await instance(`/evaluate-posts/written/?page=${pageParam}`);
      return {
        data: res,
        isLast: res.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 내가 쓴 글 - 시험정보
  const examInfoList = async (pageParam = 1) => {
    try {
      const res = await instance.get(`/exam-posts/written/?page=${pageParam}`);
      return {
        data: res,
        isLast: res.data.length < 10,
        nextPage: pageParam + 1,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 시험 정보 구매이력
  const purchasedTestInfo = () => {
    try {
      return instance.get('/exam-posts/purchase');
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 밴 사유 리스트
  const banList = () => {
    try {
      return instance.get('user/blacklist-reason');
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 제재 사유 리스트
  const resList = () => {
    try {
      return instance.get('user/restricted-reason');
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error(axiosError.message);
    }
  };

  // 강의 평가 수정
  const updateEvaluation = async (id: string, data: EvaluatePostUpdate) => {
    try {
      const res = await instance.put(`/evaluate-posts/?evaluateIdx=${id}`, data);
      if (res) {
        alert('수정 완료');
        queryClient.invalidateQueries(['myInfo', 'myEvaluation']);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 강의 평가 작성
  const writeEvaluation = async (id: string, data: EvaluatePostCreate) => {
    try {
      const res = await instance.post(`/evaluate-posts/?lectureId=${id}`, data);
      if (res) {
        alert('작성 완료');
        queryClient.invalidateQueries(['lecture', 'evaluationList', id]);
        queryClient.invalidateQueries(['lecture', 'detail', id]);
        queryClient.invalidateQueries(['myInfo']);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 강의 평가 삭제
  const deleteEvaluation = async (id: string) => {
    try {
      const res = await instance.delete(`/evaluate-posts/?evaluateIdx=${id}`);
      if (res) {
        alert('삭제 완료');
        queryClient.invalidateQueries({ queryKey: ['myInfo'] });
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 강의 평가 신고
  const reportEvaluation = async (data: EvaluateReportCreate) => {
    try {
      const res = await instance.post('/user/report/evaluate', data);
      if (res) {
        alert('신고 완료');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 시험 정보 신고
  const reportExamInfo = async (data: ExamReportCreate) => {
    try {
      const res = await instance.post('/user/report/exam', data);
      if (res) {
        alert('신고 완료');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 시험 정보 쓰기
  const writeExamInfo = async (id: string, data: ExamPostCreate) => {
    try {
      const res = await instance.post(`/exam-posts/?lectureId=${id}`, data);
      if (res) {
        alert('작성 완료');
        queryClient.invalidateQueries(['lecture', 'examList', id]);
        queryClient.invalidateQueries(['lecture', 'detail', id]);
        queryClient.invalidateQueries(['myInfo']);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 시험 정보 구매
  const buyTestInfo = async (id: string) => {
    try {
      const res: AxiosResponseSuccess = await instance.post(
        `/exam-posts/purchase/?lectureId=${id}`
      );
      if (res.success) {
        alert('구매 완료');
        queryClient.invalidateQueries(['lecture', 'examList', id]);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 시험 정보 수정
  const UpdateExamInfo = async (id: string, data: ExamPostUpdate) => {
    try {
      const res = await instance.put(`/exam-posts/?examIdx=${id}`, data);
      if (res) {
        alert('수정 완료');
        queryClient.invalidateQueries(['myInfo', 'myExamInfo']);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
  };

  // 시험 정보 삭제
  const deleteExamInfo = async (id: string) => {
    try {
      const res = await instance.delete(`/exam-posts/?examIdx=${id}`);
      if (res) {
        alert('삭제 완료');
        queryClient.invalidateQueries({ queryKey: ['myInfo'] });
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
    }
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
