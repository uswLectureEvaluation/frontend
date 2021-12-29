import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar/Nav'
import GlobalStyle from './globalStyles';


const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      
    </Router>
  )
}

export default App
