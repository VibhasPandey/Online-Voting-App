import React from 'react'
import { HiOutlineBars2 } from 'react-icons/hi2'
import { IoIosMoon } from 'react-icons/io'
import { Link,NavLink} from 'react-router-dom'
import {useEffect,useState} from 'react'

const Navbar = () => {
  const [darkTheme,setDarkTheme]=useState(localStorage.getItem('voting-app-them'))

  const changeThemeHandler=()=>{
    if(localStorage.getItem('voting-app-theme')=='dark'){
      localStorage.setItem('voting-app-theme','')
    }else{
      localStorage.setItem('voting-app-theme','dark')
      
    }
    setDarkTheme(localStorage.getItem('voting-app-theme'))
  }

  useEffect(()=>{
    document.body.className=localStorage.getItem('voting-app-theme');

  },[darkTheme])
  return (
    <nav>
      <div className='container nav_container'>
        <Link to="/" className='nav_logo'>
          goVote
        </Link>
        <div>
          <menu>
            <NavLink to="/elections">Elections</NavLink>
            <NavLink to="/results">Results</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </menu>
          <div className='navButtons'>
            <button onClick={changeThemeHandler} className='theme_toggle_btn'><IoIosMoon/></button>
          {/* <button className='nav_toggle_btn'><HiOutlineBars2/></button> */}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar