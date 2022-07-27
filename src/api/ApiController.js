import axios from 'axios';
import { logoutApi } from './Api';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

instance.interceptors.request.use(
  async (config) => {
    if (
      !(
        config.url.includes('lecture/all/?option') ||
        config.url.includes('suwiki/version') ||
        config.url.includes('suwiki/majorType') ||
        config.url.includes('lecture/search/?searchValue') ||
        config.url.includes('notice') ||
        config.url.includes('client-logout')
      )
    ) {
      const { data } = await axios({
        url: `/user/client-refresh`, // 토큰 재요청
        method: 'POST',
      });
      const { AccessToken: newAccessToken } = data;
      await newAccessToken;

      if (newAccessToken) {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = newAccessToken;
      }
    }
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  function (error) {
    alert('해당 요청이 정상적으로 이루어지지 않았어요.\n 다시 시도해주세요.');
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    if (
      response.config.url.includes('evaluate-posts/?lectureId') ||
      response.config.url.includes('exam-posts/?lectureId')
    ) {
      alert('작성 완료');
      window.location.reload();
    }
    if (
      response.config.url.includes('evaluate-posts/?evaluateIdx') ||
      response.config.url.includes('exam-posts/?examIdx')
    ) {
      alert('수정 완료');
      window.location.reload();
    }
    if (
      response.config.url.includes('evaluate-posts/?evaluateIdx') ||
      response.config.url.includes('exam-posts/?examIdx')
    ) {
      alert('삭제 완료');
      window.location.reload();
    }
    if (response.config.url.includes('exam-posts/purchase/?lectureId')) {
      alert('구매 완료');
      window.location.reload();
    }
    if (
      response.config.url.includes('user/report/evaluate') ||
      response.config.url.includes('user/report/exam')
    ) {
      alert('신고 완료');
      window.location.reload();
    }
    if (response.config.url.includes('user/reset-pw')) {
      alert('변경 완료');
      window.location.reload();
    }
    if (response.config.url.includes('user/quit')) {
      alert('탈퇴 완료');
      window.location.reload();
    }
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 403) {
      logoutApi().then((data) => {
        if (data.Success) {
          localStorage.removeItem('login');
          alert('로그인 시간이 만료되었습니다\n다시 로그인 해주세요');
          window.location.href = '/';
        }
      });
    }
    if (error.response.status === 401) {
      const { data } = await axios({
        url: `/user/client-refresh`, // 토큰 재요청
        method: 'POST',
      });
      const { AccessToken: newAccessToken } = data;
      await newAccessToken;

      originalRequest.headers['Authorization'] = newAccessToken;

      const retryOriginalRequest = new Promise((resolve) => {
        resolve(instance(originalRequest));
      });

      return retryOriginalRequest;
    }
    return Promise.reject(error);
  }
);

export default instance;
