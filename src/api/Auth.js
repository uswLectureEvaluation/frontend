import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { removeStorage, setStorage } from 'utils/loginStorage';
import { tokenState } from '../app/recoilStore';
import JwtInterceptors from './ApiController';

const Auth = () => {
  const instance = JwtInterceptors().instance;
  const setToken = useSetRecoilState(tokenState);
  const navigate = useNavigate();

  //회원가입 api
  const register = async (data) => {
    try {
      const res = await instance.post('user/join', data);
      res.success && navigate('/emailsignup', { state: data.email });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //회원가입 아이디 중복확인
  const checkId = async (setIdCheck, data) => {
    try {
      const res = await instance.post('user/check-id', data);
      setIdCheck(!res.overlap);
      if (!res.overlap) alert('사용가능합니다.');
      else alert('중복입니다.');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //회원가입 이메일 중복확인
  const checkEmail = async (setEmailCheck, data) => {
    try {
      const res = await instance.post('user/check-email', data);
      setEmailCheck(!res.overlap);
      if (!res.overlap) alert('사용가능합니다.');
      else alert('중복입니다.');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //아이디 찾기api
  const findId = async (data) => {
    try {
      const res = await instance.post('user/find-id', data);
      res.success && alert('해당 이메일로 아이디를 전송하였습니다');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //비밀번호 찾기api
  const findPw = async (data) => {
    try {
      const res = await instance.post('user/find-pw', data);
      res.success && alert('해당 이메일로 임시 비밀번호를 발송하였습니다.');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //로그인api (로그인유지)
  const login = async (data) => {
    try {
      const res = await instance.post('user/client-login', data);
      setStorage('login', true);
      setToken(res.AccessToken);
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //SUWIKI 비밀번호 변경
  const resetPassword = async (data) => {
    try {
      const res = await instance.post('user/reset-pw', data);
      res.success && alert('비밀번호가 변경되었습니다\n다시 로그인 해주세요');
      removeStorage('login');
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //SUWIKI 회원 탈퇴
  const quit = async (data) => {
    try {
      const res = await instance.post('user/quit', data);
      res.success && alert('회원탈퇴가 완료되었습니다');
      removeStorage('login');
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return {
    register,
    checkId,
    checkEmail,
    login,
    findId,
    findPw,
    resetPassword,
    quit,
  };
};
export default Auth;
