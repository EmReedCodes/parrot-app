import { slide as Menu } from "react-burger-menu"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
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
        <a id="dashboard" className="menu-item" href="/dashboard">
          Dashboard
        </a> :
        <a id="home" className="menu-item" href="/">
        Home
      </a>
      }
      <a id="settings" className="menu-item" href="/settings">
        Settings
          </a>
          <a id="about" className="menu-item" href="/about">
        Contact
      </a>
      { user &&
        <a id="logout" className="menu-item" href="/"><button onClick={onLogout}>Logout</button></a>
      }
    </Menu>
  )
}
