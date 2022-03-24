import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useSelector } from "react-redux";
import {
    Navbar,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn
} from "./Nav.elements";

const Nav = () => {
    const loginState = useSelector((state)=> state.loginState);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [text, setText] = useState('');

    const [check, setCheck] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };
    const closeMobileMenu = () => {
        setClick(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };



    //로그아웃버튼을 누르면 토큰이 없어지고
    //nav바는 로그인 text로 변경

    //로그인을 하면 nav바는 로그아웃 text로 변경
    useEffect(() => {
        if (localStorage.getItem('AccessToken') != null) {
            setText('로그아웃')
        } else {
            setText('로그인');
        }

        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Navbar>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        SUWIKI
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes style={{ color: '#4B89DC' }} /> : <FaBars style={{ color: '#4B89DC' }} />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/notice">공지사항</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/login">{text}</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/signup">회원가입</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Navbar>
        </IconContext.Provider >
    );
};

export default Nav;
