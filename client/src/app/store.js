import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import speechReducer from '../features/speech/speechSlice'
import wordReducer from '../features/words/wordsSlice'
import charReducer from '../features/chars/charSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    speech: speechReducer,
    word: wordReducer,
    char: charReducer,
  },
});
