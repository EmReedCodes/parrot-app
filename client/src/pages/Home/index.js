import { Link } from "react-router-dom";
import { ReactComponent as ParrotLogo } from './../../parrot.svg'
const Home = () => {
    return ( 
        <div className="contain">
            
            <h1>Welcome to Parrot!</h1>
            <div className="containLogo">
                <ParrotLogo
                 className="parrotLogo"
                 alt="blue cartoon parrot"
                 height="40%"
                 width="40%"
                />
            </div>
            <Link to="/login"><button>Login</button></Link>
            <Link to='/register'><button>Register</button></Link>
        </div>
     );
}
 
export default Home;