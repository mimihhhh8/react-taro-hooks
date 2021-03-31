
import { CHANGE, } from '../constants/index'

export const reducers_change = (key, payload, replace = false) => {
    return {
        type: CHANGE,
        key,
        payload,
        replace,
    }
}

export const change_state = (state, action) => {
    let data = {};
    if (action.key) {
        if (action.replace || Array.isArray(state[action.key]) || Array.isArray(action.payload)) {
            data[action.key] = action.payload
        } else if (typeof action.payload === 'object') {// 不应该传入function
            data[action.key] = Object.assign({}, state[action.key], action.payload)
        } else {
            data[action.key] = action.payload
        }
    } else {
        data = action.payload
    }
    return data
}
// reducers  接受到dispath 派发来的 （state，action ）进行处理   返回一个新的 state  
// reducers
export const reducers = (state, action) => {
    console.log('action: ', action);
    switch (action.type) {
        case CHANGE:
            let data = change_state(state, action)
            return {
                ...state,
                ...data
            }
        default:
            return state
    }
}