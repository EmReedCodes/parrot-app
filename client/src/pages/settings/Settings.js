
import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteSelf, confirmPWInput, reset } from '../../features/auth/authSlice'
import { toast } from "react-toastify"
import Modal from "../../components/Modal"


const Settings = () => {

  const pwAttempt = useRef(null)
  const dispatch = useDispatch()
  const { user, isSuccess, isError } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [modalToggle, setModalToggle] = useState(false)
  const [userDelete, setUserDelete] = useState(false)
  const [passwordConfirmed, setPassWordConfirmed] = useState(false)
  //ok we know password check route works

  //need to reset state
  useEffect(() => {

    if (isSuccess === true && !passwordConfirmed) {
      setPassWordConfirmed(true)
      }
      if (isError === true) {
        toast.warn('password incorrect')
    }
   
    
   
  }, [isError, isSuccess, dispatch, navigate, passwordConfirmed])

  useEffect(() => {
    if (passwordConfirmed) {
      dispatch(deleteSelf())
      
      if (isSuccess === true) {
       // toast.success('Account deleted')
        navigate('/')
        window.location.reload()
        localStorage.clear()
      } else {
        toast.warn('Something went wrong. Try again later.')
      }
    }
  }, [isSuccess, navigate, passwordConfirmed, dispatch])

    
    const onSubmit = (e) => {
      e.preventDefault()
   
   
       // dispatch(deleteSelf({pwAttempt: pwAttempt.current.value}))
      dispatch(confirmPWInput({ pwAttempt: pwAttempt.current.value }))
      
      e.target.reset()
      
  }

  const beginDelete = () => {
    setUserDelete(true)
    setModalToggle(false)
  }
  
  const modalText = () => {
    return (
      <>

          <>
        <h3>Deleting your account will destroy all data associated with your username. Are you sure?</h3>
        <button onClick={() => beginDelete()}>Yes</button>
        <button onClick={() => setModalToggle(false)}>Cancel</button> 
            </>
        
        </>
    )
}
  

     
    return ( 
        <section>
        <span onClick={() => setModalToggle(true)}>Delete account</span>  
       <Modal open={modalToggle}
                onClick={() => setModalToggle(false)}
          
            text={modalText()}
            />
           
        {userDelete &&
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
        }
</section>
);
    
}
 
export default Settings;
