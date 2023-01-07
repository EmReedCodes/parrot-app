import "./styles/style.css"
import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteSelf, confirmPWInput, reset } from "../../features/auth/authSlice"
import { getAllWords } from "../../features/bankWord/bankWordSlice"
import { toast } from "react-toastify"
import Modal from "../../components/modal/Modal"
import List from "./List"

const Settings = () => {
  //TODO: useReducer here instead?
  //yes check this out https://nazrhan-mohcine.medium.com/react-hooks-work-with-usestate-and-usereducer-effectively-471646cdf925
  const pwAttempt = useRef(null)
  const dispatch = useDispatch()
  const { isSuccess, isError } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [modalToggle, setModalToggle] = useState(false)
  const [userDelete, setUserDelete] = useState(false)
  const [passwordConfirmed, setPassWordConfirmed] = useState(false)
  const [getList, setGetList] = useState(false)

  //ran into issue needing reponse back with inSuccess and isError from two seperate dispatches thus the extra useStates... Need to solve this

  useEffect(() => {
    if (isSuccess === true && !passwordConfirmed) {
      setPassWordConfirmed(true)
    }
    if (isError === true) {
      toast.warn("password incorrect")
    }
  }, [isError, isSuccess, dispatch, navigate, passwordConfirmed])

  //window.location.reload() causes glitch on logout, if I dont have it when trying to hit login sends you to dash, is confused

  useEffect(() => {
    if (passwordConfirmed) {
      dispatch(deleteSelf())

      if (isSuccess === true) {
        toast.success('Account deleted')
        dispatch(reset())
        localStorage.clear()
        navigate("/")
        window.location.reload()
        return
      } 
      if (isError === true) {
        toast.warn("Something went wrong.")
      }
    }
  }, [isSuccess, navigate, passwordConfirmed, dispatch, isError])

  const toggleModal = () => {
    if (!modalToggle && !userDelete) {
      setModalToggle(true)
    } else {
      setModalToggle(false)
      setUserDelete(false)
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    dispatch(confirmPWInput({ pwAttempt: pwAttempt.current.value }))
    e.target.reset()
  }

  //TODO: create counter give users 3 chances
  const beginDelete = () => {
    setUserDelete(true)
    setModalToggle(false)
  }

  const modalText = () => {
    return (
        <>
          <h3>Deleting your account will destroy all data associated with your username.</h3>
          <h4>Are you sure?</h4>
          <button onClick={() => beginDelete()}>Yes</button>
          <button onClick={() => setModalToggle(false)}>Cancel</button>
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
    <section className="settings wordGame">

      <span>
        Click{" "}
        <button onClick={() => displayList()} className="inline-btn">
          here
        </button>{" "}
        for full word bank
      </span>
      {getList && <List />}

      <span aria-label="button">
        <button onClick={() => toggleModal()} className="inline-btn">
          Delete Account
        </button>
      </span>
      <Modal className="modalAnimate" open={modalToggle} onClick={() => setModalToggle(false)} text={modalText()} />

      {userDelete && (
        <form onSubmit={onSubmit}>
          <input
            type="password"
            id="password"
            name="password"
            ref={pwAttempt}
            placeholder="Confirm password"
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      )}
    </section>
  )
}

export default Settings
