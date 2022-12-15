import BurgerMenu from "./BurgerSlide"
import './styles/style.css'

const Navbar = () => {
  return (
    <nav className="container-fluid navWithSlide">
      <BurgerMenu />
      <div className="fillNav">
        <ul>
          <li className="nav-logo">
            <strong>Parrot</strong>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
