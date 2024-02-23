import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="cards">
      {[...new Array(30)].map((note) => (
        <Card />
      ))}
    </div>
  );
};

export default Cards;
