import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="contain">
            
            <h1>You made it to dashboard</h1>   
            <Link to="/sayitspellit"><button>Say It Spell It</button></Link>     
    </div> );
}
 
export default Dashboard;