//notice how there is no jsx on this file yet I can use redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import bankWordService from "./bankWordService"
import { useDispatch } from "react-redux"
//need to rename bankWordSlice and bankWordService

const initialState = {
  //state labeled speech
  wordBank: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

//saving word from sayitspellit & wordbank
export const createWordForBank = createAsyncThunk("word/save", async (speechData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await bankWordService.saveWord(speechData, token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//get 10 words at random for list
export const getWordsForList = createAsyncThunk("word/getWords", async (_, thunkAPI) => {
  try {
   
    //getting the token for my protected route

    const token = thunkAPI.getState().auth.user.token
    console.log(token, 'also this token')
    return await bankWordService.getBankWords(token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteWordForList = createAsyncThunk("word/delete", async (bankData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await bankWordService.deleteBankWord(bankData, token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const bankWordSlice = createSlice({
  //notice I've named this differently from state 'speech'
  name: "wordBank",
  initialState,
  reducers: {
    reset: state => initialState
  },
  extraReducers: builder => {
    builder
      .addCase(createWordForBank.pending, state => {
        state.isLoading = true
      })
      .addCase(createWordForBank.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (state.wordBank.length < 10) {
          //useDispatch(getWordsForList())
          state.wordBank.push(action.payload)
        } 
     
      })
      .addCase(createWordForBank.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getWordsForList.pending, state => {
        state.isLoading = true
      })
      .addCase(getWordsForList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.wordBank = action.payload
      })
      .addCase(getWordsForList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = bankWordSlice.actions
export default bankWordSlice.reducer
