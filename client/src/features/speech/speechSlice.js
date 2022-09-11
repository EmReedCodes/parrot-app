//notice how there is no jsx on this file yet I can use redux 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import speechService from './speechService'


const initialState = {
    //state labeled speech 
    speech: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }
  

  export const createSpeechWord = createAsyncThunk(
    'speech/save',
    async (speechData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await speechService.saveWord(speechData, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)
  
export const speechSlice = createSlice({
    //notice I've named this differently from state 'speech'
    name: 'speechWord',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createSpeechWord.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createSpeechWord.fulfilled, (state, action) => {
          state.isLoading = false
            state.isSuccess = true
            //names get tricky here speech I think because speech []
          state.speech.push(action.payload)
        })
        .addCase(createSpeechWord.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })

    },
})

export const { reset } = speechSlice.actions
export default speechSlice.reducer