
import './styles/style.css'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Home = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      //get key value
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <Navbar />
    
      <section className='heading'>
        <h1>
          Login
        </h1>
        <p>Login to begin practice</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Home