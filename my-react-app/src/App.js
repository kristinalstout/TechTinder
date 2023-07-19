import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MatchContainer from "./MatchContainer";
import Header from "./Header";
import Search from "./Search";
import Match from "./Match";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);
  const [matchArray, setMatchArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [myMatches, setMyMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatchArray(data);
        const interestedMatch = data.map((match) => {
          return { ...match, interested: false };
        });
        setMatchArray(interestedMatch);
      });
  }, []);

  function handleDeleteMatch(deletedMatch) {
    const updatedMatches = matches.filter(
      (match) => match.id !== deletedMatch.id
    );
    setMatches(updatedMatches);
    setMatchArray(updatedMatches);
  }

  function handleYesClick(yesMatch) {
    let foundIndex = matches.findIndex((match) => {
      return match.id === yesMatch.id;
    });
    if (foundIndex === -1) {
      setMatches([...matches, { ...yesMatch, interested: true }]);
    }
  }

  function handleMatchArray(searchValue) {
    const newMatchArray = matches.filter(
      (match) =>
        match.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        match.bio.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMatchArray(newMatchArray);
  }

  const yesMatch = matches.filter((match) => match.interested);

  const [isToggled, setIsToggled] = useState(false);
  function handleToggle() {
    setIsToggled(!isToggled);
  }

  return (
    <div
      className="app"
      style={{
        backgroundColor: isToggled?"#8a220b":"#ff73c7",
        border: "solid",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header
        matches={matches}
        handleYesClick={handleYesClick}
        setShowProfile={setShowProfile}
        setShowHome={setShowHome}
        setMyMatches={setMyMatches}
        setShowMatches={setShowMatches}
        handleToggle={handleToggle}
        isToggled={isToggled}
      />
      {/* <iframe
        src="https://deadsimplechat.com/px9x_pETo"
        width="400px"
        height="600px"
      ></iframe> */}
      <Search handleMatchArray={handleMatchArray} />
      {showProfile ? (
        <Profile />
      ) : (
        <MatchContainer
          matches={matchArray}
          handleDeleteMatch={handleDeleteMatch}
          handleYesClick={handleYesClick}
          showMatches={showMatches}
          yesMatch={yesMatch}
        />
      )}
    </div>
  );
}

export default App;
