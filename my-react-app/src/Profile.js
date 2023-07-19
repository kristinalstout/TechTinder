import React, { useState, useEffect } from "react";
import App from "./App";

function Profile() {
  const [pName, setPName] = useState("");
  return (
    <form id="full_profile">
      <h2>Create Your Love profile</h2>
      <h4>Pick your profile picture</h4>

      <img src={"img"} alt={"Picture"} className="profile_image" />
      <label for="profile_name">Name: </label>
      <input type="text" name="profile_name" id="profile-name" />

      <label for="profile_city">City: </label>
      <input type="text" name="profile_city" id="profile-city" />

      <label for="image">Image: </label>
      <input type="text" name="image" id="new-image" />

      <label for="profile_bio">Bio: </label>
      <textarea name="profile_bio" id="profile-bio" />

      <label for="profile_interests">Interests: </label>
      <textarea name="profile_interests" id="profile-interests"></textarea>

      <label for="profile_dealbreakers">Dealbreakers: </label>
      <textarea
        name="profile_dealbreakers"
        id="profile-dealbreakers"
      ></textarea>

      <input type="submit" value="Start finding love" />
    </form>
  );
}
const profileName = "name";
const profileCity = "city";
const profileBio = "bio";
const profileInterests = "interests";
const profileDealbreakers = "dealbreakers";

export default Profile;
