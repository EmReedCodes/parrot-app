//notice how there is no jsx on this file yet I can use redux
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import bankWordService from "./bankWordService"

//need to rename bankWordSlice and bankWordService

const initialState = {
  //state labeled speech
  wordBank: [],
  text: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ""
}

//saving word from sortitspellit & wordbank
//TODO: try and use this, been using saidWord 
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

    return await bankWordService.getBankWords(token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateAndReplaceWord = createAsyncThunk("word/replace", async (textData, thunkAPI) => {
  try {
   //i have to send new word over 
    console.log(textData, 'slice')
    const token = thunkAPI.getState().auth.user.token
    
    return await bankWordService.updateWord(textData, token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const deleteWordForList = createAsyncThunk("word/delete", async (_id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await bankWordService.deleteBankWord(_id, token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const getAllWords = createAsyncThunk("word/allWords", async (_, thunkAPI) => {
  try {
    //getting the token for my protected route

    const token = thunkAPI.getState().auth.user.token

    return await bankWordService.allWords(token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const bankWordSlice = createSlice({
  name: "wordBank",
  initialState,
  reducers: {
    reset: state => initialState
  },
  extraReducers: builder => {
    builder
    .addCase(createWordForBank.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    })
      .addCase(createWordForBank.pending, state => {
        state.isLoading = true
      })
      .addCase(createWordForBank.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        //since were creating the list it has to be less than 10? hmmmmm 
        if (state.wordBank.length < 10) {
          state.wordBank.push(action.payload)
        }
      })
      .addCase(updateAndReplaceWord.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updateAndReplaceWord.pending, state => {
        state.isLoading = true
      })
      .addCase(updateAndReplaceWord.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.text = action.payload
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
      .addCase(deleteWordForList.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteWordForList.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        //I needed to send back the _id for the action.payload
        state.wordBank = state.wordBank.filter(word => word._id !== action.payload._id)
        
      })
      .addCase(deleteWordForList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getAllWords.pending, state => {
        state.isLoading = true
      })
      .addCase(getAllWords.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.wordBank = action.payload
      })
      .addCase(getAllWords.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { wordBank, reset } = bankWordSlice.actions
export default bankWordSlice.reducer
