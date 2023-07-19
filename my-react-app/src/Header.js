import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function Header({
  matches,
  setShowProfile,
  setShowHome,
  setMyMatches,
  handleYesClick,
}) {
  function handleProfile() {
    setShowProfile(true);
    setShowHome(false);
  }
  function handleHome() {
    setShowHome(true);
    setShowProfile(false);
  }

  function handleMatches(match) {
    setMyMatches((prevMatches) => [...prevMatches, match]);
    setMyMatches(match);
  }

  function buttonName(showProfile) {
    const newButtonName = showProfile === true ? "Home" : "Make Profile";
    return newButtonName;
  }
  return (
    <div>
        <h1>
          <span className="logo">
            <img className="TT" src={"./techtinder.png"} alt="TechTinder" />
          </span>
        </h1>
        <button className="mode">Barbie Mode</button>

      <nav className="nav">
        <ul>
          <Link to="/" onClick={handleHome} className="nav_bar">
            Home
          </Link>
        </ul>
        <ul>
          <Link to="/profile" onClick={handleProfile} className="nav_bar">
            Make a Profile
          </Link>
        </ul>
        <ul>
          <Link to="/matches" onClick={handleMatches} className="nav_bar">
            Your Matches
          </Link>
        </ul>
      </nav>
     </div>
  );
}

export default Header;

// toggle barbie mode/oppenheimer mode
// display your current matches

/* <button className="home" onClick={handleHome}>
Home
</button>
<button className="profile" onClick={handleProfile}>
Make Profile
</button>
<button className="list">Your Matches</button> */
