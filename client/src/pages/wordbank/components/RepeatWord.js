
import { useState, useEffect } from 'react'
// import { useTts } from 'tts-react'
// import { TTSHookProps } from 'tts-react'
import { FaRegPlayCircle } from 'react-icons/fa'
import ReactSlider from 'react-slider'


const RepeatWord = ({ wordBank }) => {
    //need repeat button
    //need new button
    //need slider
    const [ourText, setOurText] = useState("")
    const [range, setRange] = useState("")
    //const msg = new SpeechSynthesisUtterance()
   
    // useEffect(() => {
    //     const randomizeList = () => {
    //         // const listArr = wordBank.text.values()
    //         const index = Math.floor(Math.random() * wordBank.length)
    //         let speakWord = wordBank[index].text
    //         console.log(speakWord)
    //     }
    //     setOurText(randomizeList())
    // }, [wordBank])
    //{wordBank.map((item, idx) => {
        // return (
        //     <li key={item._id}>
        //       {item.text}
        //       </li>
        //   )
    if(ourText) {
        localStorage.setItem('word', ourText)
    }
    
        // const randomizeList = () => {
        //     // const listArr = wordBank.text.values()
        //     if (wordBank) {
        //         const index = Math.floor(Math.random() * wordBank.length)
        //         let speakWord = wordBank[index].text
        //         setOurText(speakWord)
        //     }
        // }
    
     
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
                : <h2>Next To Begin</h2>
            }
            <div className="range range-output">
                <input
             
                type="range"
                min="0.2"
                max="1"
                defaultValue="0.6"
                step="0.2"
                className="slider"
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