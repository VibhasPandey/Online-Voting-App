import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from "../store/ui-slice";

const UpdateElectionModel = () => {
    const [title,setTitle]=useState("");
    const [motto,setMotto]=useState("")
    const [thumbnail,setThumbnail]=useState("")

    const dispatch=useDispatch()




    const closeModel=()=>{
        dispatch(UiActions.closeUpdateElectionModel())

    }

    


  return (
    <section className="model">
        <div className="model_content">
            <header className="model_header">
                <h4>Edit Election</h4>
                <button className="model_close" onClick={closeModel}><IoMdClose/></button>
            </header>
            <form >
                <div>
                    <h6>Election Title:</h6>
                    <input type="text" name="fullName" value={title} onChange={e=>setTitle(e.target.value)} />
                </div>
                <div>
                    <h6>Election Motto:</h6>
                    <input type="text" name="motto" value={motto} onChange={e=>setMotto(e.target.value)} />
                </div>
                <div>
                    <h6>Election Thumbnail:</h6>
                    <input type="file" name="thumbnail"  onChange={e=>setThumbnail(e.target.files[0])} accept="png,jpg,jpeg,webp,avif" />
                </div>
                 <button type="submit" className="btn primary">
                    Update Election
          </button>
            </form>
        </div>
    </section>
  )
}

export default UpdateElectionModel