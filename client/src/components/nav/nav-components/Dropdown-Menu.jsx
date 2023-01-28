import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from '../../../features/auth/authSlice'

const DropdownMenu = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)

    const logout = () => {
    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")
  }
    console.log(props)
    return ( 
        <details role="list" dir="rtl">
      <summary aria-expanded="true" role="link" className="secondary">
        Account
      </summary>
      <ul role="listbox">
                {props.list.map((item) => (
                    <li key={item.title} onClick={item.action}>
                    <Link to={item.link}>{item.title}</Link>
            </li>
        ))}
      </ul>
    </details>
     );
}
 
export default DropdownMenu;