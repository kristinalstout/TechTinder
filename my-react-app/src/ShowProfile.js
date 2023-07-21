import React, { useState, useEffect } from "react";

function ShowProfile({YourProfile,showNewProfile,handleProfileToggle,isToggled}) {
   

    return(
        <div
        style={{
          backgroundColor: isToggled ? "#8a220b" : "#ff73c7",boxShadow: "0 0 7px 0 #620840",borderRadius: "20px",width:"350px",height:"420px",display:"grid",position:"relative",color:"white",border: isToggled? "3px solid red": "3px solid #cd066d"
          // border: "solid",
        }}
      >
        
        <div className="card_row" style={{position:"absolute",bottom:"85px",right:"78px"}}>
        <img src={YourProfile.profile_image} alt={"Your next soulmate"} className="image" style={{height:"162px",width:"162px"}}/>
            <h4 className="name">{YourProfile.profile_name}</h4>
              <p className="city">{YourProfile.profile_city}</p>
              <p>{YourProfile.profile_bio}</p>
              <br/>
              <p><strong>Interests:</strong> {YourProfile.profile_interests}</p>
              <em className="breaker">*Dealbreaker: {YourProfile.profile_dealbreakers}*</em>
                </div>
                </div>
    )
}

export default ShowProfile;