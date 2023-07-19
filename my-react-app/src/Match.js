import React, { useState } from "react";

function Match({ match, handleDeleteMatch, handleYesClick }) {
  const [heart, setHeart] = useState(false);
  const [interested, setInterested] = useState(false);
  const [matches, setMatches] = useState([]);

  function handleNoClick(id) {
    fetch(`http://localhost:3000/matches/${match.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => handleDeleteMatch(match));
  }

  const toggleHeart = () => {
    setHeart(!heart);
  };

  return (
    <ul className="cards_item">
      <div className="card">
        <img
          src={match.image}
          alt={"Your next soulmate"}
          className="card_image"
        />
        <div className="card_row">
          <div className="card_column">
            <div className="card_title">{match.name}</div>
            <div className="card_bio">
              <h4>{match.city}</h4>
              <p>{match.bio}</p>
              <p>Interests: {match.interests}</p>
              <em>*Dealbreaker: {match.dealbreakers}*</em>
            </div>
          </div>
        </div>
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
      <div>
        <button className="no" onClick={handleNoClick}>
          ❌
        </button>
        <button className="yes" onClick={(e) => handleYesClick(match)}>
          ✔️
        </button>
      </div>
    </ul>
  );
}

export default Match;
