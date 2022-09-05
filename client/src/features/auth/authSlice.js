//reducers and initial state go here

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch(error){

    }
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
        }
    },
    extraReducers:() => {},  //async will go here
})

//have to export this differnetly for actions
export const { reset } = authSlice.actions
export default authSlice.reducer



