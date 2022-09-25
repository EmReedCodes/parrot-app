import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, reset } from "../features/auth/authSlice"
import BurgerMenu from "./BurgerSlide"
import "./styles/style.css"


const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")

    //   {user ? (
  //     <li>
  //     <button onClick={onLogout}>Logout</button>
  //   </li>
  // ) : (
  //   <li>
  //     <Link to="/login">Login</Link>
  //   </li>
  // )}
  }
  return (

    <div className="nav-contain">
      <nav>
          <BurgerMenu />
        <ul>
        
          <li>
            <strong>Parrot</strong>
          </li>
          <li>
          <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
        </nav>
    </div>
    
  )
}

export default Navbar
