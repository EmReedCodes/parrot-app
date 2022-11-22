import { slide as Menu } from "react-burger-menu"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { logout, reset } from "../../features/auth/authSlice"
import ToggleSwitch from "./ToggleSwitch"

export default function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const onLogout = () => {
    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")
  }


  return (
    <Menu>
       <div className="containToggle">
         <ToggleSwitch />
      </div>
      {user ? 
        <Link to="/dashboard" className="menu-item">Dashboard</Link>
        :
        <Link to="/" className="menu-item">Home</Link>
      }
      <Link to="/settings" className="menu-item">Settings</Link>
      <Link to="/about" className="menu-item">About</Link>
      { user &&
        <Link to="/" onClick={() => onLogout()} className="menu-item">Logout</Link>
      }
    </Menu>
  )
}
