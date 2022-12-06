import JwtInterceptors from './ApiController';
const instance = JwtInterceptors().instance;

// 전공 선택 의존성때문에 따로 빼놓은 것
export const type = async () => {
  return instance({
    url: `/suwiki/majorType`,
    method: 'GET',
  });
};

export const searchFavorite = async () => {
  return instance({
    url: `/user/favorite-major`,
    method: 'GET',
  });
};
