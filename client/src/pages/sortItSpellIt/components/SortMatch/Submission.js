import { useState } from "react"
import Confetti from "../../../../hooks/useConfetti"
import Modal from "../../../../components/Modal"
import { useDispatch, useSelector } from "react-redux"
import { createWordForBank } from "../../../../features/bankWord/bankWordSlice"
//turn tiles green that are correct red incorrect until submit is correct

export default function Submission({ items, setItems, word, initialItems }) {
  const [isVisible, setIsVisible] = useState(false)
  const [modalToggle, setModalToggle] = useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const checkAnswer = () => {
    const checkLetter = Object.values(items).map((item, idx) => item.letter === word[idx])
    setItems(current =>
      current.map((item, idx) => ({
        ...item,
        color: checkLetter[idx] === true ? "#55bf15" : "#bf2a15"
      }))
    )
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

  const onSubmit = e => {
    dispatch(createWordForBank({ word }))
    setModalToggle(false)
  }

  
  const modalText = () => {
    return (
      <>
        <h3>Hooray! You spell like a pro!</h3>
        <p>
          Would you like to add <strong>{word}</strong> to your wordBank?
        </p>
        <button onClick={e => onSubmit(e)}>Save</button>
      </>
    )
  }

  return (
    <>
      <div className="submitReset">
        <button onClick={event => checkAnswer(event)}>submit</button>
        <button onClick={() => resetSort()}>reset</button>
      </div>

      {user &&
        <Modal open={modalToggle} onClick={() => setModalToggle(false)} text={modalText()} />
      }

      {isVisible && <Confetti />}
    </>
  )
}
