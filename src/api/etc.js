import JwtInterceptors from './ApiController';

// 전공 선택 의존성때문에 따로 빼놓은 것
export const type = async (token, setToken) => {
  const instance = JwtInterceptors(token, setToken).instance;

  return instance({
    url: `/suwiki/majorType`,
    method: 'GET',
  });
};

export const searchFavorite = async (token, setToken) => {
  const instance = JwtInterceptors(token, setToken).instance;

  return instance({
    url: `/user/favorite-major`,
    method: 'GET',
  });
};
