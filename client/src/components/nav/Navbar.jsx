import BurgerMenu from "./nav-components/BurgerSlide"
import "./styles/style.css"
import useWindowSize from "../../hooks/useWindowSize"
import { useSelector, useDispatch } from "react-redux"
import ToggleSwitch from "./nav-components/ToggleSwitch"
import HorizontalNav from "./nav-components/HorizontalNav"
import { useNavigate, Link } from "react-router-dom"
import { logout, reset } from "../../features/auth/authSlice"

const Navbar = () => {
  const size = useWindowSize()
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")
  }

  return (
    <>
      <nav className="container-fluid navWithSlide">
        {size.width < 768 && <BurgerMenu />}
        <div className="fillNav">
          {size.width > 768 && <HorizontalNav />}

          <ul className="right-nav">
            <li>
              <details role="list" dir="rtl">
                <summary aria-expanded="true" role="link" className="secondary">
                  Account
                </summary>
                <ul role="listbox">
                  <li>
                    {user ? (
                      <Link to="/login">Login</Link>
                    ) : (
                      <Link to="/" onClick={() => onLogout()} className="menu-item">
                        Logout
                      </Link>
                    )}
                  </li>
                </ul>
              </details>
            </li>
            {size.width > 768 && (
              <li>
                <ToggleSwitch />
              </li>
            )}
            <li className="nav-logo">
              <strong>Parrot</strong>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
