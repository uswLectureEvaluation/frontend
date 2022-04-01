import React, { useState, useEffect } from "react"
import * as Styled from "./styled"
import { findPwApi } from "../../api/Api"
import { TextField } from "@material-ui/core"

const PwSearch = () => {
    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const [db, setData] = useState({
        data: [],
    })

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeID = (e) => {
        setUserName(e.target.value)
    }
    const handleSubmit = () => {
        findPwApi(setData, username, email)
    }

    useEffect(() => {
        console.log(db.data)
    }, [db.data])
    return (
        <Styled.Container>
            <Styled.Img src="img/signup.svg" width={450} />
            <Styled.LoginWrapper>
                <Styled.Title>비밀번호 찾기</Styled.Title>
                <TextField
                    margin="dense"
                    required
                    id="id"
                    variant="outlined"
                    label="Input your SUWIKI ID"
                    name="id"
                    autoComplete="id"
                    autoFocus
                    onChange={onChangeID}
                />
                <TextField
                    margin="dense"
                    required
                    id="email"
                    variant="outlined"
                    label="Input your Email"
                    name="email"
                    autoComplete="email"
                    onChange={onChangeEmail}
                />
                <Styled.Button
                    background="#3DD3C4"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    비밀번호 찾기
                </Styled.Button>
                아이디에 해당하는
                <br />
                학교메일로 임시 비밀번호를 전송합니다.
            </Styled.LoginWrapper>
        </Styled.Container>
    )
}

export default PwSearch