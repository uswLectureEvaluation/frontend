import React, { useEffect, useState } from "react"
import * as Styled from "./styled"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Nav = () => {
    let navigate = useNavigate()
    const loginState = useSelector((state) => state.login.value)
    const [button, setButton] = useState(true)
    const [text, setText] = useState("")

    const [click, setClick] = useState(false)

    console.log(button, text)
    const move = (location) => {
        navigate(`/${location}`)
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        console.log(loginState)
        if (loginState) {
            setText("로그아웃")
        } else {
            setText("로그인")
        }

        showButton()
    }, [loginState])

    const handleClick = () => {
        setClick(!click)
    }

    window.addEventListener("resize", showButton)

    return (
        <Styled.Navbar>
            <Styled.NavLogo onClick={() => move("")}>SUWIKI</Styled.NavLogo>
            <Styled.MobileIcon onClick={handleClick}>
                {click ? (
                    <Styled.Img src={"Styled.Img/icon_color_fire_36.svg"} />
                ) : (
                    <Styled.Img src={"img/icon_color_bee_36.svg"} />
                )}
            </Styled.MobileIcon>

            <Styled.NavMenu onClick={handleClick} click={click}>
                <Styled.NavLinks onClick={() => move("notice")}>
                    공지사항
                </Styled.NavLinks>
                <Styled.NavLinks onClick={() => move("login")}>
                    로그인
                </Styled.NavLinks>
                <Styled.NavLinks id="signup" onClick={() => move("signup")}>
                    회원가입
                </Styled.NavLinks>
            </Styled.NavMenu>
        </Styled.Navbar>
    )
}

export default Nav
