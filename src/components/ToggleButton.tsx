import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <button onClick={handleClick} className="">
        {isOn ? "On" : "Off"}
      </button>
    </div>
  );
}

export default ToggleButton;

// To toggle classname:
// const toggleClass = (el, className) => el.classList.toggle(className);
