
import { createSlice } from '@reduxjs/toolkit'


export const charSlice = createSlice({
  name: "char",
  initialState: {
      charsArr: [],
  },
  reducers: {
    add: (state, action) => {
      state.charsArr = action.payload.charsArr
      },
      
    
  },
})

export const { add } = charSlice.actions

export default charSlice.reducer