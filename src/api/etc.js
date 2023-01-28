import axios from 'axios';
import { removeStorage } from 'utils/loginStorage';
import JwtInterceptors from './ApiController';

// 전공 선택 의존성때문에 따로 빼놓은 것
export const type = async () => {
  const instance = JwtInterceptors().instance;

  return instance({
    url: `/suwiki/majorType`,
    method: 'GET',
  });
};

export const searchFavorite = async () => {
  const instance = JwtInterceptors().instance;

  return instance({
    url: `/user/favorite-major`,
    method: 'GET',
  });
};

// 로그아웃
export const logout = async () => {
  try {
    const { data } = await axios({
      url: `/user/client-logout`,
      method: 'POST',
    });
    if (data.Success) {
      removeStorage('login');
      window.location.href = '/login';
    }
  } catch (error) {
    console.log(error);
  }
};

// 리프레시
export const refresh = () => {
  return axios({
    url: `/user/client-refresh`, // 토큰 재요청
    method: 'POST',
  });
};
