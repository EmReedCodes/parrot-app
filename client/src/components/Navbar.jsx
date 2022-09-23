import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { logout, reset } from "../features/auth/authSlice"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    return navigate("/")

    
  }
  return (
    <nav>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <ul>
        <li>
          <strong>Parrot</strong>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
