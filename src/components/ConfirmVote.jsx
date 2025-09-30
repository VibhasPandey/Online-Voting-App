import React, { useState,useEffect } from 'react'
import { candidates } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { UiActions } from '../store/ui-slice'
const ConfirmVote = () => {
    const [modelCandidate,setModelCandidate]=useState({})

    const dispatch=useDispatch()

    const closeCandidateModel=()=>{
        dispatch(UiActions.closeVoteCandidateModel())

    }

    const selectedVoteCandidate=useSelector(state=> state.vote.selectedVoteCandidate)
    console.log("2. Received ID from Redux:", selectedVoteCandidate);

    const fetchCandidate=()=>{
        console.log("3. Searching for ID:", selectedVoteCandidate, "in candidates array.");
        const foundCandidate = candidates.find(candidate => candidate.id === selectedVoteCandidate);

    if (foundCandidate) {
        console.log("4. SUCCESS: Found candidate:", foundCandidate); 
        setModelCandidate(foundCandidate);
    } else {
        console.log("4. FAILURE: No candidate found with that ID."); 
    }
    }

    useEffect(()=>{
        fetchCandidate()

    },[selectedVoteCandidate])
  return (
    <section className="model">
        <div className="model_content confirm_vote-content">
            <h5>Please confirm your vote</h5>
            <div className="confirm_vote-image">
                <img src={modelCandidate.image} alt={modelCandidate.fullName}/>
            </div>
            <h2>
                {modelCandidate.fullName}
            </h2>
            <p>{modelCandidate.motto}</p>
            <div className="confirm_vote-cta">
                <button className="btn" onClick={closeCandidateModel}>Cancel</button>
                <button className="btn primary">Confirm</button>
            </div>
        </div>
    </section>
    
  )
}

export default ConfirmVote