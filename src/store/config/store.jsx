import { configureStore } from '@reduxjs/toolkit'
import bluethoothReducer from '../slice/bluethoothReducer'
import imagesReducer from '../slice/imagesReducer'
import infoNetReducer from '../slice/infoNetReducer'
import usersReducer from '../slice/usersReducer'

export const store = configureStore({
  reducer: {
    user:usersReducer,
    image:imagesReducer,
    net:infoNetReducer,
    blue:bluethoothReducer
  },
})