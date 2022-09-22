import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import speechReducer from '../features/speech/speechSlice'
import wordReducer from '../features/words/wordsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    speech: speechReducer,
    word: wordReducer,
  },
});
