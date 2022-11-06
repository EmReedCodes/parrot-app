
import { useState } from 'react'
// import { useTts } from 'tts-react'
// import { TTSHookProps } from 'tts-react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'


const RepeatWord = ({ wordBank }) => {
    //need repeat button
    //need new button
    //need slider
    const [ourText, setOurText] = useState("")
    const [range, setRange] = useState("0.6")
  
    if(ourText) {
        localStorage.setItem('word', ourText)
    }
     
        const randomizeList = () => {
            const index = Math.floor(Math.random() * wordBank.length)
            setOurText(wordBank[index].text)
        }

 


    const speechHandler = (text) => {
        if (text) {
          const msg = new SpeechSynthesisUtterance()
            msg.text = text
            msg.rate = range
          window.speechSynthesis.speak(msg)
        }
    }
    
    return ( 
        
        <>
            {ourText ?
                <h2>{ourText}</h2>
                : <h2>Hit Next To Begin</h2>
            }
            <div className="range range-output">
                <input
             
                type="range"
                min="0.2"
                max="1"
                defaultValue="0.8"
                step="0.2"
                className="customSlider"
                id="SpeachRateSlider"
                onChange={(e) => setRange(e.target.value)}
                  
              />
              </div>
           
          
            <div className="contain-btns">
               <button className='containIcon' onClick={() => speechHandler(ourText)}>
                   <IconContext.Provider value={{className: "replay-btn repeatWord"}}>
                        <FaRegPlayCircle />
                        </IconContext.Provider>
               </button>
                <button className='next-btn' onClick={() => randomizeList()}>Next <FaRegPlayCircle /> </button>
               
            </div>
        </>
         );

}
 
export default RepeatWord;