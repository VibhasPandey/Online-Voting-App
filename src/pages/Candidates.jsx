import React from 'react'
import {candidates as dummyCandidates} from '../data'
import { useParams } from 'react-router-dom'
import Candidate from '../components/Candidate'
import ConfirmVote from '../components/ConfirmVote'
import { useSelector } from 'react-redux'



const Candidates = () => {

  const {id} = useParams()

  const  voteCandidateModelShowing=useSelector(state=>state.ui.voteCandidateModelShowing)
  const candidates=dummyCandidates.filter(candidate=>candidate.election===id)


  return (
    <>
      <section className="candidates">
      <header className="candidates_header">
        <h1>
          {candidates.length > 0 ? "VOTE YOUR CANDIDATE":"ELECTION INACTIVE"}
        </h1>
        <p>
           {candidates.length > 0 ? "These are the candidates for the selected election. Please vote once and wisely, because you won't be allowed to vote in this election again" : "The Election you're trying to participate into does not have any active candidates yet.Check the status later"}
           </p>
          
      </header>
      <div className="container candidates_container">
            { 
              candidates.map(candidate=><Candidate key={candidate.id} {...candidate} />)
            }
      </div>
    </section>

    {voteCandidateModelShowing && <ConfirmVote/>}
    </>
  )
}

export default Candidates