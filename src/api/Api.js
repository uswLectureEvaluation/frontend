import axios from 'axios';
import { Cookies } from 'react-cookie';
import instance from './ApiController';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name) => {
  return cookies.get(name);
};
axios.defaults.withCredentials = true;
//메인페이지
///lecture/findAllList/?option=lectureSatisfactionAvg&page=1 데이터 받아옴
//modifiedDate 최근강의
//lectureSatisfactionAvg 만족도 강의
//lectureHoneyAvg 꿀강의
//lectureLearningAvg 배울게 많은 강의
const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

export const versionApi = async () => {
  return instance({
    url: `/suwiki/version`,
    method: 'GET',
  });
};

export const mainApi = async (lecture, page, majorType) => {
  return instance({
    url: `/lecture/all/?option=${lecture}&page=${page}&majorType=${majorType}`,
    method: 'GET',
  });
};

//개설학과조회 api
export const majorTypeApi = async () => {
  return instance({
    url: `/suwiki/majorType`,
    method: 'GET',
  });
};

//즐겨찾기 조회 api
export const searchFavoriteMajorApi = async () => {
  return instance({
    url: `/user/favorite-major`,
    method: 'GET',
  });
};

//전공 즐겨찾기 하기 api
export const favoriteMajorApi = (setFavorite, majorType) => {
  const data = {
    majorType,
  };

  return instance({
    url: `/user/favorite-major`,
    method: 'POST',
    data: data,
  })
    .then((data) => setFavorite(data.success))
    .catch((error) => {
      if (error.response.status === 500) {
        alert('로그인 후 이용해주세요');
      }
    });
};

//즐겨찾기 삭제 api
export const deleteFavoriteMajorApi = async (setFavorite, majorType) => {
  return instance({
    url: `/user/favorite-major?majorType=${majorType}`,
    method: 'delete',
  })
    .then((data) => setFavorite(data))
    .catch((error) => {
      if (error.response.status === 500) {
        alert('로그인 후 이용해주세요');
      }
    });
};

//공지사항api 확인 필요
export const noticeApi = async (page) => {
  return instance({
    url: `/notice/all?page=${page}`,
    method: 'GET',
  });
};

//공지사항 자세히보기 api
export const noticeDetailApi = async (notice) => {
  return instance({
    url: `/notice/?noticeId=${notice}`,
    method: 'GET',
  });
};

//회원가입 api 0
export const registerApi = (setData, setLoading, id, pw, email) => {
  const url = `user/join`;

  const data = {
    loginId: id,
    password: pw,
    email,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    url,
  };
  axios(options).then(
    (r) => {
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      console.error(error);
    }
  );
};

//회원가입 아이디 중복확인 (완료)
export const checkidApi = (setData, id) => {
  const url = `user/check-id`;

  const data = {
    loginId: id,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    url,
  };

  axios(options).then(
    (response) => {
      setData(!response.data.overlap);
      if (!response.data.overlap) alert('사용가능합니다.');
      else alert('중복입니다.');
    },
    (error) => {
      console.error(error);
      alert('요청에 실패하였습니다.');
    }
  );
};

//회원가입 이메일 중복확인 (완료)
export const checkemailApi = (setData, email) => {
  const url = `user/check-email`;

  const data = {
    email,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    url,
  };

  axios(options).then(
    (response) => {
      setData(!response.data.overlap);
      if (!response.data.overlap) alert('사용가능합니다.');
      else alert('중복입니다.');
    },
    (error) => {
      console.error(error);
      alert('요청에 실패하였습니다.');
    }
  );
};

//로그인api (로그인유지)
export const loginApi = (setData, setLoading, id, pw) => {
  const url = `user/client-login`;
  const data = {
    loginId: id,
    password: pw,
  };
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache',
      withCredentials: true,
      'Access-Control-Allow-Origin': PROXY_URL,
    },
    data,
    url,
    withCredentials: true,
  };
  axios(options).then(
    (r) => {
      localStorage.setItem('login', true);

      setData(r.data);
      setLoading(true);
    },
    (error) => {
      console.error(error);
      alert('id 또는 pw 확인해주세요');
    }
  );
};

//로그인api (로그인유지X)
export const unCheckedLoginApi = (setData, setLoading, id, pw) => {
  const url = `user/login`;
  const data = {
    loginId: id,
    password: pw,
  };
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache',
      withCredentials: true,
      'Access-Control-Allow-Origin': PROXY_URL,
    },
    data,
    url,
    withCredentials: true,
  };
  axios(options).then(
    (r) => {
      sessionStorage.setItem('login', true);
      sessionStorage.setItem('AccessToken', r.data.AccessToken);
      setData(r.data);
      setLoading(true);
    },
    (error) => {
      console.error(error);
      alert('id 또는 pw 확인해주세요');
    }
  );
};

