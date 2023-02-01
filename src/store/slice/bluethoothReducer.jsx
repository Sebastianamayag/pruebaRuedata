import { createSlice } from '@reduxjs/toolkit'
import { ATTEMPT, FAILURE, NONE, SUCCESS } from '../constants';

const initialState = {
  sendData:{
    status:NONE,
    message:''
  },
}

export const bluethoothSlice = createSlice({
  name: 'bluethooth',
  initialState,
  reducers: {
    SEND_DATA_BLUETHOOTH_ATTEMPT: (state,action) => {
      state.sendData.status=ATTEMPT;
      state.sendData.message='';
      return state;
    },
    SEND_DATA_BLUETHOOTH_SUCCESS: (state,action) => {
      state.sendData.status=SUCCESS;
      state.sendData.message='';
      return state;
    },
    SEND_DATA_BLUETHOOTH_FAILURE: (state,action) => {
      state.sendData.status=FAILURE;
      state.sendData.message='Error al enivar los datos, por favor intente más tarde';
      return state;
    },
  },
})

export const {SEND_DATA_BLUETHOOTH_ATTEMPT,SEND_DATA_BLUETHOOTH_SUCCESS,SEND_DATA_BLUETHOOTH_FAILURE} = bluethoothSlice.actions

export default bluethoothSlice.reducer