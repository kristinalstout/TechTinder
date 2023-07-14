import React, { useState, useEffect } from "react";
import MatchContainer from "./MatchContainer";
import Header from "./Header";
import Search from "./Search";
import Match from "./Match";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);
  const [matchArray, setMatchArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
      });
  }, []);

  function handleMatchArray(search) {
    const newMatchArray = matches.filter(
      (match) =>
        match.name.toLowerCase().includes(search.toLowerCase()) ||
        match.bio.toLowerCase().includes(search.toLowerCase())
    );
    setMatchArray(newMatchArray);
  }

  return (
    <div className="app">
      <Header matches={matches} handleMatchArray={handleMatchArray} />
      <Search handleMatchArray={handleMatchArray} />
      {<MatchContainer matches={matches} />}
    </div>
  );
}

export default App;
