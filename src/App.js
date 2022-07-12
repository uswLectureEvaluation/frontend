import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './components';
import GlobalStyle from './GlobalStyle';
import {
  EmailSignUp,
  LectureInfo,
  Main,
  MyInfo,
  Search,
  SignUp,
  Login,
  IdSearch,
  PwSearch,
  HistoryTest,
  Exit,
} from './pages';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import Myinfodetail from './pages/Myinfodetail/myinfodetail';
import ScrollButton from './components/ScrollButton';
import ResetPassword from './pages/ResetPassword';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav style={{ zindex: 5 }} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pwsearch" element={<PwSearch />} />
        <Route path="/idsearch" element={<IdSearch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myinformation" element={<MyInfo />} />
        <Route path="/myinfodetail" element={<Myinfodetail />} />
        <Route path="/lectureinfo" element={<LectureInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="/emailsignup" element={<EmailSignUp />} />
        <Route path="/noticedetail" element={<NoticeDetail />} />
        <Route path="/historytest" element={<HistoryTest />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
