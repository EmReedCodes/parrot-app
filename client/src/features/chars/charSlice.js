
import { createSlice } from '@reduxjs/toolkit'


export const charSlice = createSlice({
  name: "chars",
  initialState: {
      charsArr: [],
      id: '',
      blank: false,
  },
  reducers: {
    update: (state, action) => {
      state.charsArr = action.payload.charsArr
      },
      
    
  },
})

export const { update, remove } = charSlice.actions

export default charSlice.reducer