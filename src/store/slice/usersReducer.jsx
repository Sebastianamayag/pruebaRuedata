import { createSlice } from '@reduxjs/toolkit'
import { ATTEMPT, FAILURE, NONE, SUCCESS } from '../constants';

const initialState = {
  getUsers:{
    status:NONE,
    message:'',
    users:[],
  },
  createrUser:{
    status:NONE,
    message:''
  },
  updateUser:{
    status:NONE,
    message:''
  },
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    LOAD_USER_ATTEMPT: (state,action) => {
      state.getUsers.status=ATTEMPT;
      state.getUsers.message='';
      state.getUsers.users=[];
      return state;
    },
    LOAD_USER_SUCCESS: (state,action) => {
      state.getUsers.status=SUCCESS;
      state.getUsers.message='';
      state.getUsers.users=action.payload.users;
      return state;
    },
    LOAD_USER_FAILURE: (state,action) => {
      state.getUsers.status=FAILURE;
      state.getUsers.message='Error al cargar los usuarios, por favor intente más tarde';
      state.getUsers.users=[];
      return state;
    },
    CREATE_USER_ATTEMPT: (state,action) => {
      state.createrUser.status=ATTEMPT;
      state.createrUser.message='';
      return state;
    },
    CREATE_USER_SUCCESS: (state,action) => {
      state.createrUser.status=SUCCESS;
      state.createrUser.message='';
      return state;
    },
    CREATE_USER_FAILURE: (state,action) => {
      state.createrUser.status=FAILURE;
      state.createrUser.message='Error al crear el usuario, por favor intente más tarde';
      return state;
    }
    ,
    UPDATE_USER_ATTEMPT: (state,action) => {
      state.updateUser.status=ATTEMPT;
      state.updateUser.message='';
      return state;
    },
    UPDATE_USER_SUCCESS: (state,action) => {
      state.updateUser.status=SUCCESS;
      state.updateUser.message='';
      return state;
    },
    UPDATE_USER_FAILURE: (state,action) => {
      state.updateUser.status=FAILURE;
      state.updateUser.message='Error al actualizar el usuario, por favor intente más tarde';
      return state;
    }
  },
})

export const {UPDATE_USER_ATTEMPT,UPDATE_USER_SUCCESS,UPDATE_USER_FAILURE,CREATE_USER_ATTEMPT,CREATE_USER_SUCCESS,CREATE_USER_FAILURE ,LOAD_USER_ATTEMPT,LOAD_USER_SUCCESS,LOAD_USER_FAILURE} = usersSlice.actions

export default usersSlice.reducer