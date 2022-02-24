import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
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
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

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

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <Navbar>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        SUGANG
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes style={{ color: '#4B89DC' }} /> : <FaBars style={{ color: '#4B89DC' }} />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/notice">공지사항</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">로그인</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">회원가입</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Navbar>
        </IconContext.Provider>
    );
};

export default Nav;
