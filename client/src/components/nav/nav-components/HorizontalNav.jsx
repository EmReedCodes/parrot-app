import { logout, reset } from "../../../features/auth/authSlice"
import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import DropdownMenu from "./Dropdown-Menu"
import ToggleSwitch from "./ToggleSwitch"


const HorizontalNav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  

  const onLogout = () => {

    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")
  }

  const list = 
    [
      {
        toggle: <ToggleSwitch />,
        title: 'toggle'
      },
  {
    link: '/login',
    title: 'login',
  },
  {
    link: '/',
    title: 'home',
    }, {
    link: '',
    title: 'logout',

      },

    ]
  
    const listTwo = 
[
  {
    link: '/login',
    title: 'login',
  },
  {
    link: '/',
    title: 'home',
    }, {
    link: '',
    title: 'logout',
        },
     
    ]
  //account-user: logout, settings
  //account-non: login, signup, 
  //feature-non: word bank, say it sort it
  return (
    <ul>
      
      {/* <li>
        {user && (
          <Link to="/dashboard" className="menu-item">
            Dashboard
          </Link>
        )
        }
      </li>
      {!user && 
        <>
      <li>
        <Link to="/sortitspellit" className="menu-item">
          Sort It Spell It
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/wordbank" className="menu-item">
          Word Bank
        </Link>
        </li>
        </>
        } */}
      <DropdownMenu list={list} action={onLogout}  />
   
    
    </ul>
  )
}

export default HorizontalNav
