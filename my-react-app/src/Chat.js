import { useState, useEffect } from "react";

require("./deadsimplechat.js");

function Chat() {
  const [sdk, setSDK] = useState(0);
  useEffect(() => {
    (async () => {
      const sdk = new window.DSChatSDK(
        "px9x_pETo",
        (
          <iframe
            src="https://deadsimplechat.com/px9x_pETo"
            width="200px"
            height="400px"
          ></iframe>
        ),
        "pub_376c724169415341374b37642d71425959577936627143426f48727377305a54496a506278465f7054576455764d3871"
      );
      await sdk.connect();
      setSDK(sdk);
    })();
  }, []);

  function logout() {
    sdk.logout();
  }
  return (
    <div className="Chat">
      <header className="App-header">
        React Js Chat Application
        <button onClick={() => logout()} id="logout-button">
          Logout
        </button>
        <iframe
          id="chat-frame"
          src="https://deadsimplechat.com/px9x_pETo"
          width="200px"
          height="400px"
        ></iframe>
      </header>
    </div>
  );
}

export default Chat;
