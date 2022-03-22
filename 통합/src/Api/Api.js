import axios from "axios";


//공지사항api
export const noticeApi = (setData) => {
    const url = 'https://api.suwiki.kr/notice/findAllList'

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
            console.log(error);
        }
    )
}

