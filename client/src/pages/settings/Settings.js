

import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { deleteSelf, confirmPWInput } from '../../features/auth/authSlice'
//import { resetPassword } from "../../features/auth/authSlice"
import { toast } from "react-toastify"
// import authSlice from "../../features/auth/authSlice"

const Settings = () => {

 // const [pwAttempt, setPwAttempt] = useState()
  const pwAttempt = useRef(null)
    


      const dispatch = useDispatch()
    
    //const { user, isError, isSuccess, message } = useSelector(state => state.auth)
 

    const onSubmit = e => {
      e.preventDefault()
   
    console.log(pwAttempt.current.value)
       // dispatch(deleteSelf({pwAttempt: pwAttempt.current.value}))
      dispatch(deleteSelf({pwAttempt: pwAttempt.current.value}))
      e.target.reset()
      
      }
     
    return ( 
        <section>
          
        <form onSubmit={onSubmit}>

          <input
            type="password"
            id="password"
            name="password"
            ref={pwAttempt}
            placeholder="Confirm password"
           
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
</section>
);
    
}
 
export default Settings;
