import React from "react";

function NextButton({ nextButton,isToggled }) {
  return (
    <button
      onClick={nextButton}
      style={{
        backgroundColor: isToggled? "#8a220b":"rgb(141,205,237)",
        color: isToggled? "white": "rgb(217,105,155)",
        borderRadius: "50px",
        borderColor: "white",
        textShadow: "0 0 10px white",
        position: "absolute",
        left: "550px",
        bottom: "200px",
        height: "80px",
        width: "150px",
        
      }}
    >
      <strong>thank you, next</strong>
    </button>
  );
}

export default NextButton;
