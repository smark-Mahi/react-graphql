import React from "react";
import Card from "./Card";
import { useNotes } from "../graphql/hooks";

const Cards = () => {
  const { notes, loading, error } = useNotes("s", 10, 0);

  console.log("[HomePage]", { notes, loading, error });
  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }
  if (error) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>Data unavailable</div>
    );
  }
  return (
    <div className="cards">
      {notes.map((note) => (
        <Card note={note} />
      ))}
    </div>
  );
};

export default Cards;
