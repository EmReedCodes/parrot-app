import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { reset } from "../../features/speech/speechSlice"
//changed reset from speechslice to auth slice
//import { reset } from '../../features/auth/authSlice'

const Dashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    const { isError, message } = useSelector(state => state.speech)

    useEffect(() => {
            if (isError) {
              console.log(message)
            }
        
            if (!user) {
              navigate("/login")
              return
            }
        
            return () => {
              dispatch(reset())
              return
            }
          }, [user, navigate, isError, message, dispatch]) //ok still rendering twice but these are allowed back in
        //getting response back and alerting user word was sent to db?
    return (
        <div className="contain">
            
            <h1>You made it to dashboard</h1>   
            <Link to="/sayitspellit"><button>Say It Spell It</button></Link>     
    </div> );
}
 
export default Dashboard;