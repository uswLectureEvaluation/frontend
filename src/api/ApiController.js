import axios from 'axios';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';


const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

instance.interceptors.request.use(

  function (config) {
  console.log('ddd');

    console.log(config)
    
    const { data } =  axios.post({
      url: `/user/client-refresh`, // 토큰 재요청
    });

    const { AccessToken: newAccessToken } = data;

    if (newAccessToken) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = newAccessToken;
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

    if (error.response.status) {
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
