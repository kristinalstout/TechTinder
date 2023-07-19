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

  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
        setMatchArray(data);
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
    const selectedMatches = matches.filter((match) => match.id === yesMatch.id);
    setMatchArray(selectedMatches);
    setMatches(selectedMatches);
  }

  function handleMatchArray(searchValue) {
    const newMatchArray = matches.filter(
      (match) =>
        match.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        match.bio.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMatchArray(newMatchArray);
  }

  return (
    <div className="app">
      <Header
        matches={matches}
        handleYesClick={handleYesClick}
        setShowProfile={setShowProfile}
        setShowHome={setShowHome}
        // myMatches={myMatches}
        setMyMatches={setMyMatches}
      />
      <Search handleMatchArray={handleMatchArray} />
      {showProfile ? (
        <Profile />
      ) : (
        <MatchContainer
          matches={matchArray}
          handleDeleteMatch={handleDeleteMatch}
          handleYesClick={handleYesClick}
        />
      )}
    </div>
  );
}

export default App;

//  app
//    |__header
//    |__search
//    |__match container
//        |__matches
