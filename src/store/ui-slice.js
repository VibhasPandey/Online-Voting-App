import { createSlice } from "@reduxjs/toolkit";

const initialState={
    addCandidateModelShowing:false,
    voteCandidateModelShowing:false,
    electionModelShowing:false,
    updateElectionModelShowing:false,
}

const uiSlice=createSlice({
    name:"ui",
    initialState: initialState,
    reducers:{
        openAddCandidateModel(state){
            state.addCandidateModelShowing=true
        },
        closeAddCandidateModel(state){
            state.addCandidateModelShowing=false
        },
        openVoteCandidateModel(state){
            state.voteCandidateModelShowing=true
        },
        closeVoteCandidateModel(state){
            state.voteCandidateModelShowing=false
        },
        openElectionModel(state){
            state.electionModelShowing=true
        },
        closeElectionModel(state){
            state.electionModelShowing=false
        },
        openUpdateElectionModel(state){
            state.updateElectionModelShowing=true
        },
        closeUpdateElectionModel(state){
            state.updateElectionModelShowing=false
        },
    }
})

export const UiActions=uiSlice.actions;
export default uiSlice;