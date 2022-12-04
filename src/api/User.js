import jwtDecode from 'jwt-decode';
import { useRecoilValue } from 'recoil';
import { tokenState } from '../app/recoilStore';
import instance from './ApiController';
const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const User = () => {
  const token = useRecoilValue(tokenState);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
    'Access-Control-Allow-Origin': PROXY_URL,
  };

  //액세스토큰 유효성 검사
  const isAccessTokenValid = () => {
    if (!token) return false;
    const tokenInfo = jwtDecode(token);
    if (tokenInfo.exp <= Date.now() / 1000) return false;
    return true;
  };

  //로그인api (로그인유지)
  const login = async (setData, setLoading, id, pw) => {
    const data = {
      loginId: id,
      password: pw,
    };
    return instance({
      url: `user/client-login`,
      method: 'POST',
      data: data,
      headers: headers,
      withCredentials: true,
    })
      .then((r) => {
        localStorage.setItem('login', true);
        setData(r.data);
        setLoading(true);
      })
      .catch(() => {
        alert('id 또는 pw 확인해주세요');
      });
  };

  //로그인api (로그인유지X)
  const unCheckedLogin = async (setData, setLoading, id, pw) => {
    const data = {
      loginId: id,
      password: pw,
    };
    return instance({
      url: `user/login`,
      method: 'POST',
      data: data,
      headers: headers,
      withCredentials: true,
    })
      .then((r) => {
        sessionStorage.setItem('login', true);
        sessionStorage.setItem('AccessToken', r.AccessToken);
        setData(r.data);
        setLoading(true);
      })
      .catch(() => {
        alert('id 또는 pw 확인해주세요');
      });
  };

  // 로그아웃
  const logout = () => {
    return instance({
      url: `/user/client-logout`,
      method: 'POST',
    });
  };

  return { isAccessTokenValid, login, unCheckedLogin, logout };
};
export default User;
