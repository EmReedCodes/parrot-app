
//TODO: general when logged in takes me to login/register page
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

//we need to get our token back to access those routes and save it to local storage
//Get user from localStorage
//so is user our token??
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false, //if we get error back from server we can make true and show msg
    isSuccess: false,
    isLoading: false, //if I want to add spinner
    message: ''
}

//Register user                                            
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


//confirm password
export const confirmPWInput = createAsyncThunk('auth/confirmPWInput', async (pwInput, thunkAPI) => {
    try {
       
        const token = thunkAPI.getState().auth.user.token
      
        return await authService.confirmPW(pwInput, token)
      } catch (error) {
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
})


export const deleteSelf = createAsyncThunk('auth/deleteSelf', async (_, thunkAPI) => {
    try {
        
        //console.log(user, 'delete user info client side')
        const token = thunkAPI.getState().auth.user.token
       
        return await authService.deleteUser(token)
      } catch (error) {
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
})

//logout user
export const logout = createAsyncThunk('auth/logout', async () => {
    return await authService.logout()
})


// export const resetPassword = createAsyncThunk(
//     'auth/resetPassword',
//     async (authData, thunkAPI) => {
//       try {
//         const token = thunkAPI.getState().auth.user.token
//         return await authService.resetPassword(authData, token)
//       } catch (error) {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString()
//         return thunkAPI.rejectWithValue(message)
//       }
//     }
// )
    

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
            .addCase(confirmPWInput.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(confirmPWInput.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = action.payload
            
            })
            .addCase(confirmPWInput.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteSelf.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(deleteSelf.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.message = action.payload
                state.user = null
            })
            .addCase(deleteSelf.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
         
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    },  
})

//have to export this differnetly for actions
export const { reset } = authSlice.actions
export default authSlice.reducer



