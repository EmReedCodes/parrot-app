

import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteSelf, confirmPWInput } from '../../features/auth/authSlice'
//import { resetPassword } from "../../features/auth/authSlice"
import { toast } from "react-toastify"
// import authSlice from "../../features/auth/authSlice"

const Settings = () => {

 // const [pwAttempt, setPwAttempt] = useState()
  const pwAttempt = useRef(null)
  const dispatch = useDispatch()
  const { user, isSuccess, isError } = useSelector(state => state.auth)

  useEffect(() => {
    if (isSuccess === true) {
      console.log('yes')
    }
    if (isError === true) {
      console.log('error')
    }
  }, [user, isError, isSuccess, dispatch])

    

 
//useEffect?
    const onSubmit = (e) => {
      e.preventDefault()
   
    console.log(pwAttempt.current.value)
       // dispatch(deleteSelf({pwAttempt: pwAttempt.current.value}))
      dispatch(confirmPWInput({ pwAttempt: pwAttempt.current.value }))
      if (isSuccess === true) {
        console.log('yes')
      } 
      e.target.reset()
      
      }
  
  // async function onSubmit(e) {
  //         e.preventDefault()
   
  //   console.log(pwAttempt.current.value)
  //      // dispatch(deleteSelf({pwAttempt: pwAttempt.current.value}))
  //    dispatch(confirmPWInput({ pwAttempt: pwAttempt.current.value }))
  //     if (await isSuccess === true) {
  //       console.log('yes')
  //     } else {
  //       console.log('no')
  //     }
  //     e.target.reset()
  // }
     
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
