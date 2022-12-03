import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/bankWord/bankWordSlice"
import parrotImage from "../../assets/parrotsmaller.png"


const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.auth)

  const { isError, message } = useSelector(state => state.wordBank)

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
  }, [user, navigate, isError, message, dispatch]) //ok still rendering twice but these are allowed back in

  return (
    <section className="wordGame dash">
      <h1>Welcome back {user.name}!</h1>
      <div className="dashboardImage">
        <img src={parrotImage} alt="" />
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
