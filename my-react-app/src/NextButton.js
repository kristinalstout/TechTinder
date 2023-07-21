import React from "react";

function NextButton({ nextButton }) {
  return <button onClick={nextButton} style={{backgroundColor:"rgb(141,205,237)",color:"rgb(217,105,155)",borderRadius:"50px",textShadow:"0 0 10px white",position:"absolute",left:"811px",bottom:"350px",height:"150px",width:"150px"}}><strong>thank you, next</strong></button>;
}

export default NextButton;
