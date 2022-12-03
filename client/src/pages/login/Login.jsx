import { login, reset } from "../../features/auth/authSlice"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

//TODO: what is this reset doing?

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
    <article className="grid">
      <div>
        <hgroup>
          <h1>Login</h1>
          <p>Login to begin</p>
        </hgroup>

        <form onSubmit={onSubmit}>
          <input
            type="email"
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
            placeholder="Enter password"
            onChange={onChange}
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
        <span>
          Don't have an account?
          <Link to="/register">
            <span> Register </span>
          </Link>
        </span>
      </div>
      <div className="login-register login"></div>
    </article>
  )
}

export default Login
