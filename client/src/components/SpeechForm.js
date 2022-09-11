import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createSpeechWord } from '../features/speech/speechSlice'

function SpeechForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createSpeechWord({ text }))
    setText('')
    }
    
    return (
       
          <div className="contain">
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor='text'>Word</label>
                  <input
                    type='text'
                    name='text'
                    id='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <div className='form-group'>
                  <button type='submit'>
                   Save Word  
                  </button>
                </div>
              </form>
          </div>
      
      )
    }
    
    export default SpeechForm