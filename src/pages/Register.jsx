import React, { useState } from 'react'
import { Link,NavLink} from 'react-router-dom'

const Register = () => {
  const [userData,setUserData]=useState([{
    fullname:'',
    email:'',
    password:'',
    password2:'',
  }])

  const changeTextHandler=(e)=>{
    setUserData((prevData)=>{
      return {...prevData,[e.target.name]:e.target.value}
    })
  }
  return (
    <section className='register'>
      <div className='container register_container'>
        <h1>
          Sign Up
        </h1>

        <form>
          <p className='form_error_message'>Some error message</p>
          <input type='text' name='fullname' placeholder='Full Name' autoComplete='true' autoFocus onChange={changeTextHandler}/>
          <input type='email' name='email' placeholder='Email Address' autoComplete='true' onChange={changeTextHandler} />
          <input type='password' name='password' placeholder='Password' autoComplete='true' onChange={changeTextHandler}/>
          <input type='password' name='password2' placeholder='Confirm Password' autoComplete='true' onChange={changeTextHandler} />
          <p>Already have an account? <Link to='/'>Sign in</Link></p>
          <div>
            <button className=' btn primary'>Register</button>
          </div>

        </form>

      </div>

    </section>
  )
}

export default Register