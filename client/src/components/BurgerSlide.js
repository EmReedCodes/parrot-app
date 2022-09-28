import { slide as Menu } from "react-burger-menu"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout, reset } from "../features/auth/authSlice"
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


       //   <li onclick="toggleLightDark()"><a href="#"><span class="theme"></span> theme</a></li>
  //<Link id="Logout" className="menu-item" to="/login">Login here</Link>
  return (
    <Menu>
       
       <div className="containToggle">
         <ToggleSwitch />
       </div>
      <a id="home" className="menu-item" href="/dashboard">
        Dashboard
      </a>
      
      <a id="settings" className="menu-item" href="/settings">
        Settings
          </a>
          <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <button onClick={onLogout}>Logout</button>
   
    </Menu>
  )
}
