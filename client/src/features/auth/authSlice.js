//reducers and initial state go here

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
//we need to get our token back to access those routes and save it to local storage

//Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false, //if we get error back from server we can make true and show msg
    isSuccess: false,
    isLoading: false, //if I want to add spinner
    message: ''
}

//Register user                                               //this will get passed in from register page
export const register = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch(error){
        const message = (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        //thunkAPI has a message that says with payload
        return thunkAPI.rejectWithValue(message)
    }
})

//login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response &&
            error.response.data &&
            error.response.data.message)
            || error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})
    

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //these arent async here
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
    },
    //async here //need to account for pending/fulfilled/rejected here
    extraReducers:(builder) => {
        builder
            .addCase(register.pending, (state) => {
                //what state do we want when its pending
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                //whats going to be returned up there (the payload)
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                //because up there in catch(error) we call thunk rejectwithValue and it will pass the msg as the payload
                //which we set here
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    },  
})

//have to export this differnetly for actions
export const { reset } = authSlice.actions
export default authSlice.reducer



