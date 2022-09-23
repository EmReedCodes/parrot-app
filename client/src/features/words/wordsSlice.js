//can i make a switch for sliced word, finalword, and random chars?
//provide initialStatae as default


import { createSlice } from '@reduxjs/toolkit'


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