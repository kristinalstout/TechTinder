import React, { useState, useEffect } from "react";
import App from "./App";

function Profile({setMatches}) {

  const initialProfile ={
    name:"",
    image:"",
    bio:"",
    city:"",
    interests:"",
    dealbreakers:""
    }

    const [newMatch,setNewMatch] = useState(initialProfile);

    function handleSubmit(e){
      e.preventDefault();
      console.log("building profile");
      fetch("http://localhost:3000/matches",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json"},
        body:JSON.stringify(newMatch)
      })
      .then(res => res.json())
      .then(data=>setMatches(prevMatch=>[...prevMatch,data]))
    }
    function handleChange(e){
      const {name, value} = e.target;
      setNewMatch({...newMatch, [name]:value});}

  return (
    <form id="full_profile" onSubmit={handleSubmit}>
      <h2>Create Your Love profile</h2>
      <h4>Pick your profile picture</h4>

      <img src={"img"} alt={"Picture"} className="profile_image" />
      <label for="profile_name">Name: </label>
      <input type="text" name="name" id="profile-name" onChange={handleChange}/>

      <label for="profile_city">City: </label>
      <input type="text" name="city" id="profile-city" onChange={handleChange}/>

      <label for="image">Image: </label>
      <input type="text" name="image" id="new-image" onChange={handleChange}/>

      <label for="profile_bio">Bio: </label>
      <textarea name="bio" id="profile-bio" onChange={handleChange}/>

      <label for="profile_interests">Interests: </label>
      <textarea name="interests" id="profile-interests"onChange={handleChange}/>

      <label for="profile_dealbreakers">Dealbreakers: </label>
      <textarea
        name="dealbreakers"
        id="profile-dealbreakers" onChange={handleChange}
      ></textarea>

      <input type="submit" value="Start finding love"/>
    </form>
  );
}


export default Profile;
