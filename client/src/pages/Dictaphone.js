
import  SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition()

    if(!browserSupportsSpeechRecognition){
        return null
    }
    if(!browserSupportsSpeechRecognition){
        console.log('Try a different browser sorry :(')
    }
    if(!isMicrophoneAvailable){
        //TODO: better alert toast notification/alert?
        return alert('Microphone must be on to play Say It Spell It')
    }
    //listening not working ?
    return ( 
        <div>
            <span>Microphone: {listening ? 'on' : 'off'}</span>
            <span>{transcript}</span>
            <button type="button" onClick={SpeechRecognition.startListening}>Start</button>
            <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
            <button type="button" onClick={resetTranscript}>Reset</button>
        </div>
     );
}
 
export default Dictaphone;