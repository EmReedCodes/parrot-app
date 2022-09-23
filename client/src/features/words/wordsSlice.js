//can i make a switch for sliced word, finalword, and random chars?
//provide initialStatae as default


import { createSlice } from '@reduxjs/toolkit'
//import { v4 as uuidv4 } from 'uuid';

export const wordSlice = createSlice({
  name: "word",
  initialState: {
    saidWord: '',
  },
  reducers: {
    update: (state, action) => {
      state.saidWord = action.payload.saidWord;
    },
    remove: (state) => {
      state = null;
    },
  },
})

export const { update, remove } = wordSlice.actions

export default wordSlice.reducer