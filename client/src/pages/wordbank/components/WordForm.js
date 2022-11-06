
//import { createWordForBank } from '../../../features/bankWord'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createWordForBank } from '../../../features/bankWord/bankWordSlice'
import { toast } from "react-toastify"

//need to globally rename saidWord
const WordForm = () => {
    //saving inputted word here
  const [saidWord, setSaidWord] = useState('')

  const dispatch = useDispatch()

    

  const onSubmit = (e) => {
    if (!saidWord) {
       return toast.warn('Please enter word')
    } else {
      e.preventDefault()
      dispatch(createWordForBank({ saidWord }))
      setSaidWord('')
    }
   
  }

  return (
      
        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='text'
                id='text'
                placeholder='enter word'
                value={saidWord}
                onChange={(e) => setSaidWord(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <button className='btn btn-block' type='submit'>
                Add Word
              </button>
            </div>
          </form>
          </section>
   
      
  )
}

export default WordForm