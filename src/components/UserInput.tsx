import { FC, useState } from "react";

const UserInput: FC = () => {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    event?.preventDefault();
    setInput("you've clicked me!");
  };

  return (
    <>
      <form>
        <input placeholder="user input" type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>click me!</button>
        <p>{input}</p>
      </form>
    </>
  );
};

export default UserInput;
