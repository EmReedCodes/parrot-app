
//import { createWordForBank } from '../../../features/bankWord'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createWordForBank } from '../../../features/bankWord/bankWordSlice'


//need to globally rename saidWord
const WordForm = () => {
    //saving inputted word here
  const [saidWord, setSaidWord] = useState('')

  const dispatch = useDispatch()

    

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createWordForBank({ saidWord }))
    setSaidWord('')
  }

  return (
      <div className="contain">
        <section className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='text'>Word</label>
              <input
                type='text'
                name='text'
                id='text'
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
          </div>        
      
  )
}

export default WordForm