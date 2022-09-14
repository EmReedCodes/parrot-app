//rechecked OK
import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = '/api/speech'

// save speech word
const saveWord = async (speechData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }

    const response = await axios.post(API_URL, speechData, config)
    if (response.status === 200) {
        toast.success('Saved!')
    }
    // console.log(response.data)
    // return response.data
}

const speechService = {
    saveWord
}

export default speechService