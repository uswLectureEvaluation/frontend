import { useRecoilState } from 'recoil';
import { tokenState } from '../app/recoilStore';
import JwtInterceptors from './ApiController';

const Major = () => {
  const [token, setToken] = useRecoilState(tokenState);
  const instance = JwtInterceptors(token, setToken).instance;

  // 버전체크
  const version = async () => {
    return instance({
      url: `/suwiki/version`,
      method: 'GET',
    });
  };

  // 전공 리스트
  const type = async () => {
    return instance({
      url: `/suwiki/majorType`,
      method: 'GET',
    });
  };

  // 즐겨찾기 리스트
  const searchFavorite = async () => {
    return instance({
      url: `/user/favorite-major`,
      method: 'GET',
    });
  };

  //전공 즐겨찾기 하기 api
  const favoriting = async (majorType) => {
    const data = {
      majorType,
    };

    return instance({
      url: `/user/favorite-major`,
      method: 'POST',
      data: data,
    }).catch((error) => {
      if (error.response.status === 500) {
        alert('로그인 후 이용해주세요');
      }
    });
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
