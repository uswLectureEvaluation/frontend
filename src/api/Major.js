import JwtInterceptors from './ApiController';

const Major = () => {
  const instance = JwtInterceptors().instance;

  // 버전체크
  const version = async () => {
    try {
      const res = await instance.get('/suwiki/version');
      return res;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // 전공 리스트
  const type = async () => {
    try {
      const res = await instance.get('/suwiki/majorType');
      return res;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  // 즐겨찾기 리스트
  const searchFavorite = async () => {
    try {
      const res = await instance.get('/user/favorite-major');
      return res;
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  //전공 즐겨찾기 하기 api
  const favoriting = async (majorType) => {
    try {
      const res = await instance.post('/user/favorite-major', { majorType });
      return res;
    } catch (error) {
      if (error.response.status === 500) {
        alert('로그인 후 이용해주세요');
      }
    }
  };

  //즐겨찾기 삭제 api
  const unfavoriting = async (majorType) => {
    return instance({
      url: `/user/favorite-major?majorType=${majorType}`,
      method: 'delete',
    }).catch((error) => {
      if (error.response.status === 500) {
        alert('로그인 후 이용해주세요');
      }
    });
  };

  return { favoriting, unfavoriting, version, searchFavorite, type };
};

export default Major;
