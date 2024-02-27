import { GoPencil } from "react-icons/go";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import UpdateNoteModal from "../Modals/UpdateNoteModal";
const Card = ({ note }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(!showModal);
  return (
    <>
      <div className="card">
        <div className="header">
          <h1>{note.title}</h1>
          <div>
            <span className="icons">
              <GoPencil
                onClick={() => setShowModal(!showModal)}
                className="icon"
              />
            </span>
            <span className="icons trash">
              <FaTrashAlt className="icon" />
            </span>
          </div>
        </div>
        <p>{note.detail}</p>
      </div>
      {showModal && <UpdateNoteModal closeModal={closeModal} />}
    </>
  );
};

export default Card;
