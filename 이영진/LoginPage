import React, {useState} from "react";
import {CssBaseline, FormControlLabel, Checkbox, Link, Grid, Box, Container, createTheme, ThemeProvider } from "@material-ui/core";
import {Box1, LoginButton, Logo, IdPwSearchLink, IdInput, PwInput} from "./login.element";



  const theme = createTheme();
  const Login = () => {
    const [checked, setChecked] = useState(false);

    // 체크박스 이벤트
    const handleChange = (event) => {
    setChecked(event.target.checked);
    };

    // 로그인 버튼 이벤트
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      // 기능구현때는 콘솔안찍고 바로 백엔드로 넘겨주기
      console.log({
        id: data.get('id'),
        password: data.get('password'),
        checkbox: checked
      });
    };
    
   

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box1>
              <Logo>SUGANG</Logo>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <IdInput/>
              <PwInput/>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} color="primary" />}
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
                  <Link href="#" variant="body2">
                    <IdPwSearchLink>아이디 찾기</IdPwSearchLink>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                   <IdPwSearchLink>비밀번호 찾기</IdPwSearchLink>
                  </Link>
                </Grid>
              </Grid>
            </Box>
            </Box1>
        </Container>
      </ThemeProvider>
    );
  }

  export default Login;
