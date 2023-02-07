import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/auth/authSlice"
import { createWordForBank } from "../../features/bankWord/bankWordSlice"
import parrotImage from "../../assets/parrotsmaller.png"
import './styles/style.css'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //TODO: its not perfect but having issues send locallist multiple times or trying to send it when list is just an empty array, ensuring it wasn't empty or null specifically was my current solution though I know that isnt great

  const { user, isError, message } = useSelector(state => state.auth)
  const { isSuccess } = useSelector(state => state.wordBank)
  const [localStorageConfirmed, setLocalStorageConfirmed] = useState(false)
  const [list, setLocalList] = useState()
 // const [list, _, __, removeList] = useLocalStorage("list", localList)

  useEffect(() => {
    const localStorageList = localStorage.getItem("list") !== '[]' || null ? JSON.parse(localStorage.getItem("list")) : null
    if (localStorageList) {
      console.log(localStorageList, 'its running')
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
    if (isSuccess) {
      localStorage.removeItem("list")
    }
  }, [dispatch, localStorageConfirmed, isSuccess, list])

  return (
    <section className="wordGame dash verticalCenter">
      <h1>Welcome back {user.name}!</h1>
      <div className="dashboardImage">
        <img src={parrotImage} className="parrot-logo" alt="cartoon parrot" />
      </div>
      <div className="dashLinks">
        <Link className="sortGame" to="/sayitsortit">
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