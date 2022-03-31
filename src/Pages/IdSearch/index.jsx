import React, { useState, useEffect } from "react"
import * as Styled from "./styled"
import { findIdApi } from "../../api/Api"
import { TextField } from "@material-ui/core"

const IdSearch = () => {
    const [email, setEmail] = useState()
    const [db, setData] = useState({
        data: [],
    })

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const emailSubmit = () => {
        findIdApi(setData, email)
    }

    useEffect(() => {
        console.log(db.data)
    }, [db.data])
    return (
        <Styled.Container>
            <Styled.Img src="img/signup.svg" width={450} />
            <Styled.LoginWrapper>
                <Styled.Title>아이디 찾기</Styled.Title>
                <TextField
                    margin="normal"
                    required
                    id="outlined-basic"
                    variant="outlined"
                    label="example@suwon.ac.kr"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={onChangeEmail}
                />
                <Styled.Button
                    background="#3DD3C4"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={emailSubmit}
                >
                    아이디 찾기
                </Styled.Button>
            </Styled.LoginWrapper>
        </Styled.Container>
    )
}

export default IdSearch
