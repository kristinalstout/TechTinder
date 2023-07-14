import React, { useState } from "react";

function Match({ candidate }) {
  const [heart, setHeart] = useState(false);

  return (
    <div>
      <ul className="card">
        <img src={candidate.image} alt={"Your next soulmate"} />
        <h4>{candidate.name}</h4>
        <p>Bio: {candidate.bio}</p>
      </ul>
      <button className="chat">Let's Chat!</button>
      <button className="hearted">♡</button>
    </div>
  );
}

export default Match;
// be able to heart, unheart; click yes or no
