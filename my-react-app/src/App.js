import React, { useState, useEffect } from "react";
import MatchContainer from "./MatchContainer";
import Match from "./Match";
import "./App.css";

function App() {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatches(matches);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Match Container />
    </div>
  );
}

export default App;
