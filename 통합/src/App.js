import React from 'react'
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
const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pwsearch' element={<PwSearch />} />
        <Route path='/idsearch' element={<IdSearch />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/myinformation' element={<Myinfo />} />
        <Route path='/myinfodetail' element={<Myinfodetial />} />
      </Routes>
    </Router>
  )
}

export default App