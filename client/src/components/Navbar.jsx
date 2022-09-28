
import BurgerMenu from "./BurgerSlide"
import "./styles/style.css"


const Navbar = () => {


    //   {user ? (
  //     <li>
  //     <button onClick={onLogout}>Logout</button>
  //   </li>
  // ) : (
  //   <li>
  //     <Link to="/login">Login</Link>
  //   </li>
  // )}
    //    <li>
    // <button onClick={onLogout}>Logout</button>
    // </li>
  //}
  // function toggleTheme(e) {
  //     // state = this.target.value
  //   let check = e.target.checked
  //   console.log(check)

  //   let root = document.querySelector('html')
  //   if (check) {
  //     root.setAttribute("data-theme", 'dark')
  //   } else {
  //     root.setAttribute("data-theme", 'light')
  //   }
  // }
//document.querySelector('html').setAttribute('data-theme', e.target.checked ? 'dark' : 'light')
//<input type="checkbox" id="theme" name="theme"
//onClick={toggleTheme} />
  return (

    <div className="nav-contain">
      <nav>
        
      <BurgerMenu />
        <ul>
         
          
          <li className="nav-logo">
            <strong>Parrot</strong>
          </li>
      
        </ul>
        </nav>
    </div>
    
  )
}

export default Navbar
