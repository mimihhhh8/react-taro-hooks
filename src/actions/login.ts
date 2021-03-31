import Taro from '@tarojs/taro'
import API from '../services/service-base/http-methods'
import { reducers, reducers_change } from '../reducers/reducers'
import { ErrorCode } from '../services/service-base/status-code'


//登录
export const login = (data, succ, fail) => async (dispatch) => {
    const res = await API.post('/passport/sign-in', { ...data }, 'application/json')
    if (ErrorCode.is_succ(res)) {
        Taro.setStorageSync('token', res.data.token)
        dispatch(reducers_change('test', res.data || []))//dispatch   派发一个antions（reducers_change）   传给reducers {文件（../reducers/reducers）}

        succ && succ(res.data)
    } else {
        Taro.showToast({
            title: res.meta.msg,
            icon: 'none'
        })
        fail && fail(res)
    }
}
const INITIAL_STATE = {
    num: 0,
    test: {}
}
export default function (state = INITIAL_STATE, action) {
    return reducers(state, action)
}