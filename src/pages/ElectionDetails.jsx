import React from 'react'
import { elections,candidates, voters} from '../data'
import { useParams } from 'react-router-dom'
import ElectionCandidate from '../components/ElectionCandidate'
import { IoAddOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import uiSlice, { UiActions } from '../store/ui-slice'
import AddCandidateModel from '../components/AddCandidateModel'

const ElectionDetails = () => {

  

  
  const {id}= useParams()
  const dispatch=useDispatch()

  const currentElection=elections.find(election=> election.id==id)

  const electionCandidates=candidates.filter(candidate=> candidate.election==id)

  const openModel=()=>{
    dispatch(UiActions.openAddCandidateModel())

  }
  const addCanddidateModelShowing = useSelector(state => state.ui.addCandidateModelShowing)

  return (
    <>
    <section className="election_details">
      <div className="container electionDetails_container">
        <h2>{currentElection.title}</h2>
        <p>{currentElection.description}</p>
        <div className="electionDetails_image">
          <img src={currentElection.thumbnail} alt={currentElection.title} />
        </div>
        <menu className="electionDetails_candidates">
          {
            electionCandidates.map(candidate=> <ElectionCandidate key={candidate.id} {...candidate}/>)

          }
          <button className="add_candidate-btn" onClick={openModel}><IoAddOutline/></button>
        </menu>

        <menu className="voters">
          <h2>Voters</h2>
          <table className='voters_table'>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
                voters.map(voter=><tr key={voter.id}>
                  <td><h5>{voter.fullName}</h5></td>
                  <td>{voter.email}</td>
                  <td>10:43:34</td>
                </tr>
                )
              }
            </tbody>

          </table>
        </menu>
      </div>
    </section>


    {addCanddidateModelShowing && <AddCandidateModel/>}
    </>
  )
}

export default ElectionDetails