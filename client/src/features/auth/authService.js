//this is for making the http req and sending it back
import axios from 'axios'

const API_URL = '/api/user/'

//Register user
const register = async (userData) => {
    //we are making the req then putting the response into the variable
    const response = await axios.post(API_URL, userData)
    //when using axios it puts the response in data (the word)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//anything we create and want to export put inside here
const authService = {
    register
}

export default authService