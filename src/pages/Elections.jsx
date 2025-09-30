import React, { useState } from 'react'
import {elections as dummyElections} from '../data'
import Election from '../components/Election'
import AddElectionModel from '../components/AddElectionModel'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'
import UpdateElectionModel from '../components/UpdateElectionModel'

const Elections = () => {
  const [elections,setElections]=useState(dummyElections)

  const dispatch=useDispatch()

  const openModel=()=>{
      dispatch(UiActions.openElectionModel())
      
  }

  const electionModelShowing=useSelector(state=>state.ui.electionModelShowing)
  const updateElectionModelShowing=useSelector(state=>state.ui.updateElectionModelShowing )
  return (
    <>
        <section className="elections">
      <div className="container elections_container">
        <header className="elections_header">
          <h1>
            Ongoing Elections
          </h1>
          <button className="btn primary addElectionBTN" onClick={openModel}> Add New Election</button>
        </header>
        <menu className="elections_menu">
          {
            elections.map(election=><Election key={election.id} {...election} />)
          }
        </menu>
      </div>
    </section>

    {electionModelShowing && <AddElectionModel/>}

    {updateElectionModelShowing && <UpdateElectionModel/>}

    </>
  )
}

export default Elections