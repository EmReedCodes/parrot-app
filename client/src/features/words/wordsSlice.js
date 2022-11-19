

//got rid of using this instead utilized wordBank and useContext, keeping it here for now as this is how I learned
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
      state.saidWord = null;
    },
  },
})

export const { update, remove } = wordSlice.actions

export default wordSlice.reducer