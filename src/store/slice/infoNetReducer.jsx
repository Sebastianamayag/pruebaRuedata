import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status:true
}

export const netInfoSlice = createSlice({
  name: 'net',
  initialState,
  reducers: {
    CHANGE_NET_STATUS: (state,action) => {
      state.status=action.payload.net;
      return state;
    },
  },
})

export const {CHANGE_NET_STATUS} = netInfoSlice.actions

export default netInfoSlice.reducer