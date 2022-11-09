
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  //const {isCorrect, setIsCorrect} = useState()

  //ok we know password check route works
  useEffect(() => {


      if (isSuccess === true) {
        toast.success('Account deleted')
        navigate('/')
        //should be localstorage.clear()
        localStorage.removeItem('user')
      }
      if (isError === true) {
        toast.warn('password incorrect')
      }
    
   
  }, [user, isError, isSuccess, dispatch, navigate])

    

 
//useEffect?
    const onSubmit = (e) => {
      e.preventDefault()
   
    console.log(pwAttempt.current.value)
       // dispatch(deleteSelf({pwAttempt: pwAttempt.current.value}))
      dispatch(confirmPWInput({ pwAttempt: pwAttempt.current.value }))
      
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
