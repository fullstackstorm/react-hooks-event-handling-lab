import React from "react";

function Keypad() {
  function passwordDetect() {
    console.log("Entering password...");
  }

  return (
    <div>
      <input onChange={passwordDetect} type="password" />
    </div>
  );
}

export default Keypad;
