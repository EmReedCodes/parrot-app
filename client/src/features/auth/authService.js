//this is for making the http req and sending it back
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
const login = async authData => {
  const response = await axios.post(API_URL + "login", authData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}
//TODO: redirect to home on logout mucho errors
//logout user
const logout = () => {
  localStorage.removeItem('user')
}

// function forgotPassword(email) {
//   return fetch(API_URL + 'forgot-password', {
//     method: 'PUT',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify({email})
//   })
//   .then(res => res.json())
//   .then(json => {
//     if (json.message) return json
//     throw new Error(`${json.error}`)
//   })
// }

const resetPassword = async (authData, token) => {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    },
}
  const response = await axios.put(API_URL, authData, config)
  //when using axios it puts the response in data (the word)
  if (response.data) {
    console.log('reset')
  }
  return response.data
}

//anything we create and want to export put inside here
const authService = {
  register,
  login,
  logout,
  resetPassword
}

export default authService
