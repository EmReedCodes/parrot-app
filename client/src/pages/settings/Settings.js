import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
//import { resetPassword } from "../../features/auth/authSlice"
import { toast } from "react-toastify"

const Settings = () => {
        const dispatch = useDispatch()
    
        const [authData, setAuthData] = useState({
            password: "",
            passwordConfirm: "",
        })

        //const { user, isError, isSuccess, message } = useSelector(state => state.auth)
    
      const { password, passwordConfirm } = authData
  
      //  const { token } = useParams()
    //  const onChange = e => {
        // setAuthData(prevState => ({
        //     ...prevState,
        //     //get key value
        //     [e.target.name]: e.target.value
        //   }))
        // }

        //not sure about this prevState
        const handleChange = e => {
            setAuthData(prevState => ({
              ...prevState,
              //get key value
              [e.target.name]: e.target.value
            }))
          }

          const handleSubmit = e => {
            e.preventDefault()
    
            if (password !== passwordConfirm) {
              toast.error("Passwords do not match")
            } else {
              const authData = {
                  password,
                  passwordConfirm
              }
              //dispatch(resetPassword(authData))
            }
          }

    const isFormInvalid = () => {
        return !(
            authData.password &&
            authData.password === authData.passwordConfirm
        )
    }

    return ( 
        <div className="ResetPasswordPage">
        <h2>Not right now</h2>
        <div>
<h3>Reset Password</h3>
<form

    onSubmit={handleSubmit}
>
    <div className="row">
        <div className="input-field col s12">
            <input
    
                onChange={handleChange}
                className="active"
                name="password"
                value={authData.password}
            />
            <label htmlFor="password">New Password</label>
        </div>
    </div>
    <div className="row">
        <div className="input-field col s12">
            <input
       
                onChange={handleChange}
                className="active"
                name="passwordConfirm"
                value={authData.passwordConfirm}
            />
            <label htmlFor="passwordConfirm">
                Confirm Password
            </label>
        </div>
    </div>
    <div className="row">
        <div className="col s12">
            <button
                className="btn green"
                disabled={isFormInvalid()}
            >
                Submit
            </button>
        </div>
    </div>
</form>
</div>
</div>
);
    
}
 
export default Settings;



