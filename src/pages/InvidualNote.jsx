import React from "react";
import { useParams } from "react-router-dom";
import { useNoteById } from "../graphql/hooks";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
const InvidualNote = () => {
  dayjs.extend(relativeTime);
  const { noteId } = useParams();
  const { note, loading, error } = useNoteById(+noteId);

  if (loading) {
    return (
      <div className="loader">
        <div className="pencil-loader">
          <div className="note-book">
            <p className="first-line"></p>
            <p></p>
            <p></p>
          </div>
          <div className="pencil">
            <div className="eraser-part"></div>
            <div className="middle-part"></div>
            <div className="bottom-part"></div>
          </div>
          <div className="ground"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>Data unavailable</div>
    );
  }

  return (
    <div className="individual-note">
      <div className="card">
        <div className="note-detail">
          <p>
            Posted by: <span>{note.owner.username}</span>
          </p>
          <p>
            Posted on: <span>{dayjs(note.createdAt).fromNow()}</span>
          </p>
        </div>
        <h1> {note.title}</h1>
        <p>{note.detail}</p>
      </div>
    </div>
  );
};

export default InvidualNote;
