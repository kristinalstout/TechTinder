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
          // border: "solid",
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
              <em className="breaker">*Dealbreaker: {match.dealbreakers}*</em>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {showChat ? (
                <div className="chat">
                  <button onClick={toggleChatButton}>Close Chat</button>
                  <iframe
                    src="https://deadsimplechat.com/px9x_pETo"
                    width="400px"
                    height="400px"
                  ></iframe>
                </div>
              ) : (
                <button className="chat" onClick={(e) => toggleChatButton()}>
                  Chat
                </button>
              )}
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
          </div>
        </div>
      </div>
    </ul>
  );
}

export default Match;
