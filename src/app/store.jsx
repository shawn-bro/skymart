import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/state/authslice'
import cartReducer from '../features/About/state/Cartslice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    cart:cartReducer
  }
})