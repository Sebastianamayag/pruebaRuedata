import { createrUser, updateUser } from "../store/thunks/usersThunk"

export const handleUsers=(user,data,dispatch)=>{
    if(!user){
        dispatch(createrUser(data))
    }else{
        dispatch(updateUser({
            first_name:data.first_name?data.first_name:user.first_name,
            last_name:data.last_name?data.last_name:user.last_name,
            username:user.username
        }))
    }
}