import React, { useState } from "react";
import { CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import { Box1, LoginButton, Logo, IdPwSearchLink, IdInput, PwInput } from "./login.element";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Cookies } from 'react-cookie'



const Login = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();
  // 체크박스 이벤트
  const onChange = (event) => {
    setChecked(event.target.checked);
  };
  const onChangeID = (e) => {
    setUserName(e.target.value);
  }
  const onChangePW = (e) => {
    setPassWord(e.target.value);
  }
  const onSubmit = async e => {

    async function loginUser(credentials) {
      return fetch('https://www.mecallapi.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => data.json()) //await
    }

    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if ('accessToken' in response) {
      swal("로그인 성공", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
        .then((value) => {
          localStorage.setItem('accessToken', response['accessToken']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          navigate("/myinformation");
        });
    } else {
      swal("로그인 실패", response.message, "error");
      //try-catch
    }
  }


  // 로그인 버튼 이벤트
  /*const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // 기능구현때는 콘솔안찍고 바로 백엔드로 넘겨주기
    console.log({
      id: data.get('id'),
      password: data.get('password'),
      checkbox: checked
    });
  };*/



  return (
    <div style={{marginTop:"20px"}}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box1>
          <Logo>SUGANG</Logo>
          <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
            <IdInput propsFunction={onChangeID} />
            <PwInput propsFunction={onChangePW} />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={onChange} color="primary" />}
              label="로그인 유지"
            />
            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </LoginButton>
            <Grid container>
              <Grid item xs>
                <Link href="/Idsearch" variant="body2">
                  <IdPwSearchLink>아이디 찾기</IdPwSearchLink>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Pwsearch" variant="body2">
                  <IdPwSearchLink>비밀번호 찾기</IdPwSearchLink>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box1>
      </Container>
    </div>
  );
}


export default Login;