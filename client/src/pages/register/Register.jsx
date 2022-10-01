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
    <>
      <section className="contain">
        <h1>Register</h1>
        <p>Please create an account.</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="authGroup">
            <input
              type="text"
              className="authInput"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>

          <div className="authGroup">
            <input
              type="text"
              className="authInput"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="authGroup">
            <input
              type="password"
              className="authInput"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={onChange}
            />
          </div>

          <div className="authGroup">
            <input
              type="password"
              className="authInput"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              placeholder="Confirm your password"
              onChange={onChange}
            />
          </div>

          <div className="authGroup">
            <button type="submit">Submit</button>
          </div>
        </form>
        <span>
          Already have an account?<Link to="/login"> Login </Link>
        </span>
      </section>
    </>
  )
}

export default Register
