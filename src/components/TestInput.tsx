// NOTES:
// useRef "primary purpose is to keep track of values that don't need to be reflected in the UI or cause re-rendering"
// I'd rather use useState haha

import { useRef } from "react";

function TestInput() {
  const inputRef = useRef();

  const handleClick = () => {
    // Accessing the input field value
    console.log(inputRef.current.value);

    // Modifying the input field value
    inputRef.current.value = "New value";
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default TestInput;
