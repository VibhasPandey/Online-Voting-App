import React from 'react'
import { Link } from 'react-router-dom'

const Congrats = () => {
  return (
    <section className="congrats">
      <div className="container congrats_container">
        <h2>Thanks for your vote!</h2>
        <p>Your vote has been added to your candidate's vote count.
          Press the button to see new results.</p>
          <Link to='/results' className='btn primary congratsBTN' >See Results</Link>
      </div>
    </section>
  )
}

export default Congrats