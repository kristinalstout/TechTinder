import React, { useState } from "react";

function Match({ candidate }) {
  const [heart, setHeart] = useState(false);

  const toggleHeart = () => {
    setHeart(!heart);
  };

  return (
    <li className="cards_item">
      <div className="card">
        <img
          src={candidate.image}
          alt={"Your next soulmate"}
          className="card_image"
        />
        <div className="card_content">
          <div className="card_title">{candidate.name}</div>
          <div className="card_text">
            <h4>{candidate.city}</h4>
            <p>{candidate.bio}</p>
            <p>Interests: {candidate.interests}</p>
            <em>*Dealbreaker: {candidate.dealbreakers}*</em>
          </div>
          <div className="card_detail">
            <button className="chat">Let's Chat!</button>
            {heart ? (
              <button className="hearted" onClick={toggleHeart}>
                💖
              </button>
            ) : (
              <button className="unhearted" onClick={toggleHeart}>
                ♡
              </button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Match;
// click yes or no
