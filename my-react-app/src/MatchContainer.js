import React from "react";
import Match from "./Match";

function MatchContainer({ matches, handleDeleteMatch, handleYesClick }) {
  return (
    <ul className="cards">
      {matches.map((match) => {
        return (
          <div key={`match-${match.id}`}>
            <Match
              match={match}
              handleDeleteMatch={handleDeleteMatch}
              handleYesClick={handleYesClick}
            />
          </div>
        );
      })}
    </ul>
  );
}
export default MatchContainer;

//?raw=true
