import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './components';
import ScrollButton from './components/ScrollButton';
import GlobalStyle from './GlobalStyle';
import {
  BanReason,
  EmailSignUp,
  Exit,
  HistoryTest,
  IdSearch,
  LectureInfo,
  Login,
  Main,
  MyInfo,
  MyPosting,
  Notice,
  NoticeDetail,
  PwSearch,
  ResetPassword,
  Search,
  SignUp,
} from './pages'; //페이지 목록

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
        <Route path="/myposting" element={<MyPosting />} />
        <Route path="/lectureinfo" element={<LectureInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="/emailsignup" element={<EmailSignUp />} />
        <Route path="/noticedetail" element={<NoticeDetail />} />
        <Route path="/historytest" element={<HistoryTest />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/banreason" element={<BanReason />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
