import BurgerMenu from "./BurgerSlide"
//import "./styles/style.css"

const Navbar = () => {
  return (
    <nav className="container-fluid navWithSlide sticky">
      <BurgerMenu />
      <ul>
        <li className="nav-logo">
          <strong>Parrot</strong>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
