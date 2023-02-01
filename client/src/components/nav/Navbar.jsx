import BurgerMenu from "./nav-components/BurgerSlide"
import "./styles/style.css"
import useWindowSize from "../../hooks/useWindowSize"
//import HorizontalNav from "./nav-components/HorizontalNav"
import { Link, useNavigate } from "react-router-dom"
import DropdownMenu from "./nav-components/Dropdown-Menu"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"
import ToggleSwitch from "./nav-components/ToggleSwitch"
//import Dropdown from "./nav-components/Dropdown"

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
    link: '/signup',
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

  // {size.width < 768 && <BurgerMenu />}
     //{/* <div className="left-nav">{size.width > 768 && <HorizontalNav />}</div> */}


  return (

      <nav className="container-fluid nav-contain-background">
  

     
        <div className="left-nav dropdown-container">
        <DropdownMenu list={featuredForUsers} label="Featured" />
      </div>
      
          <div className="right-nav dropdown-container">
     
        
          {user ?
            <DropdownMenu list={accountListForUser} action={onLogout} label="Account"/>
            :
            <DropdownMenu list={accountListNotUser} label="Account"/>
          }
         
              <li className="nav-logo">
                <Link to="/">
                  <strong>Parrot</strong>
                  </Link>
            </li>
            </div>
         
            
          
     
      </nav>

  )
}

export default Navbar
