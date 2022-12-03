import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/auth/authSlice"
import parrotImage from "../../assets/parrotsmaller.png"

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, message } = useSelector(state => state.auth)


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
