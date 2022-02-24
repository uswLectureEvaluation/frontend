import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './Footer/Footer'
import GlobalStyle from './globalStyles'
import Nav from './Navbar/Nav'
import Main from './Pages/Main'
import Notice from './Pages/Notice'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route index path="/notice" element={<Notice />} />
      </Routes>
    </Router>
  )
}

export default App