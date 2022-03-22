import axios from "axios";


//공지사항api
export const noticeApi = (setData) => {
    const url = 'notice/findAllList'

    const options = {
        method: 'GET',
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

export const loginApi = (setData, id, pw) => {
    const url = "/user/login";

    const data = {
        loginId: id,
        password: pw,
    };
    const options = {
        method: "POST",
        body: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
        },
        (error) => {
            console.log(error);
            console.log(data)
        }
    );
};