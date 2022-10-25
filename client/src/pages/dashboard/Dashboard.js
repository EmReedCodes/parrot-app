import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/bankWord/bankWordSlice"
//changed reset from bankWordSlice to auth slice
//import { reset } from '../../features/auth/authSlice'

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
    
      <section>
        <h1>You made it to dashboard</h1>
        <Link to="/sortitspellit">
          <button>Sort It Spell It</button>
        </Link>
        <Link to="/wordbank">
          <button>Word Bank</button>
        </Link>
      </section>
  )
}

export default Dashboard
