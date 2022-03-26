import React, { useEffect, useState } from "react";
import * as Styled from './styled';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    let navigate = useNavigate();
    const loginState = useSelector((state) => state.login.value);
    const [button, setButton] = useState(true);
    const [text, setText] = useState('');

    const move = (location) => {
        navigate(`/${location}`)
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        console.log(loginState)
        if (loginState) {
            setText('로그아웃')
        } else {
            setText('로그인');
        }

        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <Styled.Navbar>
            <Styled.NavLogo onClick={() => move("")}>
                SUWIKI
            </Styled.NavLogo>
            <Styled.NavMenu>
                <Styled.NavLinks onClick={()=>move("notice")}>공지사항</Styled.NavLinks>
                <Styled.NavLinks onClick={() => move("login")}>로그인</Styled.NavLinks>
                <Styled.NavLinks onClick={() => move("signup")}>회원가입</Styled.NavLinks>
            </Styled.NavMenu>
        </Styled.Navbar>
    );
};

export default Nav;