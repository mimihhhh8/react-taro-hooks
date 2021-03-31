import API from '../services/service-base/http-methods'
import {SAVETOKEN} from '../constants/login'

interface loginParams {
    phone:string,
    safe_code:string
}
export const login = (data:loginParams)=>{
    return dispatch =>{
        API.post('/api/passport/sign-in',data, 'application/json').then(res=>{
            console.log(res)
            dispatch({
                type:SAVETOKEN,
                payload:{
                    data:res.data
                }
            })
        })
    } 
}