import { login, reset } from "../../features/auth/authSlice"
import "./styles/style.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Login = () => {
  const [authData, setAuthData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = authData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/dashboard")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = e => {
    setAuthData(prevState => ({
      ...prevState,
      //get key value
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = e => {
    e.preventDefault()

    const authData = {
      email,
      password
    }

    dispatch(login(authData))
  }

  return (
    <>
      <section>
        <h1>Login</h1>
        <p>Login to begin</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="authGroup">
            <input
              type="email"
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
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="authGroup">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
        <span>Don't have an account?
          <Link to="/register">
            <span> Register </span>
          </Link>
          </span>
      </section>
    </>
  )
}

export default Login
