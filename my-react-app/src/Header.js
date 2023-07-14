import React from "react";

function Header({ matches }) {
  return (
    <header>
      <h1>Tech Tinder</h1>
      <button className="mode">Barbie Mode</button>
      <button className="mode">Your Matches</button>
    </header>
  );
}

export default Header;

// toggle barbie mode/oppenheimer mode
// display your current matches
