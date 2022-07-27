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
      !config.url.includes(
        'lecture/all/?option' ||
          'suwiki/version' ||
          'suwiki/majorType' ||
          'lecture/search/?searchValue' ||
          'notice' ||
          'client-logout'
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
    const reloadHandler = (includesURL, methodType, alertText) => {
      if (response.config.url.includes(includesURL) && response.config.method === methodType) {
        alert(alertText);
        window.location.reload();
      }
    };

    reloadHandler('evaluate-posts/?lectureId' || 'exam-posts/?lectureId', 'post', '작성 완료');
    reloadHandler('evaluate-posts/?evaluateIdx' || 'exam-posts/?examIdx', 'put', '수정 완료');
    reloadHandler('evaluate-posts/?evaluateIdx' || 'exam-posts/?examIdx', 'delete', '삭제 완료');
    reloadHandler('exam-posts/purchase/?lectureId', 'post', '구매 완료');
    reloadHandler('user/report/evaluate' || 'user/report/exam', 'post', '신고 완료');
    reloadHandler('user/quit', 'post', '탈퇴 완료');

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
