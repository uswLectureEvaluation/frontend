import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './components';
import ScrollButton from './components/ScrollButton';
import GlobalStyle from './GlobalStyle';

const BanReason = lazy(() => import('./pages/BanReason'));
const EmailSignUp = lazy(() => import('./pages/EmailSignUp'));
const Exit = lazy(() => import('./pages/Exit'));
const HistoryTest = lazy(() => import('./pages/HistoryTest'));
const IdSearch = lazy(() => import('./pages/IdSearch'));
const LectureInfo = lazy(() => import('./pages/LectureInfo'));
const Login = lazy(() => import('./pages/Login'));
const Main = lazy(() => import('./pages/Main'));
const MyInfo = lazy(() => import('./pages/MyInfo'));
const MyPosting = lazy(() => import('./pages/MyPosting'));
const Notice = lazy(() => import('./pages/Notice'));
const NoticeDetail = lazy(() => import('./pages/NoticeDetail'));
const PwSearch = lazy(() => import('./pages/PwSearch'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const Search = lazy(() => import('./pages/Search'));
const SignUp = lazy(() => import('./pages/SignUp'));

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav style={{ zindex: 5 }} />
      <Suspense fallback={<></>}>
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
      </Suspense>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
