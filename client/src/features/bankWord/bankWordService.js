//rechecked OK
import axios from "axios"
import { toast } from "react-toastify"

//http method allows you to seperate into different sub routes
const API_URL = "/api/word/"

// save speech word
const saveWord = async (speechData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, speechData, config)
  if (response.status === 200) {
    toast.success("Saved!")
  }
  // console.log(response.data)
  return response.data
}

//get words for list

// Get user goals
const getBankWords = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete word from list
const deleteBankWord = async (_id, token) => {
  console.log(_id)
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + _id, config)
  console.log(response)
  return response.data
}

const bankWordService = {
  saveWord,
  getBankWords,
  deleteBankWord
}

export default bankWordService
