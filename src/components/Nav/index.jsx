import React, { useState } from 'react';
import * as Styled from './styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  let navigate = useNavigate();
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);



  const showButton = () => (window.innerWidth <= 960 ? setButton(false) : setButton(true));
  const handleClick = () => setClick(!click);

  const logoutClick = () => {
    localStorage.removeItem('AccessToken')
    navigate('/login');
  };

  window.addEventListener('resize', showButton);

  return (
    <Styled.Navbar>
      {button ? (
        <Styled.NavLogo src="img/logo.png" width={110} onClick={() => navigate('/')} />
      ) : (
        <Styled.NavLogo src="img/tabletlogo.png" width={110} onClick={() => navigate('/')} />
      )}
      <Styled.MobileIcon onClick={handleClick}>
        {click ? <VscChromeClose /> : <GiHamburgerMenu />}
      </Styled.MobileIcon>

      <Styled.NavMenu onClick={handleClick} click={click}>
        <Styled.NavLinks onClick={() => navigate('notice')}>공지사항</Styled.NavLinks>
        {localStorage.getItem('AccessToken') == null ? (
          <Styled.NavLinks onClick={() => navigate('login')}>로그인</Styled.NavLinks>
        ) : (
          <Styled.NavLinks onClick={logoutClick}>로그아웃</Styled.NavLinks>
        )} 
        {localStorage.getItem('AccessToken') == null ? (
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
