import "./styles/style.css"
import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { confirmPWInput, reset } from "../../features/auth/authSlice"
import { getAllWords } from "../../features/bankWord/bankWordSlice"
import { toast } from "react-toastify"
import Modal from "../../components/modal/Modal"
import List from "./List"

const Settings = () => {

  const pwAttempt = useRef(null)
  const dispatch = useDispatch()
  const { isSuccess, isError, isLoading } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [modalToggle, setModalToggle] = useState(false)
  const [userDelete, setUserDelete] = useState(false)
  const [getList, setGetList] = useState(false)

  //TODO: need to add the message from DB in case PW correct and there just was an error
  useEffect(() => {
    const checkIfPWConfirmed = () => {
      if (isSuccess && !isLoading) {
        toast.success("Account deleted")
        dispatch(reset())
        localStorage.clear()
        navigate("/")
        window.location.reload()
      }
      if (isError && !isLoading) {
        toast.warn("Password incorrect. Please try again.")
      }
    }
    checkIfPWConfirmed()
  }, [isSuccess, isError, isLoading])

  const toggleModal = () => {
    //this is there so user can decide to click again and cancel
    if (!modalToggle && !userDelete) {
      setModalToggle(true)
    } else {
      setModalToggle(false)
    }
  }
  //TODO: enable enter key to also work
  //https://reactgo.com/react-trigger-button-click/

  function onSubmit(e) {
    e.preventDefault()
    dispatch(confirmPWInput({ pwAttempt: pwAttempt.current.value }))
    e.target.reset()
  }

  //TODO: create counter give users 3 chances
  //make another action that checks for is success and is error and sets correct state
  const beginDelete = () => {
    setUserDelete(true)
    setModalToggle(false)
  }

  const modalText = () => {
    return (
      <>
        <h3>Deleting your account will destroy all data associated with your username.</h3>
        <h4>Are you sure?</h4>
        <div className="modal-split-btns">
          <button onClick={() => beginDelete()}>Yes</button>
          <button onClick={() => setModalToggle(false)}>Cancel</button>
        </div>
      </>
    )
  }

  //TODO: need to check if there is any list

  const displayList = () => {
    if (getList === false) {
      dispatch(getAllWords())
      setGetList(true)
    } else {
      setGetList(false)
    }
  }

  return (
    <section className="settings">
      <span>
        Click{" "}
        <button onClick={() => displayList()} className="inline-btn">
          here
        </button>{" "}
        to see your full word bank.
      </span>
      {getList && <List />}

      <span aria-label="button">
        <button onClick={() => toggleModal()} className="inline-btn">
          Delete Account
        </button>
      </span>
      <Modal
        className="modalAnimate"
        open={modalToggle}
        onClick={() => setModalToggle(false)}
        text={modalText()}
      />

      {userDelete && (
        <form onSubmit={onSubmit}>
          <input
            type="password"
            id="password"
            name="password"
            ref={pwAttempt}
            placeholder="Confirm password"
          />

          <button type="submit" className="delete-btn">
            Submit
          </button>
        </form>
      )}
    </section>
  )
}

export default Settings
