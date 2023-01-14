import BurgerMenu from "./BurgerSlide"
import './styles/style.css'
import useWindowSize from "../../hooks/useWindowSize"

const Navbar = () => {
  const size = useWindowSize()
  return (
  <>
   
      <nav className="container-fluid navWithSlide">
        {
          size.width < 768 ?
          <BurgerMenu />
          :
          <h1>hello</h1>
        }
          <div className="fillNav">
            <ul>
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
