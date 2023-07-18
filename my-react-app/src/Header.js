import React from "react";
import Profile from "./Profile";

function Header({ matches,setShowProfile,setShowHome }) {

function handleProfile(){
  setShowProfile(true)
  setShowHome(false)
}
function handleHome(){
  setShowHome(true)
  setShowProfile(false)
}

//make into routes^^^^^^

function buttonName(showProfile){
  const newButtonName = showProfile ===true?"Home":"Make Profile"
  return newButtonName
}
  return (
    <header>
      <h1>Tech Tinder</h1>
      <button className="mode" >Barbie Mode</button>
      <button className="mode"onClick={handleHome}>Home</button>
      <button className="mode" onClick = {handleProfile}>Make Profile</button>
      <button className="mode" >Your Matches</button>
    
    </header>
  );
}

export default Header;

// toggle barbie mode/oppenheimer mode
// display your current matches
