import axios from 'axios';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
  timeout: 5000,
});

instance.interceptors.request.use(
  async (config) => {
    
    if(!(config.url.includes('lecture/all/?option') || config.url.includes('suwiki/version') || config.url.includes('suwiki/majorType')
    || config.url.includes('lecture/search/?searchValue') || config.url.includes('notice'))) {
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

    if((config.url.includes('evaluate-posts/?lectureId') || config.url.includes('exam-posts/?lectureId')) && config.method === 'post') {
      alert('작성 완료');
      window.location.reload();
    } else if((config.url.includes('evaluate-posts/?evaluateIdx') || config.url.includes('exam-posts/?examIdx')) && config.method === 'put') {
      alert('수정 완료');
      window.location.reload();
    } else if((config.url.includes('evaluate-posts/?evaluateIdx') || config.url.includes('exam-posts/?examIdx')) && config.method === 'delete') {
      alert('삭제 완료');
      window.location.reload();
    } else if(config.url.includes('exam-posts/purchase/?lectureId') && config.method === 'post') {
      alert('구매 완료');
      window.location.reload();
    } else if(config.url.includes('user/report/evaluate') || config.url.includes('user/report/exam')) {
      alert('신고 완료');
      window.location.reload();
    } else if(config.url.includes('user/reset-pw')) {
      alert('변경 완료');
      window.location.reload();
    } else if(config.url.includes('user/quit')) {
      alert('탈퇴 완료');
      window.location.reload();
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
    if (error.response.status===403) {
      localStorage.removeItem('login');
      alert("로그인 시간이 만료되었습니다\n다시 로그인 해주세요");
   }

    if (error.response.status===401) {
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
