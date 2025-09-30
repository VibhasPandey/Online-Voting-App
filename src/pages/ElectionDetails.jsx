import React from 'react'
import { elections,candidates} from '../data'
import { useParams } from 'react-router-dom'

const ElectionDetails = () => {
  const {id}= useParams()

  const currentElection=elections.find(election=> election.id==id)

  const electionCandidates=candidates.filter(candidate=> candidate.election==id)

  return (
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
        </menu>
      </div>
    </section>
  )
}

export default ElectionDetails