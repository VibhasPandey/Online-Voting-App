import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { UiActions } from "../store/ui-slice";

const AddElectionModel = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const dispatch=useDispatch()

  const closeModel=()=>{
    dispatch(UiActions.closeElectionModel())

  }

  return (
    <section className="model">
      <div className="model_content">
        <header className="model_header">
          <h4>Create New Election</h4>
          <button className="model_close" onClick={closeModel}>
            <IoMdClose />
          </button>
        </header>
        <form>
          <div>
            <h6>Election Title:</h6>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h6>Election Description:</h6>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <h6>Election Thumbnail:</h6>

            <input
              type="file"
              name="thumbnail"
              onChange={(e) => setThumbnail(e.target.files[0])}
              accept="png,jpg,jpeg,webp,avif"
            />
          </div>
          <button type="submit" className="btn primary">
            Add Election
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddElectionModel;
