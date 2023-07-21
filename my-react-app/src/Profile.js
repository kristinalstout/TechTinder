import React, { useState, useEffect } from "react";


function Profile({setNewProfile,newProfile}) {

 

    function handleSubmit(e){
      e.preventDefault();
      console.log("submitting")
      fetch("http://localhost:3000/MyProfile",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json"},
        body:JSON.stringify(newProfile)
      })
      // .then(res => res.json())
      // .then(data=>setNewProfile(newProfile))
      .then(response => {if (!response.ok) {
        throw new Error(response.statusText);} return response.json();})   
      .catch(error=> {console.error('Error:', error);});
    }
    
    function handleChange(e){
      const {name, value} = e.target;
      setNewProfile({...newProfile, [name]:value});}

  return (
    
    <form id="full_profile" style={{position:"absolute",left:"710px",bottom:"80px"}}onSubmit={handleSubmit} >
      <h2>Create Your Love profile</h2>
      <h4>Pick your profile picture</h4>

      <img src={"img"} alt={"Picture"} className="profile_image" />
      <label for="profile_name">Name: </label>
      <input type="text" name="profile_name" id="profile-name" onChange={handleChange}/>

      <label for="profile_city">City: </label>
      <input type="text" name="profile_city" id="profile-city" onChange={handleChange}/>

      <label for="image">Image: </label>
      <input type="text" name="profile_image" id="new-image" onChange={handleChange}/>

      <label for="profile_bio">Bio: </label>
      <textarea name="profile_bio" id="profile_bio" onChange={handleChange}/>

      <label for="profile_interests">Interests: </label>
      <textarea name="profile_interests" id="profile_interests"onChange={handleChange}/>

      <label for="profile_dealbreakers">Dealbreakers: </label>
      <textarea
        name="profile_dealbreakers"
        id="profile_dealbreakers" onChange={handleChange}
      ></textarea>

      <input type="submit" value="Start finding love"/>
    </form>
  );
}


export default Profile;
//absolute positioning for profile vs. match
//eventually change to columnsjson-server --watch db.json