import React, { useEffect, useState } from "react";
import { CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import { WrapperBox, LoginButton, Logo, IdPwSearchLink, IdInput, PwInput } from "./login.element";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Cookies } from 'react-cookie'
import { loginApi } from "../../Api/Api";



const Login = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const [db, setData] = useState({
    data: []
  })
  // 체크박스 이벤트
  const onChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  const onChangeID = (e) => {
    setUserName(e.target.value);
  }
  const onChangePW = (e) => {
    setPassWord(e.target.value);
  }
  // const onSubmit = async e => {

  //   //loginApi(setData, username, password)
  //   async function loginUser(credentials) {
  //     return fetch('https://www.mecallapi.com/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(credentials)
  //     })
  //       .then(data => data.json()) //await
  //   }

  //   e.preventDefault();
  //   const response = await loginUser({
  //     username,
  //     password
  //   });
  //   if ('accessToken' in response) {
  //     swal("로그인 성공", response.message, "success", {
  //       buttons: false,
  //       timer: 2000,
  //     })
  //       .then((value) => {
  //         localStorage.setItem('accessToken', response['accessToken']);
  //         localStorage.setItem('user', JSON.stringify(response['user']));
  //         navigate("/myinformation");
  //       });
  //   } else {
  //     swal("로그인 실패", response.message, "error");
  //     //try-catch
  //   }
  // }

  const onLogin = () => {
    loginApi(setData, username, password);
  }


  useEffect(() => {
    console.log(db.data)
  }, [db.data])

  const onSubmit = (event) => {
    event.preventDefault();
  };



  return (
    <div style={{ marginTop: "20px" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <WrapperBox>
          <Logo>로그인</Logo>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <IdInput propsFunction={onChangeID} />
            <PwInput propsFunction={onChangePW} />
            <FormControlLabel
              control={<Checkbox checked={checked} onChange={onChangeCheckBox} color="primary" />}
              label="로그인 유지"
            />
            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onLogin}
            >
              로그인
            </LoginButton>
            <Grid container>
              <Grid item xs>
                <Link href="/Idsearch" variant="body2" underline="none">
                  <IdPwSearchLink>아이디 찾기</IdPwSearchLink>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Pwsearch" variant="body2" underline="none">
                  <IdPwSearchLink>비밀번호 찾기</IdPwSearchLink>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </WrapperBox>
      </Container>
    </div>
  );
}


export default Login;