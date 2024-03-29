import React, { useState } from "react";

function Match({
  match,
  handleDeleteMatch,
  handleYesClick,
  handleToggle,
  isToggled,
  nextButton,
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
      .then(() => {
        handleDeleteMatch(match);
        nextButton();
      });
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
          backgroundColor: isToggled ? "#8a220b" : "#ff73c7",  border: isToggled? "3px solid red": "3px solid #cd066d",
          // border: "solid",
        }}
      >
        <div className="card_row">
          <img
            src={match.image}
            alt={"Your next soulmate"}
            className="image"
            style={{ height: "162px", width: "auto" }}
          />
          <div className="card_column">
            <h4 className="name">{match.name}</h4>

            <div>
              <p className="city">{match.city}</p>
              <p>{match.bio}</p>
              <p>
                <strong>Interests:</strong> {match.interests}
              </p>
              <em className="breaker">*Dealbreaker: {match.dealbreakers}*</em>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {showChat ? (
                <div className="chat" >
                  <button onClick={toggleChatButton}>Close Chat</button>
                  <iframe
                    src="https://deadsimplechat.com/px9x_pETo"
                    width="400px"
                    height="400px"
                  ></iframe>
                </div>
              ) : (
                <button className="chat" onClick={(e) => toggleChatButton()} style={{backgroundColor: isToggled? "#ae631f":"rgb(204, 0, 133"}}>
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
