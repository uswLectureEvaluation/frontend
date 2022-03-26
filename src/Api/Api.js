import axios from "axios";

//메인페이지
///lecture/findAllList/?option=lectureSatisfactionAvg&page=1 데이터 받아옴
//modifiedDate 최근강의
//lectureSatisfactionAvg 만족도 강의
//lectureHoneyAvg 꿀강의
//lectureLearningAvg 배울게 많은 강의
export const mainApi = (setData, lecture) => {
    const url = `/lecture/findAllList/?option=${lecture}&page=1`

    const options = {
        method: "GET",
        url
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            console.log(url)
            setData(r.data)
        }, (error) => {
            console.log(error.response);
            console.log(url)
        }
    )
}
//공지사항api 확인 필요
export const noticeApi = (setData) => {

    const url = "/notice/findAllList"

    const options = {
        method: "GET",
        url
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data)
        }, (error) => {
            console.log(error.response);
        }
    )
}

//회원가입 api 0 
export const registerApi = (setData, setLoading, id, pw, email) => {
    const url = "/user/join"

    const data = {
        loginId: id,
        password: pw,
        email: email
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
            setLoading(true)
        },
        (error) => {
            console.log(error.response.data);
            console.log(data)
        }
    );
}

//회원가입 아이디 중복확인 (완료)
export const checkidApi = (setData, id) => {
    const url = "/user/check-id"

    const data = {
        loginId: id
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url
    }

    axios(options).then(
        (response) => {
            setData(!response.data.overlap);
            if (!response.data.overlap) alert('사용가능합니다.')
            else alert('중복입니다.')
        },
        (error) => {
            console.log(error);
            alert('요청에 실패하였습니다.')
        }
    );
}

//회원가입 이메일 중복확인 (완료)
export const checkemailApi = (setData, email) => {
    const url = "/user/check-email"

    const data = {
        email: email
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url
    }

    axios(options).then(
        (response) => {
            setData(!response.data.overlap);
            if (!response.data.overlap) alert('사용가능합니다.')
            else alert('중복입니다.')
        },
        (error) => {
            console.log(error);
            alert('요청에 실패하였습니다.')
        }
    );
}


//로그인api 0
export const loginApi = (setData, setLoading, id, pw) => {
    const url = "/user/login";

    const data = {
        loginId: id,
        password: pw,
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
            setLoading(true)
            localStorage.setItem('AccessToken', r.data['AccessToken'])
        },
        (error) => {
            console.log(error.response);
            console.log(data)
            alert('id 또는 pw 확인해주세요')
        }
    );
};

//아이디 찾기api (완료)
export const findIdApi = (setData, email) => {
    const url = "/user/find-id";

    const data = {
        email: email
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            alert("해당 아이디가 존재합니다")
            setData(r.data);
        },
        (error) => {
            alert("해당 아이디를 찾을 수 없습니다.")
        }
    );
};

//비밀번호 찾기api (완료)
export const findPwApi = (setData, id, email) => {
    const url = "/user/find-pw";

    const data = {
        loginId: id,
        email: email
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (response) => {
            alert("해당 이메일로 임시 비밀번호를 발송하였습니다.")
            setData(response.data);
        },
        (error) => {
            alert("해당 아이디.이메일을 찾을 수 없습니다.")
        }
    );
};

// 내정보Api
export const myInfoApi = (setData) => {

    const url = "/user/my-page"

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            AccessToken: localStorage.getItem('AccessToken')
        },
        url,
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data)
        }, (error) => {
            console.log(error.response);
        }
    )
}

// 내가쓴글-강의평가Api
export const evaluatePostApi = (setData) => {

    const url = "/evaluate-posts/findByUserIdx"

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            AccessToken: localStorage.getItem('AccessToken')
        },
        url,
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data)
        }, (error) => {
            console.log(error.response);
        }
    )
}

// 내가쓴글-시험정보Api
export const examPostApi = (setData) => {

    const url = "/exam-posts/findByUserIdx"

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            AccessToken: localStorage.getItem('AccessToken')
        },
        url,
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data)
        }, (error) => {
            console.log(error.response);
        }
    )
}

// 통합검색결과Api
//꿀강순[modifiedDate, lectureSatisfactionAvg, lectureHoneyAvg, lectureLearningAvg]
export const searchApi = (setData, search) => {

    const url = `/lecture/findBySearchValue/?searchValue=${search}&?option=lectureHoneyAvg&?page=1`

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        url,
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data)
            console.log(typeof(search))
        }, (error) => {
            console.log(error.response);
        }
    )
}