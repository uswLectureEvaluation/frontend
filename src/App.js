import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Nav } from "./components"
import GlobalStyle from "./globalStyles"
import {
    EmailSignUp,
    LectureInfo,
    Main,
    MyInfo,
    Search,
    SignUp,
    Login,
} from "./Pages"
import Notice from "./Pages/Notice"
import NoticeDetail from "./Pages/NoticeDetail"
import PwSearch from "./Pages/Login/pwsearch"
import IdSearch from "./Pages/Login/idsearch"
import Myinfodetial from "./Pages/Login/myinfodetail"
import ScrollToTop from "./ScrollToTop"

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <ScrollToTop />
            <Nav style={{ zindex: 5 }} />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pwsearch" element={<PwSearch />} />
                <Route path="/idsearch" element={<IdSearch />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/myinformation" element={<MyInfo />} />
                <Route path="/myinfodetail" element={<Myinfodetial />} />
                <Route path="/lectureinfo" element={<LectureInfo />} />
                <Route path="/search" element={<Search />} />
                <Route path="/emailsignup" element={<EmailSignUp />} />
                <Route path="/noticedetail" element={<NoticeDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
