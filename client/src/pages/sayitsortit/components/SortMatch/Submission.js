import { useState, useEffect } from "react"
import Confetti from "../../../../hooks/useConfetti"
import Modal from "../../../../components/modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { createWordForBank } from "../../../../features/bankWord/bankWordSlice"
import { toast } from "react-toastify"

export default function Submission({ items, setItems, word, initialItems }) {
  const [isVisible, setIsVisible] = useState(false)
  const [modalToggle, setModalToggle] = useState(false)
  const [checkStatus, setCheckStatus] = useState(false)
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  //TODO: toast isn't firing every success for some reason
  const { isSuccess, isError } = useSelector(state => state.wordBank)

  useEffect(() => {
    if (checkStatus && isSuccess === true) {
      toast.success("Successfully added to the bank.")
      setCheckStatus(false)
    } else if (checkStatus && isError) {
      toast.warn("Something went wrong, please try again.")
      setCheckStatus(false)
    }
  }, [checkStatus, isSuccess, isError])
  const checkAnswer = () => {
    const checkLetter = Object.values(items).map((item, idx) => item.letter === word[idx])
    setItems(current =>
      current.map((item, idx) => ({
        ...item,
        color: checkLetter[idx] === true ? "correct" : "incorrect"
      }))
    )
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
    setCheckStatus(true)
    setModalToggle(false)
  }
  //TODO: fix spacing with modal btn
  const modalText = () => {
    return (
      <>
        <h3>Hooray! You spell like a pro!</h3>
        <p className="modal-text">
          Would you like to add <strong>{word}</strong> to your wordBank?
        </p>
        <button className="modal-btn" onClick={e => onSubmit(e)}>
          Save
        </button>
      </>
    )
  }

  return (
    <>
      <div className="submitReset">
        <button onClick={event => checkAnswer(event)}>Submit</button>
        <button onClick={() => resetSort()}>Reset</button>
      </div>

      {user && (
        <Modal open={modalToggle} onClick={() => setModalToggle(false)} text={modalText()} />
      )}

      {isVisible && <Confetti />}
    </>
  )
}
