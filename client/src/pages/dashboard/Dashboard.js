import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/auth/authSlice"
import { createWordForBank } from "../../features/bankWord/bankWordSlice"
import smallestParrotImage from "../../assets/evensmallersmallerparrot.png"
import smallParrot from "../../assets/smallParrot1.png"
import "./styles/style.css"
import ProgressiveImage from "react-progressive-graceful-image"
const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //TODO: its not perfect but having issues send locallist multiple times or trying to send it when list is just an empty array, ensuring it wasn't empty or null specifically was my current solution though I know that isnt great

  const { user, isError, message } = useSelector(state => state.auth)
  const { isSuccess } = useSelector(state => state.wordBank)
  const [localStorageConfirmed, setLocalStorageConfirmed] = useState(false)
  const [list, setLocalList] = useState()

  useEffect(() => {
    const localStorageList =
      localStorage.getItem("list") !== "[]" || null
        ? JSON.parse(localStorage.getItem("list"))
        : null
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

    // return () => {
    //   dispatch(reset())
    //   return
    // }
  }, [user, navigate, isError, message, dispatch])

  useEffect(() => {
    if (localStorageConfirmed) {
      dispatch(createWordForBank({ list }))
      if (isSuccess) {
        localStorage.removeItem("list")
      }
    }
    
  }, [localStorageConfirmed, isSuccess])

  return (
    <section className="verticalCenter dash-container">
      <h1>Welcome back {user.name}!</h1>
      <div className="dashboardImage">
        <ProgressiveImage src={smallestParrotImage} placeholder={smallParrot}>
          {(src, loading) => (
            <img
              className={`image${loading ? " loading" : " loaded"}`}
              src={src}
              alt="sea beach"
              // width="700"
              // height="465"
            />
          )}
        </ProgressiveImage>
      </div>

      <Link to="/sayitsortit">
        <button type="button" className="sortGame">
          Say It Sort It
        </button>
      </Link>
      <Link to="/wordbank">
        <button type="button" className="bankGame">
          Word Bank
        </button>
      </Link>
    </section>
  )
}

export default Dashboard
