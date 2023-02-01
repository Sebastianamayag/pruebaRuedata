import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/thunks/usersThunk';

export const useGetUserData = () => {
    const {status,message,users}=useSelector(state=>state.user.getUsers)
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return {status,message,users}
  }