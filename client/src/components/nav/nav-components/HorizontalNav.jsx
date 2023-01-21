import { logout, reset } from "../../../features/auth/authSlice"
import { useNavigate, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

const HorizontalNav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  // const onLogout = () => {
  //   dispatch(logout(user))
  //   dispatch(reset())
  //   return navigate("/")
  // }
  return (
    <ul>
      
      <li>
        {user && (
          <Link to="/dashboard" className="menu-item">
            Dashboard
          </Link>
        )
        }
      </li>
      {!user && 
        <>
      <li>
        <Link to="/sortitspellit" className="menu-item">
          Sort It Spell It
        </Link>
      </li>
      <li>
        {" "}
        <Link to="/wordbank" className="menu-item">
          Word Bank
        </Link>
        </li>
        </>
        }
   
    
    </ul>
  )
}

export default HorizontalNav
