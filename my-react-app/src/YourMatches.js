import React from 'react';
import Match from "./Match";

function YourMatches({yourMatches}){
    
    return (
        <div className="your-matches">
            <h1>Your Matches</h1>
            <div className="matches">
                <Match />
            </div>
         </div>
    )
}
export default YourMatches;