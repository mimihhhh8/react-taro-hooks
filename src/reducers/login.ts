import Taro from '@tarojs/taro'

const LOGIN_TOKEN:Object = {
    toke:''
}
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