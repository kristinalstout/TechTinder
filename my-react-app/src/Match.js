import React, { useState } from "react";

function Match({ candidate }) {
  const [heart, setHeart] = useState(false);

  return (
    <li className="cards_item">
      <div className="card">
        <img src={candidate.image} alt={"Your next soulmate"} className ="card_image"/>
        <div className= "card_content">
        <div className="card_title">{candidate.name}</div>
        <h4>{candidate.city}</h4>
        <p>{candidate.bio}</p>
        <p>Interests: {candidate.interests}</p>
        <em>*Dealbreaker: {candidate.dealbreakers}*</em>
        <div className="card_detail">
        <button className="chat">Let's Chat!</button>
        <button className="hearted">♡</button></div></div>
      </div>
    </li>
  ); //onClick, have heart fill in
}

export default Match;
// be able to heart, unheart; click yes or no
