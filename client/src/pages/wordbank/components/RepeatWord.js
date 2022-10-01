
import { useState } from 'react'
// import { useTts } from 'tts-react'
// import { TTSHookProps } from 'tts-react'
import { FaRegPlayCircle } from 'react-icons/fa'



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
            // const listArr = wordBank.text.values()
            const index = Math.floor(Math.random() * wordBank.length)
            // let speakWord = wordBank[index].text
            // console.log(speakWord)
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
        
        <div className="contain">
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
           
          
            <contain-btns>
                <button className='replay-btn' onClick={() => speechHandler(ourText)}>Play<FaRegPlayCircle /></button>
                <button className='next-btn' onClick={() => randomizeList()}>Next <FaRegPlayCircle /> </button>
            </contain-btns>
        </div>
         );

}
 
export default RepeatWord;