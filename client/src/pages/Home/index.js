import { Link } from "react-router-dom";
import { ReactComponent as ParrotLogo } from './../../parrot.svg'


const Home = () => {
    
    return ( 
       
   <section>
       
             <h1>Welcome to Parrot!</h1>
             <div className="containLogo">
                 <ParrotLogo
                  className="parrotLogo"
                  alt="blue cartoon parrot"
                 />
             </div>
             <p></p>
             <section className="home-btns">
                 <Link to="/login"><button>Login</button></Link>
                 <Link to='/register'><button>Register</button></Link>
             </section>
   </section>
     );
}
 
export default Home;