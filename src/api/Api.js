import axios from "axios"
import {Cookies} from "react-cookie"

const cookies = new Cookies()

export const setCookie = (name, value, option) => {
    return cookies.set(name, value, {...option})
}
export const getCookie = (name) => {
    return cookies.get(name)
}

//메인페이지
///lecture/findAllList/?option=lectureSatisfactionAvg&page=1 데이터 받아옴
//modifiedDate 최근강의
//lectureSatisfactionAvg 만족도 강의
//lectureHoneyAvg 꿀강의
//lectureLearningAvg 배울게 많은 강의
const PROXY_URL = window.location.hostname === "localhost" ? "" : "/proxy"

export const mainApi = async (lecture) => {
    const url = `${PROXY_URL}/lecture/findAllList/?option=${lecture}&page=1`

    const options = {
        method: "GET",
        url,
    }

    try {
        const response = await axios(options)
        return response.data
    } catch (e) {
        throw e
    }
}
//공지사항api 확인 필요
export const noticeApi = async () => {
    const url = `${PROXY_URL}/notice/findAllList`

    const options = {
        method: "GET",
        url,
    }

    try {
        const response = await axios(options)
        return response.data
    } catch (e) {
        throw e
    }
}

//회원가입 api 0
export const registerApi = (setData, setLoading, id, pw, email) => {
    const url = `${PROXY_URL}/user/join`

    const data = {
        loginId: id,
        password: pw,
        email: email,
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    }
    axios(options).then(
        (r) => {
            console.log("connect")
            console.log(r.data)
            setData(r.data)
            setLoading(true)
        },
        (error) => {
            console.log(error.response.data)
            console.log(data)
        }
    )
}

//회원가입 아이디 중복확인 (완료)
export const checkidApi = (setData, id) => {
    const url = `${PROXY_URL}/user/check-id`

    const data = {
        loginId: id,
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    }

    axios(options).then(
        (response) => {
            setData(!response.data.overlap)
            if (!response.data.overlap) alert("사용가능합니다.")
            else alert("중복입니다.")
        },
        (error) => {
            console.log(error)
            alert("요청에 실패하였습니다.")
        }
    )
}

//회원가입 이메일 중복확인 (완료)
export const checkemailApi = (setData, email) => {
    const url = `${PROXY_URL}/user/check-email`

    const data = {
        email: email,
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    }

    axios(options).then(
        (response) => {
            setData(!response.data.overlap)
            if (!response.data.overlap) alert("사용가능합니다.")
            else alert("중복입니다.")
        },
        (error) => {
            console.log(error)
            alert("요청에 실패하였습니다.")
        }
    )
}

//로그인api 0
export const loginApi = (setData, setLoading, id, pw) => {
    const url = `${PROXY_URL}/user/login`

    const data = {
        loginId: id,
        password: pw,
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    }
    axios(options).then(
        (r) => {
            console.log("connect")
            console.log(r.data)
            setData(r.data)
            setLoading(true)
            setCookie('AccessToken', r.data['AccessToken'], {
                path:"/",
                secure: true,
                sameSite: false,
            })
            setCookie('RefreshToken', r.data['RefreshToken'], {
                path:"/",
                secure: true,
                sameSite: false,
            })
        },
        (error) => {
            console.log(error.response)
            console.log(data)
            alert("id 또는 pw 확인해주세요")
        }
    )
}

//아이디 찾기api (완료)
export const findIdApi = (setData, email) => {
    const url = `${PROXY_URL}/user/find-id`

    const data = {
        email: email,
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    }
    axios(options).then(
        (r) => {
            alert("해당 아이디가 존재합니다")
            setData(r.data)
        },
        (error) => {
            alert("해당 아이디를 찾을 수 없습니다.")
        }
    )
}

//비밀번호 찾기api (완료)
export const findPwApi = (setData, id, email) => {
    const url = `${PROXY_URL}/user/find-pw`

    const data = {
        loginId: id,
        email: email,
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    }
    axios(options).then(
        (response) => {
            alert("해당 이메일로 임시 비밀번호를 발송하였습니다.")
            setData(response.data)
        },
        (error) => {
            alert("해당 아이디.이메일을 찾을 수 없습니다.")
        }
    )
}

// 내정보Api
export const myInfoApi = (setData) => {
    const url = `${PROXY_URL}/user/my-page`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            AccessToken: getCookie('AccessToken')
        },
        url,
    }

    axios(options).then(
        (r) => {
            console.log("connect")
            console.log(r.data)
            setData(r.data)
        },
        (error) => {
            console.log(error.response)
        }
    )
}

// 내가쓴글-강의평가Api
export const evaluatePostApi = (setData) => {
    const url = `${PROXY_URL}/evaluate-posts/findByUserIdx`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            AccessToken: getCookie('AccessToken'),
        },
        url,
    }

    axios(options).then(
        (r) => {
            console.log("connect")
            console.log(r.data)
            setData(r.data)
        },
        (error) => {
            console.log(error.response)
        }
    )
}

// 내가쓴글-시험정보Api
export const examPostApi = (setData) => {
    const url = `${PROXY_URL}/exam-posts/findByUserIdx`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            AccessToken: getCookie('AccessToken'),
        },
        url,
    }

    axios(options).then(
        (r) => {
            console.log("connect")
            console.log(r.data)
            setData(r.data)
        },
        (error) => {
            console.log(error.response)
        }
    )
}

//강의평가수정 api 미완
export const evaluateUpdateApi = (
    setData,
    semester,
    satisfaction,
    learning,
    honey,
    team,
    difficulty,
    homework,
    content,
    id
) => {
    const url = `/evaluate-posts/update/?evaluateIdx=${id}`

    const data = {
        semester: semester,
        satisfaction: satisfaction,
        learning: learning,
        honey: honey,
        team: team,
        difficulty: difficulty,
        homework: homework,
        content: content,
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            AccessToken: getCookie('AccessToken'),
        },
        data: data,
        url,
    }
    axios(options).then(
        (response) => {
            alert("수정완료")
            setData(response.data)
            window.location.reload()
        },
        (error) => {
            alert("error")
        }
    )
}

//시험정보수정 api 미완
export const examUpdateApi = (
    setData,
    semester,
    examInfo,
    examDifficulty,
    content,
    id
) => {
    const url = `/exam-posts/update/?examIdx=${id}`

    const data = {
        semester: semester,
        examInfo: examInfo,
        examDifficulty: examDifficulty,
        content: content,
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            AccessToken: getCookie('AccessToken'),
        },
        data: data,
        url,
    }
    axios(options).then(
        (response) => {
            alert("수정완료")
            setData(response.data)
            window.location.reload()
        },
        (error) => {
            alert("error")
        }
    )
}

// 통합검색결과Api
//꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
export const searchApi = (setData, search, lecutre) => {
    const url = `${PROXY_URL}/lecture/findBySearchValue/?searchValue=${search}&option=${lecutre}&?page=1`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        url,
    }

    axios(options).then(
        (r) => {
            console.log("connect")
            console.log(url)
            console.log(r.data, "검색")
            setData(r.data)
        },
        (error) => {
            console.log(error.response)
        }
    )
}
