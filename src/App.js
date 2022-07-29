import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './components';
import GlobalStyle from './GlobalStyle';
import {
  EmailSignUp,
  LectureInfo,
  Main,
  Notice,
  NoticeDetail,
  MyInfo,
  MyPosting,
  Search,
  SignUp,
  Login,
  IdSearch,
  PwSearch,
  ResetPassword,
  BanReason,
  HistoryTest,
  Exit,
} from './pages'; //페이지 목록
import ScrollButton from './components/ScrollButton';

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
