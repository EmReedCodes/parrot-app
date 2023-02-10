import { Link } from "react-router-dom"
import { ReactComponent as ParrotLogo } from "./../../parrot.svg"

const Home = () => {
  return (
    <section className="verticalCenter">
      <h1>Welcome to Parrot!</h1>

      <h4>Practice your speech with repetition and spelling.</h4>

      <div className="containLogo">
        <ParrotLogo className="parrotLogo" alt="blue cartoon parrot" />
      </div>
      <Link to="/login">
     <button type="button">
          Login
        </button>
        
      </Link>
      <Link to="/register">
     <button type="button">
          Register
     </button>
 </Link>
    </section>
  )
}

export default Home
