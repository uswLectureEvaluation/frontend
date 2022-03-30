import React from "react"
import Button from "../../components/Button"
import * as Styled from "./styled"
import { Positioner } from "../../components/Wrapper/styled"
import { useNavigate } from "react-router-dom"

const EmailSignUp = () => {
    const navigate = useNavigate()

    return (
        <Positioner>
            <Styled.Wrapper>
                <Styled.Title>이메일 인증</Styled.Title>
                <Styled.Img>
                    <img src="img/email.png" alt="options" width={100} />
                </Styled.Img>
                <Styled.Content>
                    <Styled.Color>abc@suwon.ac.kr</Styled.Color>로<br />
                    전송된 인증 메일을 확인해주세요
                    <br />
                    <br />
                    <br />
                    메일 인증 후 수위키 서비스 이용이 가능합니다.
                </Styled.Content>

                <Button color="blue" onClick={() => navigate("/")}>
                    메인으로
                </Button>
            </Styled.Wrapper>
        </Positioner>
    )
}

export default EmailSignUp
