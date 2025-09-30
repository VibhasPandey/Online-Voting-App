import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from "../store/ui-slice";

const AddCandidateModel = () => {
    const [fullName,setFullName]=useState("");
    const [motto,setMotto]=useState("")
    const [image,setImage]=useState("")

    const dispatch=useDispatch()




    const closeModel=()=>{
        dispatch(UiActions.closeAddCandidateModel())

    }

    


  return (
    <section className="model">
        <div className="model_content">
            <header className="model_header">
                <h4>Add Candidate</h4>
                <button className="model_close" onClick={closeModel}><IoMdClose/></button>
            </header>
            <form >
                <div>
                    <h6>Candidate Name:</h6>
                    <input type="text" name="fullName" value={fullName} onChange={e=>setFullName(e.target.value)} />
                </div>
                <div>
                    <h6>Candidate Motto:</h6>
                    <input type="text" name="motto" value={motto} onChange={e=>setMotto(e.target.value)} />
                </div>
                <div>
                    <h6>Candidate Photo:</h6>
                    <input type="file" name="image"  onChange={e=>setImage(e.target.files[0])} accept="png,jpg,jpeg,webp,avif" />
                </div>
                 <button type="submit" className="btn primary">
                    Add Candidate
          </button>
            </form>
        </div>
    </section>
  )
}

export default AddCandidateModel