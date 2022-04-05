import axios from "axios"
import { Cookies } from "react-cookie"

const cookies = new Cookies()

const PROXY_URL = window.location.hostname === "localhost" ? "" : "/proxy"

const instance = axios.create({
    baseURL: `${PROXY_URL}`,
    timeout: 5000,
})

instance.interceptors.request.use(
    function (config) {
        //request 정상
        config.headers["Content-Type"] = "application/json"
        config.headers["AccessToken"] = cookies.get("AccessToken")
        console.log(config)

        return config
    },
    function (error) {
        //request 에러
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function (response) {
        //response 정상
        console.log(response)
        return response.data
    },
    function (error) {
        //response 에러
        console.log(error, "dddd")

        return Promise.reject(error)
    }
)

export default instance
