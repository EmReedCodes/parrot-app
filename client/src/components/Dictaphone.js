import { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { toast } from 'react-toastify'

const Dictaphone = () => {
    const {
        transcript,
        finalTranscript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable,
    } = useSpeechRecognition()
    
    if(!browserSupportsSpeechRecognition){
        return null
    }
    if(!browserSupportsSpeechRecognition){
        console.log('Try chrome')
        return toast.error('Unavailable in this browser')
    }
    if(!isMicrophoneAvailable){
        return toast.error('Microphone must be on')
    }

    // const listenContinuously = () => {
    //     SpeechRecognition.startListening({
    //         continuous: true,
    //     });
  //  }
//reset will actually need to fire if word heard back is rejected
    return (
        <div className="speech">
             <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={resetTranscript}>Reset</button>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
     <span>{transcript}</span>
    </div> );
}
 
export default Dictaphone;