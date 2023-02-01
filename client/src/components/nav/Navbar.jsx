import "./styles/style.css"
import useWindowSize from "../../hooks/useWindowSize"
import { Link, useNavigate } from "react-router-dom"
import DropdownMenu from "./nav-components/Dropdown-Menu"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"
import ToggleSwitch from "./nav-components/ToggleSwitch"

const accountListForUser = [

  { title: 'toggle',
    toggle: <ToggleSwitch />,
  },
  {
    link: '/settings',
    title: 'settings',
  },
  {
    link: '',
    title: 'logout',
  },

]

const accountListNotUser = [
  {
    title: 'toggle',
    toggle: <ToggleSwitch />,
  },
  {
    link: '/login',
    title: 'Login',
  }, 
  {
    link: '/register',
    title: 'Create Account'
  }
]

const featuredForUsers = [
  {
    link: '/sayitsortit',
    title: 'Say It Sort It',

  },
  {
    link: '/wordbank',
    title: 'Word Bank',
  },
  {
    link: '/about',
    title: 'About',
  }
]


const Navbar = () => {
  const size = useWindowSize()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  

  const onLogout = () => {

    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")
  }



  return (

      <nav className="container-fluid nav-contain-background">
  

     
      <div className="left-nav dropdown-container">
        {size.width < 768 ?
          <DropdownMenu list={featuredForUsers} label="Menu" />
          :
          <ul>
            <li><Link to="/sayitsortit">Say It Sort It</Link></li>
            <li><Link to="/wordbank">Word Bank</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
      }
 
      </div>
      
      <div className="right-nav dropdown-container">
        
        {user ?
          <>
            <DropdownMenu list={accountListForUser} action={onLogout} label="Account" />
            <li className="nav-logo">
                <Link to="/dashboard">
                  <strong>Parrot</strong>
                  </Link>
            </li>
            </>
          :
          <>
            <DropdownMenu list={accountListNotUser} label="Account" />
            <li className="nav-logo">
                <Link to="/">
                  <strong>Parrot</strong>
                  </Link>
            </li>
            </>
          }
         
      
            </div>
         
            
          
     
      </nav>

  )
}

export default Navbar
