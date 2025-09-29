import React, { useState,useEffect } from 'react'
import { candidates } from '../data'
import { useDispatch } from 'react-redux'
import { UiActions } from '../store/ui-slice'
const ConfirmVote = () => {
    const [modelCandidate,setModelCandidate]=useState({})

    const dispatch=useDispatch()

    const closeCandidateModel=()=>{
        dispatch(UiActions.closeVoteCandidateModel())

    }

    const fetchCandidate=()=>{
        candidates.find(candidate=>{
            if(candidate.id==='c1'){
                setModelCandidate(candidate)
            }
        })
    }

    useEffect(()=>{
        fetchCandidate()

    },[])
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