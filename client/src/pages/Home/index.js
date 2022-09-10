import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="contain">
            <h1>Welcome to Parrot!</h1>
            <button><Link to="/login"></Link>Login</button>
            <Link to='/register'><button>Register</button></Link>
        </div>
     );
}
 
export default Home;