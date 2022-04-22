import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = cookies.get('AccessToken');
    if (accessToken) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = accessToken;
    }

    return config;
  },
  function (error) {
    //request 에러
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const RefreshToken = await cookies.get('RefreshToken');

      const { data } = await axios({
        url: `/user/refresh`, // 토큰 재요청
        headers: {
          Authorization: RefreshToken,
        },
        method: 'POST',
      });
      console.log('새 토큰 반환 데이터ㅇ', data);
      const { AccessToken: newAccessToken, RefreshToken: newRefreshToken } = data;
      await cookies.set('AccessToken', newAccessToken, {
        path: '/',
        secure: true,
        sameSite: false,
      });
      await cookies.set('RefreshToken', newRefreshToken, {
        path: '/',
        secure: true,
        sameSite: false,
      });
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
