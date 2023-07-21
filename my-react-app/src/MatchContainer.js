import React, { useState } from "react";
import NextButton from "./NextButton";
import Match from "./Match";

function MatchContainer({
  matches,
  handleDeleteMatch,
  handleYesClick,
  showMatches,
  yesMatch,
  handleToggle,
  isToggled,
  newMatchArray
}) {
  const [matchIndex, setMatchIndex] = useState(0);

  const matchCards = matches
    .slice(matchIndex, matchIndex + 1)
    .map((match) => (
      <Match
        match={match}
        handleDeleteMatch={handleDeleteMatch}
        handleYesClick={handleYesClick}
        handleToggle={handleToggle}
        isToggled={isToggled}
      />
    ));
     
  function nextButton() {
    setMatchIndex((matchIndex) => (matchIndex + 1) );//% matches.length
    console.log("next");
  }
console.log(matches);
console.log(matchIndex)
  function renderMatches() {
  
      return newMatchArray.map((match) => {
        return (
          <div key={`match-${match.id}`}>
            <Match
              match={match}
              handleDeleteMatch={handleDeleteMatch}
              handleYesClick={handleYesClick}
              handleToggle={handleToggle}
              isToggled={isToggled}
            />
          </div>
        );
      });
  }

  return (
    <div className="next">
      {matchCards}
      <NextButton nextButton={nextButton} />
      {/* <ul className="cards">{renderMatches()}</ul>; */}
    </div>
  );
}

export default MatchContainer;

// !yesMatch

// const uncheckedMatches = matches.filter((!yesMatch)
//        return uncheckedMatches.map((match) => {

//    })

// if (!interested) {

// }

// if (yesMatch) {
//  return !showMatches
//   }