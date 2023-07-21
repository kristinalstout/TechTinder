<Routes>
      <Route element={
        <div className="app"
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
          <Search handleMatchArray={handleMatchArray}/> 
        </div>
      }>
      <Outlet/>
      <Route path="/profile" element={<Profile setMatches={setMatches} />}/>
  
      <Route path="/Matches" element={<MatchContainer matches={matchArray}
        handleDeleteMatch={handleDeleteMatch}
        handleYesClick={handleYesClick}
        showMatches={showMatches}
        yesMatch={yesMatch}
        handleToggle={handleToggle}
        isToggled={isToggled}/>}
      />
      <Route path="/" element={<App/>}/>
      </Route>
    </Routes>