// 로그아웃
export const logoutApi = () => {
  return instance({
    url: `/user/client-logout`,
    method: 'POST',
  });
};

//아이디 찾기api (완료)
export const findIdApi = (setData, email) => {
  const url = `user/find-id`;

  const data = {
    email,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    url,
  };
  axios(options).then(
    (r) => {
      alert('해당 아이디가 존재합니다');
      setData(r.data);
    },
    (error) => {
      alert('해당 아이디를 찾을 수 없습니다.');
    }
  );
};

//비밀번호 찾기api (완료)
export const findPwApi = (setData, id, email) => {
  const url = `user/find-pw`;

  const data = {
    loginId: id,
    email,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    url,
  };
  axios(options).then(
    (response) => {
      alert('해당 이메일로 임시 비밀번호를 발송하였습니다.');
      setData(response.data);
    },
    (error) => {
      alert('해당 아이디.이메일을 찾을 수 없습니다.');
    }
  );
};

// 내정보Api
export const myInfoApi = () => {
  return instance({
    url: `/user/my-page`,
    method: 'GET',
  });
};

// 내가쓴글-강의평가Api
export const evaluatePostApi = (page) => {
  return instance({
    url: `/evaluate-posts/written/?page=${page}`,
    method: 'GET',
  });
};

// 내가쓴글-시험정보Api
export const examPostApi = (page) => {
  return instance({
    url: `/exam-posts/written/?page=${page}`,
    method: 'GET',
  });
};

//강의평가수정 api 미완
export const evaluateUpdateApi = (
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
export const evaluateWriteApi = (
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
export const deleteEvaluateApi = (id) => {
  return instance({
    url: `/evaluate-posts/?evaluateIdx=${id}`,
    method: 'DELETE',
  });
};

//강의평가 신고 api
export const evaluateReportApi = (evaluateIdx, content) => {
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
export const examReportApi = (examIdx, content) => {
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
export const examWriteApi = (
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

//시험정보수정 api 미완
export const examUpdateApi = (
  setData,
  semester,
  examInfo,
  examType,
  examDifficulty,
  content,
  id
) => {
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

//시험정보 구매
export const buyTestInfo = (selectId) => {
  return instance({
    url: `/exam-posts/purchase/?lectureId=${selectId}`,
    method: 'POST',
  });
};

// 시험정보 삭제
export const deleteExamInfoApi = (id) => {
  return instance({
    url: `/exam-posts/?examIdx=${id}`,
    method: 'DELETE',
  });
};

// 통합검색결과Api
//꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
export const searchApi = (search, page, lecture, majorType) => {
  return instance({
    url: `/lecture/search/?searchValue=${search}&option=${lecture}&page=${page}&majorType=${majorType}`,
    method: 'GET',
  });
};

// 검색 결과 자세히보기 (Lecture)
export const searchLectureApi = (selectId) => {
  return instance({
    url: `/lecture/?lectureId=${selectId}`,
    method: 'GET',
  });
};

// 검색 결과 자세히보기 (Evaluation)
export const searchEvaluationApi = (selectId) => {
  return instance({
    url: `/evaluate-posts/?lectureId=${selectId}&page=1`,
    method: 'GET',
  });
};

// 검색 결과 자세히보기 (Exam)
export const searchExamApi = (selectId) => {
  return instance({
    url: `/exam-posts/?lectureId=${selectId}&page=1`,
    method: 'GET',
  });
};

//시험정보 구매이력
export const historyTestInfo = () => {
  return instance({
    url: `/exam-posts/purchase`,
    method: 'GET',
  });
};

//SUWIKI 비밀번호 변경
export const resetPasswordApi = (prePassword, newPassword) => {
  const data = {
    prePassword,
    newPassword,
  };

  return instance({
    url: `/user/reset-pw`,
    method: 'POST',
    data: data,
  })
    .then((data) => {
      if (data.success) {
        alert('비밀번호가 변경되었습니다\n다시 로그인 해주세요');
        localStorage.removeItem('login');
        localStorage.removeItem('AccessToken');
        sessionStorage.removeItem('AccessToken');
        sessionStorage.removeItem('login');
        window.location.href = '/';
      }
    })
    .catch((error) => {
      if (error.response.data.code === 'USER005') return alert('비밀번호를 확인해주세요.');
      else if (error.response.data.code === 'USER016')
        return alert('이전 비밀번호와 동일하게 변경할 수 없습니다.');
    });
};

//SUWIKI 회원 탈퇴
export const quitApi = (id, pw) => {
  const data = {
    loginId: id,
    password: pw,
  };

  return instance({
    url: `/user/quit`,
    method: 'POST',
    data: data,
  });
};

export const banListApi = () => {
  return instance({
    url: `user/blacklist-reason`,
    method: 'GET',
  });
};

export const resListApi = () => {
  return instance({
    url: `user/restricted-reason`,
    method: 'GET',
  });
};
