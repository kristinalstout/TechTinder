import React, { useState, useEffect } from "react";
import MatchContainer from "./MatchContainer";
import Header from "./Header";
import Match from "./Match";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      {<MatchContainer matches={matches} />}
    </div>
  );
}

export default App;
