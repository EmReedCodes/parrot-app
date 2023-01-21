import BurgerMenu from "./nav-components/BurgerSlide"
import "./styles/style.css"
import useWindowSize from "../../hooks/useWindowSize"
import { useSelector } from "react-redux"
import ToggleSwitch from "./nav-components/ToggleSwitch"
import HorizontalNav from "./nav-components/HorizontalNav"

const Navbar = () => {
  const size = useWindowSize()
  const { user } = useSelector(state => state.auth)

  return (
    <>
      <nav className="container-fluid navWithSlide">
        {size.width < 768 && <BurgerMenu /> }
        <div className="fillNav">
          {size.width > 768 && <HorizontalNav />}
          
          <ul className="right-nav">
            {size.width > 768 &&
              <li><ToggleSwitch /></li>
            }
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
