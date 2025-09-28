import React from 'react'
import {elections as dummyElections} from "../data"
import ResultElection from '../components/ResultElection'
import { useState } from 'react'
const  Results= () => {
  const [elections,setElections]=useState(dummyElections);
  return (
    <section className='results'>
      <div className='container results_container'>
        {
            elections.map(election=> <ResultElection key={elections.id} {...election} />)
        }

      </div>
    </section>
  )
}

export default Results; 