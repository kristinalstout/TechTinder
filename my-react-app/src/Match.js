import React, { useState } from "react";

function Match({
  match,
  handleDeleteMatch,
  handleYesClick,
  handleToggle,
  isToggled,
}) {
  const [heart, setHeart] = useState(false);
  const [interested, setInterested] = useState(false);
  const [matches, setMatches] = useState([]);
  const [showChat, setShowChat] = useState(false);

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

  const toggleChatButton = () => {
    setShowChat(!showChat);
  };

  return (
    <ul className="cards">
      <div
        className="card"
        style={{
          backgroundColor: isToggled ? "#8a220b" : "#ff73c7",
          border: "solid",
        }}
      >
        <img src={match.image} alt={"Your next soulmate"} className="image" />
        <div className="card_row">
          <div className="card_column">
            <h4 className="card_title">{match.name}</h4>
            <div className="card_bio">
              <p>{match.city}</p>
              <p>{match.bio}</p>
              <p>Interests: {match.interests}</p>
              <em>*Dealbreaker: {match.dealbreakers}*</em>
            </div>
          </div>
        </div>
      </div>

      <div className="card_detail">
        {showChat ? (
          <div>
            <button onClick={toggleChatButton} className="Chat">
              Close Chat
            </button>
            <iframe
              src="https://deadsimplechat.com/px9x_pETo"
              width="400px"
              height="400px"
            ></iframe>
          </div>
        ) : (
          <button onClick={(e) => toggleChatButton()}>Let's Chat</button>
        )}
      </div>
      <div>
        <button className="no" onClick={handleNoClick}>
          ❌
        </button>
        {heart ? (
          <button className="hearted" onClick={toggleHeart}>
            💖
          </button>
        ) : (
          <button className="unhearted" onClick={toggleHeart}>
            ♡
          </button>
        )}
        <button className="yes" onClick={(e) => handleYesClick(match)}>
          ✔️
        </button>
      </div>
    </ul>
  );
}

export default Match;
