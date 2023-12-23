import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>
    </div>
  );
}

export default ToggleButton;
