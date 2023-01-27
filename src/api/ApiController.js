import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { removeStorage } from 'utils/loginStorage';
const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';
axios.defaults.withCredentials = true;

// 로그아웃
const logout = () => {
  return axios({
    url: `/user/client-logout`,
    method: 'POST',
  });
};
// 리프레시
const refresh = () => {
  return axios({
    url: `/user/client-refresh`, // 토큰 재요청
    method: 'POST',
  });
};

const JwtInterceptors = (token, setToken) => {
  const instance = axios.create({
    baseURL: `${PROXY_URL}`,
    timeout: 5000,
  });
  //액세스토큰 유효성 검사
  const isAccessTokenValid = async () => {
    if (!token) return false;
    const tokenInfo = await jwtDecode(token);
    if (tokenInfo.exp <= Date.now() / 1000) return false;
    return true;
  };
  //토큰 리프레시
  const refreshingToken = async () => {
    try {
      const res = await refresh();
      if (res.status !== 200) {
        throw new Error(`Response status is ${res.status}`);
      } else {
        setToken(res.data.AccessToken);
        return res;
      }
    } catch (error) {
      console.error('refreshToken ERROR', error);
      return false;
    }
  };

  instance.interceptors.request.use(
    async (config) => {
      const tokenValid = await isAccessTokenValid();
      // 로그인 유지 O
      if (
        config.url.includes('login') ||
        config.url.includes('logout') ||
        config.url.includes('check') ||
        config.url.includes('join') ||
        config.url.includes('find') ||
        config.url.includes('verify') ||
        config.url.includes('lecture/all/?option') ||
        config.url.includes('suwiki/version') ||
        config.url.includes('suwiki/majorType') ||
        config.url.includes('lecture/search/?searchValue') ||
        config.url.includes('notice')
      ) {
        // 액세스 토큰 필요없는 페이지
        config.headers['Content-Type'] = 'application/json';
      } else if (!tokenValid) {
        // 액세스 토큰 만료 or 없을 때
        // 토큰 리프레시
        const result = await refreshingToken();
        // 리프레시 토큰 만료
        if (!result) {
          alert('로그인 시간이 만료되었습니다\n다시 로그인 해주세요');
          logout().then((res) => {
            if (res.data.Success) {
              removeStorage('login');
              window.location.href = '/login';
            }
          });
        }
        config.headers['Authorization'] = result.data.AccessToken;
      } else {
        config.headers['Authorization'] = token;
      }

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
      const originalRequest = error.config;
      if (
        error.response.status === 400 &&
        originalRequest.url.includes('exam-posts/purchase/?lectureId')
      ) {
        alert('포인트가 부족해요.');
      }
      // 로그인 유지 X
      if (error.response.status === 401) {
        alert('로그인 시간이 만료되었습니다\n다시 로그인 해주세요');
        window.location.href = '/login';
      }
      if (error.response.status === 502) {
        window.location.href = '/502';
      }

      return Promise.reject(error);
    }
  );
  return { instance };
};

export default JwtInterceptors;
