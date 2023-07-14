import React, { useState, useEffect } from "react";
import MatchContainer from "./MatchContainer";
import Header from "./Header";
import Search from "./Search";
import Match from "./Match";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);
  const [matchArray, setMatchArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
      });
  }, []);

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
      <Header matches={matches} />
      <Search handleMatchArray={handleMatchArray} />
      {<MatchContainer matches={matches} />}
    </div>
  );
}

export default App;
