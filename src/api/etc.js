import axios from 'axios';
import { removeStorage } from 'utils/loginStorage';

// 전공 선택 의존성때문에 따로 빼놓은 것
export const type = async (Authorization) => {
  try {
    const { data } = await axios.get(`/suwiki/majorType`, { headers: { Authorization } });
    return data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

export const searchFavorite = async (Authorization) => {
  try {
    const { data } = await axios.get(`/user/favorite-major`, { headers: { Authorization } });
    return data;
  } catch (error) {
    console.error(error.response.data.message);
  }
};

// 로그아웃
export const logout = async () => {
  try {
    const { data } = await axios.post(`/user/client-logout`);
    if (data.Success) {
      removeStorage('login');
      window.location.href = '/login';
    }
  } catch (error) {
    console.error(error.response.data.message);
  }
};

// 리프레시
export const refresh = () => {
  try {
    const res = axios.post(`/user/client-refresh`);
    return res;
  } catch (error) {
    console.error(error);
  }
};
