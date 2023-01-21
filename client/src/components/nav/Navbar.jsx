import BurgerMenu from "./nav-components/BurgerSlide"
import "./styles/style.css"
import useWindowSize from "../../hooks/useWindowSize"
import HorizontalNav from "./nav-components/HorizontalNav"
import { Link } from "react-router-dom"

import Dropdown from "./nav-components/Dropdown"


const Navbar = () => {
  const size = useWindowSize()




  return (

      <nav className="container-fluid navWithSlide">
        {size.width < 768 && <BurgerMenu />}
        <div className="fillNav">
          <div className="left-nav">{size.width > 768 && <HorizontalNav />}</div>

          <div className="right-nav">
            <ul>
              <li>
             <Dropdown />
              </li>
              <li className="nav-logo">
                <Link to="/">
                  <strong>Parrot</strong>
                  </Link>
            </li>
          </ul>
            
          </div>
        </div>
      </nav>

  )
}

export default Navbar
