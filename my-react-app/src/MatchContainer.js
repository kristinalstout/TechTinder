import React from "react";
import Match from "./Match";

// function MatchContainer() {
//   return (<div className="belt-of-options">{/* <NextButton /> */}</div>;)
// }


function MatchContainer({matches}){
return(
  <main>
      <ul className="options-list">
          {matches.map((candidate)=>{
          return(<div key={`candidate-${candidate.id}`}>
              <Match candidate = {candidate}/>
          </div>)})}
     </ul>
 </main>
)}
export default MatchContainer;


//?raw=true