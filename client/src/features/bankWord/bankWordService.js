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
  //I should just check for isSuccess once where the dispatch happened not here
  // if (response.status === 200) {
  //   toast.success("Saved!")
  // }
  // console.log(response.data)
  return response.data
}

// replace speech word
const updateWord = async (textData, token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.patch(API_URL + "update", textData, config)
  if (response.status === 200) {
    toast.success("Updated word")
  }
  return response.data
}

//get words for list
const allWords = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL + "all", config)

  return response.data
}

// Delete word from list
const deleteBankWord = async (_id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + _id, config)
  console.log(response)
  return response.data
 
}

const getBankWords = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const bankWordService = {
  saveWord,
  updateWord,
  getBankWords,
  deleteBankWord,
  allWords
}

export default bankWordService
