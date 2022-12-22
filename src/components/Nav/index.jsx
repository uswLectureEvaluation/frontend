import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '../..';
import Auth from '../../api/Auth';
import * as Styled from './styled';

const Nav = () => {
  const navigate = useNavigate();
  const auth = Auth();
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const showButton = () => (window.innerWidth <= 960 ? setButton(false) : setButton(true));
  const handleClick = () => setClick(!click);

  const logoutClick = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('AccessToken');
    sessionStorage.removeItem('AccessToken');
    sessionStorage.removeItem('login');
    auth.logout().then(async (data) => {
      if (data.Success === true) {
        navigate('/');
        setTimeout(() => {
          queryClient.invalidateQueries({ queryKey: ['myInfo'] });
          queryClient.invalidateQueries({ queryKey: ['lecture'] });
        }, 300);
      }
    });
  };

  window.addEventListener('resize', showButton);

  return (
    <Styled.Navbar>
      <picture>
        <source srcSet="/img/logo.webp" type="image/webp" />
        <source srcSet="/img/logo.png" type="image/png" />
        <Styled.NavLogo
          src="/img/logo.png"
          alt="logo"
          width={110}
          height={30}
          onClick={() => navigate('/')}
        />
      </picture>
      {!button && (
        <Styled.MobileIcon onClick={handleClick}>
          {click ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
              ></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          )}
        </Styled.MobileIcon>
      )}

      <Styled.NavMenu onClick={handleClick} click={click}>
        <Styled.NavLinks onClick={() => navigate('notice')}>공지사항</Styled.NavLinks>
        {localStorage.getItem('login') === null && sessionStorage.getItem('login') === null ? (
          <Styled.NavLinks onClick={() => navigate('login')}>로그인</Styled.NavLinks>
        ) : (
          <Styled.NavLinks onClick={logoutClick}>로그아웃</Styled.NavLinks>
        )}
        {localStorage.getItem('login') === null && sessionStorage.getItem('login') === null ? (
          <Styled.NavLinks id="signup" onClick={() => navigate('signup')}>
            회원가입
          </Styled.NavLinks>
        ) : (
          <Styled.NavLinks id="signup" onClick={() => navigate('myinformation')}>
            내 정보
          </Styled.NavLinks>
        )}
      </Styled.NavMenu>
    </Styled.Navbar>
  );
};

export default Nav;
