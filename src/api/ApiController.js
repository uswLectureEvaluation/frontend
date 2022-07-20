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
    console.log(localStorage.getItem('access'))
    const accessToken = localStorage.getItem('access');
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
      const { data } = await axios({
        url: `/user/client-refresh`, // 토큰 재요청
        method: 'POST',
      });
      const { AccessToken: newAccessToken } = data;
      await cookies.set('AccessToken', newAccessToken, {
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
