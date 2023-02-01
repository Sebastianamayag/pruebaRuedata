import { createSlice } from '@reduxjs/toolkit'
import { ATTEMPT, FAILURE, NONE, SUCCESS } from '../constants';

const initialState = {
  getImages:{
    status:NONE,
    message:'',
    images:[],
  },
  uploadImage:{
    status:NONE,
    message:''
  }
}

export const imagessSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    LOAD_IMAGE_ATTEMPT: (state,action) => {
      state.getImages.images=[];
      state.getImages.message='';
      state.getImages.status=ATTEMPT;
      return state;
    },
    LOAD_IMAGE_SUCCESS: (state,action) => {
      state.getImages.images=action.payload.images;
      state.getImages.message='';
      state.getImages.status=SUCCESS;
      return state;
    },
    LOAD_IMAGE_FAILURE: (state,action) => {
      state.getImages.images=[];
      state.getImages.message='Eror al cargar las imagenes, por favor intente más tarde';
      state.getImages.status=FAILURE;
      return state;
    },
    UPLOAD_IMAGE_ATTEMPT: (state,action) => {
      state.uploadImage.status=ATTEMPT;
      state.uploadImage.message=''
      return state;
    },
    UPLOAD_IMAGE_SUCCESS: (state,action) => {
      state.uploadImage.status=SUCCESS;
      state.uploadImage.message=''
      return state;
    },
    UPLOAD_IMAGE_FAILURE: (state,action) => {
      state.uploadImage.status=FAILURE;
      state.uploadImage.message='Error al subir la foto al servidor, por favor intente más tarde.'
      return state;
    }
  },
})

export const {UPLOAD_IMAGE_ATTEMPT,UPLOAD_IMAGE_SUCCESS,UPLOAD_IMAGE_FAILURE ,LOAD_IMAGE_ATTEMPT,LOAD_IMAGE_SUCCESS,LOAD_IMAGE_FAILURE} = imagessSlice.actions

export default imagessSlice.reducer