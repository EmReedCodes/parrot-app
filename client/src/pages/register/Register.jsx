
import './styles/style.css'
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      //we want all the fields of prevState
      ...prevState,
      //get key value by name 
      [e.target.name]: e.target.value,
    }))
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
  }

    return ( 
      <>
            <section className="contain">
              <Navbar />
              <h1>Register</h1>
              <p>Please create an account.</p>
            </section>

        <section className="form">
          <form onSubmit>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              placeholder='Enter your name'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
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
              placeholder='Enter your password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='password2'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Enter your password'
              onChange={onChange}
            />
            </div>

            <div className="form-group">
              <button type="submit" className='btn'>Submit</button>
            </div>
          </form>
        </section>
      </>
     );
}
 
export default Register;