import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    // updating state directly is a no-no!
    // isOn = !isOn;
    setIsOn((isOn) => !isOn);
  };

  const color = isOn ? "red" : "white";

  return <button onClick={handleClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
};

export default Toggle;
