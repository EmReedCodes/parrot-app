import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import speechReducer from '../features/speech/speechSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    speech: speechReducer,
  },
});
