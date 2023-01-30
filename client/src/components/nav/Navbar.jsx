import BurgerMenu from "./nav-components/BurgerSlide"
import "./styles/style.css"
import useWindowSize from "../../hooks/useWindowSize"
import HorizontalNav from "./nav-components/HorizontalNav"
import { Link, useNavigate } from "react-router-dom"
import DropdownMenu from "./nav-components/Dropdown-Menu"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../features/auth/authSlice"
import ToggleSwitch from "./nav-components/ToggleSwitch"
//import Dropdown from "./nav-components/Dropdown"

const accountListForUser = [

  {
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
  

     
        <div className="left-nav">
          <span>hello</span>
</div>
          <div className="right-nav">
            <ul>
            <DropdownMenu list={accountListForUser} action={onLogout} label={'Account'} />
              <li className="nav-logo">
                <Link to="/">
                  <strong>Parrot</strong>
                  </Link>
            </li>
          </ul>
            
          </div>
     
      </nav>

  )
}

export default Navbar
