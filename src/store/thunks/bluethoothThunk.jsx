import apiDB from "../../api/Api";
import { SEND_DATA_BLUETHOOTH_ATTEMPT, SEND_DATA_BLUETHOOTH_FAILURE, SEND_DATA_BLUETHOOTH_SUCCESS } from "../slice/bluethoothReducer";

export const sendDataBluethooth=(sendData)=>{
    return async(dispatch,getState)=>{
        try {
            dispatch(SEND_DATA_BLUETHOOTH_ATTEMPT());
            const {data}=await apiDB.post('/data/bluetooth/',sendData);
            if(data){
                dispatch(SEND_DATA_BLUETHOOTH_SUCCESS());
            }else{
                dispatch(SEND_DATA_BLUETHOOTH_FAILURE());
            }
        } catch (error) {
            dispatch(SEND_DATA_BLUETHOOTH_FAILURE());
        }
    }
}