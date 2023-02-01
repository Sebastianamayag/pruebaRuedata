import apiDB from "../../api/Api"
import { goBack } from "../../router/NavigationRef"
import { LOAD_IMAGE_ATTEMPT, LOAD_IMAGE_FAILURE, LOAD_IMAGE_SUCCESS, UPLOAD_IMAGE_ATTEMPT, UPLOAD_IMAGE_FAILURE, UPLOAD_IMAGE_SUCCESS } from "../slice/imagesReducer"


export const getImages=()=>{
    return async(dispatch)=>{
        dispatch(LOAD_IMAGE_ATTEMPT())
        try {
            const {data}=await apiDB.get('/data/images/')
            if(data){
                dispatch(LOAD_IMAGE_SUCCESS({images:data}))
            }else{
                dispatch(LOAD_IMAGE_FAILURE())
            }
        } catch (error) {
            dispatch(LOAD_IMAGE_FAILURE())
        }
    }
}


export const uploadImages=(image)=>{
    return async(dispatch,getState)=>{
        try {
            dispatch(UPLOAD_IMAGE_ATTEMPT());
            const newImage={...image,dateModified:new Date()}
            const formData = new FormData();
            formData.append('file', newImage,newImage.fileName)
            console.log(formData)
            const data=await apiDB.post('/data/images/',{"file":formData});
            if(data){
                dispatch(UPLOAD_IMAGE_SUCCESS());
                goBack()
            }else{
                dispatch(CREATE_USER_FAILURE());
            }
        } catch (error) {
            dispatch(UPLOAD_IMAGE_FAILURE());
            // console.log("error",error)
        }
    }
}