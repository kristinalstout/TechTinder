import React from "react";
import Match from "./Match";

function MatchContainer({
  matches,
  handleDeleteMatch,
  handleYesClick,
  showMatches,
  yesMatch,
}) {
  console.log(yesMatch);
  function renderMatches() {
    if (showMatches) {
      return yesMatch.map((match) => {
        return (
          <div key={`match-${match.id}`}>
            <Match
              match={match}
              handleDeleteMatch={handleDeleteMatch}
              handleYesClick={handleYesClick}
            />
          </div>
        );
      });
    } else {
      return matches.map((match) => {
        return (
          <div key={`match-${match.id}`}>
            <Match
              match={match}
              handleDeleteMatch={handleDeleteMatch}
              handleYesClick={handleYesClick}
            />
          </div>
        );
      });
    }
  }

  return <ul className="cards">{renderMatches()}</ul>;
}
export default MatchContainer;

//?raw=true
