import React from 'react'
import { ThemeProvider, createTheme } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import GlobalStyle from './globalStyles'
import Nav from './Navbar/Nav'
import Main from './Pages/Main'
import Notice from './Pages/Notice'
import Login from './Pages/Login/login'
import PwSearch from './Pages/Login/pwsearch'
import IdSearch from './Pages/Login/idsearch'
import Signup from './Pages/SignUp/index'
import Myinfo from './Pages/Login/myinformation'
import Myinfodetial from './Pages/Login/myinfodetail'
import LectureInfo from './Pages/LectureInfo/'
import Search from './Pages/Search/'
import EmailSignUp from './Pages/EmailSignUp/'
import ScrollToTop from './ScrollToTop'

const themeLight = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    }
  },
});

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Nav style={{ zindex: 5 }} />
      <ThemeProvider theme={themeLight}>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/notice" element={<Notice />} />
          <Route path='/login' element={<Login />} />
          <Route path='/pwsearch' element={<PwSearch />} />
          <Route path='/idsearch' element={<IdSearch />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/myinformation' element={<Myinfo />} />
          <Route path='/myinfodetail' element={<Myinfodetial />} />
          <Route path='/lectureinfo' element={<LectureInfo />} />
          <Route path='/search' element={<Search />} />
          <Route path="/emailsignup" element={<EmailSignUp />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </Router>
  )
}

export default App