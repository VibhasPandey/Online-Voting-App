import React, { useState } from 'react'
import { Link,NavLink} from 'react-router-dom'

const Login = () => {
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
          Login
        </h1>

        <form>
          <p className='form_error_message'>Some error message</p>
          
          <input type='email' name='email' placeholder='Email Address' autoComplete='true' onChange={changeTextHandler} />
          <input type='password' name='password' placeholder='Password' autoComplete='true' onChange={changeTextHandler}/>
          
          <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
          <div>
            <button className=' btn primary'>Login</button>
          </div>

        </form>

      </div>

    </section>
  )
}

export default Login