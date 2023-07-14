import React from "react";
import Match from "./Match";


function MatchContainer({ matches }) {
  return (

      <ul className="cards">
        {matches.map((candidate) => {
          return (
            <div key={`candidate-${candidate.id}`}>
              <Match candidate={candidate} />
            </div>
          );
        })}
      </ul>
   
  );
}
export default MatchContainer;

//?raw=true
