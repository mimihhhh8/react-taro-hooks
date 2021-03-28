import Taro from '@tarojs/taro'

const LOGIN_TOKEN:Object = {
    toke:''
}

// state=LOGIN_TOKEN 在页面用redux的值，action是派发过来的值
export default function  loginReducers (state=LOGIN_TOKEN,action){
    switch(action.type){
        case 'SAVETOKEN':
             Taro.setStorageSync('token',action.payload.data.token)
             return {
                 token:action.payload.data
             }
        default:
            return state

    }
}