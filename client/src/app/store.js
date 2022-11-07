import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import wordBankReducer from '../features/bankWord/bankWordSlice'
import wordReducer from '../features/words/wordsSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    wordBank: wordBankReducer,
    word: wordReducer,
  },
});
