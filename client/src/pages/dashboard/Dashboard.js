import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/auth/authSlice"
import { createWordForBank } from "../../features/bankWord/bankWordSlice"
import parrotImage from "../../assets/parrotsmaller.png"
import useLocalStorage from "../../hooks/useLocalStorage"
import './styles/style.css'
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //TODO: tomorrow when I'm not dying see if useReducer could solve my problem
  //      Problem: useEffect that sends the items in local storage to db was running more than once, had to create seperate state to ensure it would only render the once

  const { user, isError, message } = useSelector(state => state.auth)
  const { isSuccess } = useSelector(state => state.wordBank)
  const [localStorageConfirmed, setLocalStorageConfirmed] = useState(false)
  const [localList, setLocalList] = useState([])
  const [list, _, __, removeList] = useLocalStorage("list", localList)

  useEffect(() => {
    const localStorageList = localStorage.getItem("list")
    if (localStorageList) {
      setLocalList(localStorageList)
      setLocalStorageConfirmed(true)
    }
  }, [])

  //if for some reason a non user sees a dashboard
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate("/login")
      return
    }

    return () => {
      dispatch(reset())
      return
    }
  }, [user, navigate, isError, message, dispatch])

  useEffect(() => {
    if (localStorageConfirmed) {
      dispatch(createWordForBank({ list }))
    }
  }, [dispatch, localStorageConfirmed])

  return (
    <section className="wordGame dash">
      <h1>Welcome back {user.name}!</h1>
      <div className="dashboardImage">
        <img src={parrotImage} alt="cartoon parrot" />
      </div>
      <div className="dashLinks">
        <Link className="sortGame" to="/sortitspellit">
          <button>Sort It Spell It</button>
        </Link>
        <Link className="bankGame" to="/wordbank">
          <button>Word Bank</button>
        </Link>
      </div>
    </section>
  )
}

export default Dashboard
