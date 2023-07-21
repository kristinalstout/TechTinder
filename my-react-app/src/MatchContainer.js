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
  newMatchArray,
  searching,
  
}) {
  const [matchIndex, setMatchIndex] = useState(0);
  console.log(newMatchArray);

  const matchCards = newMatchArray
    .slice(matchIndex, matchIndex + 1)
    .map((match) => (
      <Match
        match={match}
        nextButton={nextButton}
        handleDeleteMatch={handleDeleteMatch}
        handleYesClick={handleYesClick}
        handleToggle={handleToggle}
        isToggled={isToggled}
      />
    ));

  function nextButton() {
    setMatchIndex((matchIndex) => (matchIndex + 1) % matches.length);
    console.log("next");
  }

  const renderMatches = newMatchArray.map((match) => {
    return (
      <div key={`match-${match.id}`}>
        <Match
          match={match}
          handleDeleteMatch={handleDeleteMatch}
          setMatchIndex={setMatchIndex}
          handleYesClick={handleYesClick}
          handleToggle={handleToggle}
          isToggled={isToggled}
        />
      </div>
    );
  });

  return (
    <div className="next" style={{backgroundColor: isToggled? "#ae631f":"rgb(204, 0, 133)",boxShadow: isToggled? "10px 5px 5px red":"10px 5px 5px rgb(255, 201, 240)"}}>
      {matchCards}
      <NextButton nextButton={nextButton} isToggled={isToggled}/>
      {/* <ul className="cards">{renderMatches}</ul>; */}
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
