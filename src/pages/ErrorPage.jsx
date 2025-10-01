import React, { useEffect } from 'react'
import Error404 from '../assets/Error404.gif'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
  const navigate=useNavigate();
  
   useEffect(()=>{
     setTimeout(()=>{
       navigate(-1)
   },6000)
  })
  return (
    <div className='errorPageContainer'>
      <div className='errorGifContainer'>
        <img className='imageStyles'src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExczRzbmR2MWltY2tmbTZtanFscjl2bXQ1NzJlazFlajhhMTZicDN6aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6PGveaEnIYNznJuKmH/giphy.gif" alt='404.gif'/>
      </div>
      <div className='errorMessageContainer'>
        <h1 className='errorHeadingStyles'>
          Error 404
        </h1>
       <br/>
        <p className='errorMessageStyles'>
          This page does not exist!
        </p>
        <p className='errorMessageStyles'>
          You'll be redirected to the previous one shortly...
        </p>
      </div>

    </div>
  )
}

export default ErrorPage