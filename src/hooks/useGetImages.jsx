import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '../store/thunks/imagesThunk';
import { useData } from './useData'

export const useGetImages = () => {
    const dispatch=useDispatch();
    const {images,message,status}=useSelector(state=>state.image.getImages)
    useEffect(() => {
      dispatch(getImages())
    }, [])
    const {data,onInputChange}=useData();
  return {data,onInputChange,images,message,status}
}
