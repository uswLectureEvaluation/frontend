import React from 'react';
import Login from './pages/login';
import Idsearch from './pages/idsearch';
import Pwsearch from './pages/pwsearch';
import Myinformation from './pages/myinformation'
import Myinfodetail from './pages/myinfodetail'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@material-ui/core';
const themeLight = createTheme({
  palette: {
    background: {
      default: "#ffffff"
    }
  },
});

class App extends React.Component{
  render(){
    return (
      <div>
        <ThemeProvider theme={themeLight}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Idsearch" element={<Idsearch/>} />
          <Route path="/Pwsearch" element={<Pwsearch/>} />
          <Route path="/myinformation" element={<Myinformation/>}/>
          <Route path="/myinfodetail" element={<Myinfodetail/>}/>
        </Routes>
        </BrowserRouter>
        </ThemeProvider>
      </div>
    );
  }
}
export default App;