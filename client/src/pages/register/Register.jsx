import "./styles/style.css"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { register, reset } from "../../features/auth/authSlice"

const Register = () => {
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const { name, email, password, passwordConfirm } = authData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    //need to go to dashboard
    if (isSuccess || user) {
      navigate("/dashboard")
    }
    //will set everything back to false
    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setAuthData(prevState => ({
      //we want all the fields of prevState
      ...prevState,
      //get key value by name
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match")
    } else {
      const authData = {
        name,
        email,
        password
      }
      dispatch(register(authData))
    }
  }

  return (
    <article className="grid">
      <div>
        <hgroup>
          <h1>Register</h1>
          <p>Please create an account.</p>
        </hgroup>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />

          <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />

          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="Confirm your password"
            onChange={onChange}
          />

          <button type="submit">Submit</button>
        </form>
        <span>
          Already have an account?<Link to="/login"> Login </Link>
        </span>
      </div>
      <div className="registerImage"></div>
    </article>
  )
}

export default Register
