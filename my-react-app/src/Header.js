import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

function Header({
  match,
  setShowProfile,
  setShowHome,
  setMyMatches,
  handleYesClick,
  setShowMatches,
  handleToggle,
  isToggled,
}) {
  function handleProfile() {
    setShowProfile(true);
    setShowHome(false);
  }
  function handleHome() {
    setShowHome(true);
    setShowProfile(false);
  }

  function handleMatches() {
    // if (!interested) {
    //   handleYesClick(match);
    // } else {
    //   return "";
    // }
  }

  function buttonName(showProfile) {
    const newButtonName = showProfile === true ? "Home" : "Make Profile";
    return newButtonName;
  }

  return (
    <div
      style={{
        backgroundColor: isToggled ? "#8a220b" : "#ff73c7",
        border: "solid",
      }}
    >
      <h1>
        <span className="logo">
          {isToggled ? (
            <img
              className="TT"
              src={"./Copy of javascript v react.png"}
              alt="TechTinder"
            />
          ) : (
            <img className="TT" src={"./techtinder.png"} alt="TechTinder" />
          )}
        </span>
      </h1>
      <button
        className="mode"
        onClick={handleToggle}
        style={{
          backgroundColor: isToggled? "#ae631f":"rgb(141,205,237)",
          color: isToggled? "white":"rgb(217,105,155)",
          borderRadius: "50px",
          textShadow: "0 0 10px white",
        }}
      >
        {isToggled ? "Barbie Mode" : "Oppenheimer Mode"}
      </button>

      <nav
        className="nav"
        style={{
          backgroundColor: isToggled ? "#d56013" : "rgb(255, 167, 229)",
          position: "flex",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <ul>
          <Link to="/" className="nav_bar" style={{color:isToggled?"white":"purple"}}>
            Home
          </Link>
        </ul>
        <ul>
          <Link to="/profile" className="nav_bar" style={{color:isToggled?"white":"purple"}}>
            Make a Profile
          </Link>
        </ul>
        <ul>
          <Link to="/matches" className="nav_bar" style={{color:isToggled?"white":"purple"}}>
            Your Matches
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
