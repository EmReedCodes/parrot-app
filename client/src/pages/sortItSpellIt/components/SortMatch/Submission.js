import { useState } from "react"
import Confetti from '../../../../hooks/useConfetti'
import Modal from '../../../../components/Modal'
import SpeechForm from "../SpeechForm";

//turn tiles green that are correct red incorrect until submit is correct

export default function Button({ items, setItems, word, initialItems }) {
    
    const [isVisible, setIsVisible] = useState(false);
    const [modalToggle, setModalToggle] = useState(false)
   



    const checkAnswer = (event) => {
        const checkLetter = Object.values(items).map((item, idx) => item.letter === word[idx])
        setItems(current => current.map((item, idx) => ({ ...item, color: (checkLetter[idx] === true ? "#2f9e44" : "#d9480f") })))
        console.log(items)
        if (checkLetter.every(item => item === true)) {
            setIsVisible(true)

            setTimeout(() => {
                initiateModal()
            }, 3000)
        }
    }
    const initiateModal = () => {
        setModalToggle(true)
    }

    const resetSort = () => {
        setItems(initialItems)
      }
    
    const modalText = () => {
        return (
            <>
            <h3>Hooray! You spell like a pro!</h3>
                <p>Would you like to add <strong>{word}</strong> to your wordBank?</p>
                <SpeechForm />
            </>
        )
    }
    // let sortedWord = Object.values(items).map((item) => item.letter).join('')
    //     if (sortedWord === word) {
    //         console.log('yes')
    //     }
    return (
        <>
            <div className="submitReset">
                <button onClick={(event) => checkAnswer(event)}>submit</button>
                <button onClick={() => resetSort()}>reset</button>
            </div>
            
            <Modal open={modalToggle}
                onClick={() => setModalToggle(false)}
          
            text={modalText()}
            />
           
        {isVisible && <Confetti />}
        </>
    )
}

