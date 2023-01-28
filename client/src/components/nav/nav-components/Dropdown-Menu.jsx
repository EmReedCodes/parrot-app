import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../../../features/auth/authSlice"
import { useState } from "react"

const DropdownMenu = ({ list, action = null }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
//  const [isLogout, setIsLogout] = useState()
  const logout = () => {
    dispatch(logout(user))
    dispatch(reset())
    return navigate("/")
  }
  console.log(list)
  console.log(action)
  return (
    <details role="list" dir="rtl">
      <summary aria-expanded="true" role="link" className="secondary">
        Account
      </summary>
      <ul role="listbox">
        {list.map(item => (
          <li key={item.title} onClick={item.title === 'logout' ? action : undefined}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default DropdownMenu
