//rechecked OK
import axios from 'axios'

const API_URL = '/api/speech'

// save speech word
const saveWord = async (speechData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, speechData, config)
    console.log(response.data)
    return response.data
}

const speechService = {
    saveWord
}

export default speechService