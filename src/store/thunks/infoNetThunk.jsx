import { CHANGE_NET_STATUS } from "../slice/infoNetReducer"

export const chageStateNet=(status)=>{
    return async(dispatch,getState)=>{
        dispatch(CHANGE_NET_STATUS({net:status}))
    }
}
