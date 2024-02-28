import { GoPencil } from "react-icons/go";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
import UpdateNoteModal from "../Modals/UpdateNoteModal";
import { useMutation } from "@apollo/client";
import { DELETE_NOTE, GET_NOTES } from "../graphql/queries";
const Card = ({ note }) => {
  const [getCurrentNote, setGetCurrentNote] = useState(null);
  const closeModal = () => setGetCurrentNote(null);
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: { id: note.id },
    refetchQueries: [{ query: GET_NOTES }],
  });
  console.log(getCurrentNote, "noteupdate");
  return (
    <>
      <div className="card">
        <div className="header">
          <h1>{note.title}</h1>
          <div>
            <span className="icons">
              <GoPencil
                onClick={() =>
                  setGetCurrentNote({
                    title: note.title,
                    detail: note.detail,
                    id: note.id,
                  })
                }
                className="icon"
              />
            </span>
            <span className="icons trash">
              <FaTrashAlt className="icon" onClick={deleteNote} />
            </span>
          </div>
        </div>
        <p>{note.detail}</p>
      </div>
      {!!getCurrentNote && (
        <UpdateNoteModal
          closeModal={closeModal}
          currentData={getCurrentNote}
          setGetCurrentNote={setGetCurrentNote}
        />
      )}
    </>
  );
};

export default Card;
