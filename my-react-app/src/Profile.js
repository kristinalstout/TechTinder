import React, { useState, useEffect } from "react";

function Profile(){
const [pName, setPName] = useState("")
const profileName = ()=>{
    
}
function handleClick(){

}

return(
    <li className="person_profile">
        <img src={"img"}
        alt={"Pick your profile picture"}
        className="profile_image"
        />
        <div className="card_content">
          <div className="profile_name">{profileName}</div>
          <div className="card_text">
            <h4>{profileCity}</h4>
            <p>{profileBio}</p>
            <p>Interests: {profileInterests}</p>
            <em>*Dealbreaker: {profileDealbreakers}*</em>
          </div>
          <input type="submit" value="Create" onClick={handleClick}/>
        </div>
        
    </li>
)
}

export default Profile