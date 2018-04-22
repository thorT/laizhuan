import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    if (response.status === 200 || response.status === 304) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

//与后端约定错误码
function checkCode(res) {
    if (res.data.code !== 0) {
        alert(res.data.message)
    }
    return res
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 30000,
            headers: {
            }
        }).then(checkStatus).then(checkCode)
    }
}