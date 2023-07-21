import React, { useState, useEffect } from "react";
import MatchContainer from "./MatchContainer";
import LikedMatches from "./LikedMatches";
import Header from "./Header";
import Search from "./Search";
import Match from "./Match";
import Profile from "./Profile";
import Chat from "./Chat";
import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import ShowProfile from "./ShowProfile";

function App() {
  const [matches, setMatches] = useState([]);
  const [matchArray, setMatchArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [myMatches, setMyMatches] = useState([]);
  const [showMatches, setShowMatches] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/matches")
      .then((res) => res.json())
      .then((data) => {
        setMatchArray(data);
        const interestedMatch = data.map((match) => {
          return { ...match, interested: false };
        });
        setMatchArray(interestedMatch);
      });
  }, []);

  function handleDeleteMatch(deletedMatch) {
    const updatedMatches = matchArray.filter(
      (match) => match.id !== deletedMatch.id
    );
    // setMatches(updatedMatches);
    setMatchArray(updatedMatches);
    console.log(updatedMatches);
  }

  function handleYesClick(yesMatch) {
    let foundIndex = matches.findIndex((match) => {
      return match.id === yesMatch.id;
    });
    if (foundIndex === -1) {
      setMatches([...matches, { ...yesMatch, interested: true }]);
    }
  }
  console.log(matchArray);
  const newMatchArray = matchArray.filter(
    (match) =>
      match.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      match.bio.toLowerCase().includes(searchValue.toLowerCase())
    // match.dealbreakers.some((dealbreaker) =>
    //   dealbreaker.toLowerCase().includes(searchValue.toLowerCase())
    // ) ||
    // match.interests.some((interest) =>
    //   interest.toLowerCase().includes(searchValue.toLowerCase())
    // )
  );

  const yesMatch = matches.filter((match) => match.interested);
  console.log(newMatchArray);

  const [isToggled, setIsToggled] = useState(false);
  function handleToggle() {
    setIsToggled(!isToggled);
  }

  const initialProfile = {
    profile_name: "",
    profile_image: "",
    profile_bio: "",
    profile_city: "",
    profile_interests: "",
    profile_dealbreakers: "",
  };

  const [newProfile, setNewProfile] = useState(initialProfile);
  const [myProfile, setMyProfile] = useState([]);
  const [showNewProfile, setShowNewProfile] = useState(false);

  function handleProfileToggle() {
    setShowNewProfile(!showNewProfile);
  }
  useEffect(() => {
    fetch("http://localhost:3000/MyProfile")
      .then((res) => res.json())
      .then((data) => {
        setMyProfile(data);
      });
  }, [myProfile]);
  //myProfile
  const mapProfile = myProfile.map((YouProfile) => {
    return (
      <ShowProfile
        handleProfileToggle={handleProfileToggle}
        YourProfile={YouProfile}
        isToggled={isToggled}
      />
    );
  });
  // const mapProfile = newProfile.map((YourProfile)=> (
  //   <ShowProfile handleProfileToggle={handleProfileToggle} YourProfile={YourProfile} isToggled={isToggled}/>
  // ))

  return (
    <div
      className="app"
      style={{
        backgroundColor: isToggled ? "#8a220b" : "#ff73c7",
        border: "solid",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header
        matches={matches}
        handleYesClick={handleYesClick}
        setShowProfile={setShowProfile}
        setShowHome={setShowHome}
        setMyMatches={setMyMatches}
        setShowMatches={setShowMatches}
        handleToggle={handleToggle}
        isToggled={isToggled}
      />
      <Search
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setSearching={setSearching}
        setMatchArray={setMatchArray}
      />
      <div style={{ position: "absolute", left: "800px", top: "340px" }}>
        {mapProfile}
      </div>
      {/* {newProfile==={}? null :null} */}
      {/* ternary for show profile on screen, should show throughout the app */}
      <Routes>
        <Route
          path="/"
          element={
            <MatchContainer
              matches={matchArray}
              handleDeleteMatch={handleDeleteMatch}
              handleYesClick={handleYesClick}
              showMatches={showMatches}
              yesMatch={yesMatch}
              handleToggle={handleToggle}
              isToggled={isToggled}
              newMatchArray={newMatchArray}
              searching={searching}
            />
          }
        />

        <Route
          path="/profile"
          element={
            <Profile setNewProfile={setNewProfile} newProfile={newProfile} />
          }
        />
        <Route
          path="/Matches"
          element={
            <LikedMatches
              matches={matchArray}
              handleDeleteMatch={handleDeleteMatch}
              handleYesClick={handleYesClick}
              showMatches={showMatches}
              yesMatch={yesMatch}
              handleToggle={handleToggle}
              isToggled={isToggled}
            />
          }
        />
      </Routes>

      {/* {showProfile ? (
        <Profile setMatches={setMatches} />
      ) : (
        <MatchContainer
          matches={matchArray}
          handleDeleteMatch={handleDeleteMatch}
          handleYesClick={handleYesClick}
          showMatches={showMatches}
          yesMatch={yesMatch}
          handleToggle={handleToggle}
          isToggled={isToggled}
        />
      )} */}
    </div>
  );
}

export default App;
