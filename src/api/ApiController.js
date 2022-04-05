import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (AccessToken) => {
    refreshSubscribers.map((callback) => callback(AccessToken));
  };
  
  const addRefreshSubscriber = (callback) => {
    refreshSubscribers.push(callback);
  };

instance.interceptors.request.use(
  function (config) {
    //request 정상
    config.headers['Content-Type'] = 'application/json';
    config.headers['AccessToken'] = cookies.get('AccessToken');
    console.log(config);

    return config;
  },
  function (error) {
    //request 에러
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
<<<<<<< HEAD
  function (response) {
    //response 정상
    console.log(response);
    return response.data;
  },
  function (error) {
    //response 에러
    console.log(error, 'dddd');

    return Promise.reject(error);
  }
);

export default instance;
=======
    function (response) {
      return response.data;
    },
    async (error)=> {
      const {
        config,
        response: { status },
      } = error;
      const originalRequest = config;
      if (status === 401) {
        if (!isTokenRefreshing) {
          // isTokenRefreshing이 false인 경우에만 token refresh 요청
          isTokenRefreshing = true;
          const RefreshToken = await cookies.get("RefreshToken")
          const { data } = await axios({
            url: `/user/refresh`, // 토큰 재요청
            headers:{
              RefreshToken,
            },
            method:"POST"
        }
          );
          // 새로운 토큰 저장
          const {
            AccessToken: newAccessToken,
            RefreshToken: newRefreshToken,
          } = data;
          await (
            cookies.set("AccessToken", newAccessToken, {
                path: "/",
                secure: true,
                sameSite: false,
            }),
            cookies.set("RefreshToken", newRefreshToken, {
                path: "/",
                secure: true,
                sameSite: false,
            })
          );
          isTokenRefreshing = false;
          axios.defaults.headers.common["AccessToken"] = newAccessToken;
          // 새로운 토큰으로 지연되었던 요청 진행
          onTokenRefreshed(newAccessToken);
        }
        // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
        const retryOriginalRequest = new Promise((resolve) => {
          addRefreshSubscriber((AccessToken) => {
            originalRequest.headers.Authorization = AccessToken;
            resolve(axios(originalRequest));
          });
        });
        return retryOriginalRequest;
      }
      return Promise.reject(error);
    }
  );

export default instance
>>>>>>> 84820f3708544b233a3e5c32cd65f1a3ce529891
