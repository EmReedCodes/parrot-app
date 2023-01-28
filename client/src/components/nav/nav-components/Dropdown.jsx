// import { useSelector, useDispatch } from "react-redux"
// import ToggleSwitch from "./ToggleSwitch"
// import { useNavigate, Link } from "react-router-dom"
// import { logout, reset } from "../../../features/auth/authSlice"


// const Dropdown = () => {
//   const { user } = useSelector(state => state.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const onLogout = () => {
//     dispatch(logout(user))
//     dispatch(reset())
//     return navigate("/")
//   }

//   return (
//     <details role="list" dir="rtl">
//       <summary aria-expanded="true" role="link" className="secondary">
//         Account
//       </summary>
//       <ul role="listbox">
//         <li>
//           <div className="containToggle">
//             <ToggleSwitch />
//             <span className="toggleLabel">Toggle Theme</span>
//           </div>
//         </li>

//         {!user ? (
//           <>
//             <li>
//               <Link to="/register">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/login">Log In</Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link to="/settings">Settings</Link>
//             </li>
//             <li>
//               <Link to="/" onClick={() => onLogout()}>
//                 Logout
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </details>
//   )
// }

// export default Dropdown
