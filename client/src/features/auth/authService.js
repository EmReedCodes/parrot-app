import axios from 'axios'
const API_URL = '/api/user/'

//Register user
const register = async (authData) => {
  //we are making the req then putting the response into the variable
  const response = await axios.post(API_URL, authData)
  //when using axios it puts the response in data (the word)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

//login user
const login = async (authData) => {
  const response = await axios.post(API_URL + "login", authData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const confirmPW = async (pwInput, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  console.log(config)
  const response = await axios.post(API_URL + "confirm", pwInput, config)
 // console.log(response)
  if (response.status === 200) {
    console.log('pw correct')
  }
  if (response.status === 400) {
    console.log('incorrect')
  }
  return response.data
 
}

const deleteUser = async (pwInput, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL + "delete", config)
 // console.log(response)
  if (response.status === 201) {
    //localStorage.removeItem('user')
    console.log('success')
  }
  if (response.status === 403) {
    console.log('incorrect')
  }
  return response.data
 
}


//TODO: redirect to home on logout mucho errors
//logout user
const logout = () => {
  localStorage.removeItem('user')
}


// const resetPassword = async (authData, token) => {
//   const config = {
//     headers: {
//         Authorization: `Bearer ${token}`
//     },
// }
//   const response = await axios.put(API_URL, authData, config)
//   //when using axios it puts the response in data (the word)
//   if (response.data) {
//     console.log('reset')
//   }
//   return response.data
// }

//anything we create and want to export put inside here
const authService = {
  register,
  login,
  logout,
  confirmPW,
  deleteUser
  
}

export default authService
