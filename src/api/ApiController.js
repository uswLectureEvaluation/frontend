import axios from 'axios';
import User from './User';
const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

instance.interceptors.request.use(
  async (config) => {
    if (sessionStorage.getItem('AccessToken')) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = sessionStorage.getItem('AccessToken');
    } else if (
      !(
        config.url.includes('login') ||
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
    const reloadHandler = (firstURL, secondURL, methodType, alertText) => {
      if (
        (response.config.url.includes(firstURL) || response.config.url.includes(secondURL)) &&
        response.config.method === methodType
      ) {
        alert(alertText);
        window.location.reload();
      }
    };

    reloadHandler('user/quit', null, 'post', '탈퇴 완료');

    return response.data;
  },
  async (error) => {
    const user = User();
    const originalRequest = error.config;
    if (
      error.response.status === 400 &&
      originalRequest.url.includes('exam-posts/purchase/?lectureId')
    ) {
      alert('포인트가 부족해요.');
    }
    // 리프레시 토큰 만료
    if (error.response.status === 403) {
      user.logout().then((data) => {
        if (data.Success) {
          localStorage.removeItem('login');
          alert('로그인 시간이 만료되었습니다\n다시 로그인 해주세요');
          window.location.href = '/';
        }
      });
    }
    // 로그인 유지 X
    if (error.response.status === 401) {
      sessionStorage.removeItem('AccessToken');
      sessionStorage.removeItem('login');
      alert('로그인 시간이 만료되었습니다\n다시 로그인 해주세요');
      window.location.href = '/';
    }
    if (error.response.status === 502) {
      window.location.href = '/502';
    }

    return Promise.reject(error);
  }
);

export default instance;
