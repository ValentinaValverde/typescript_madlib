import { FC, useState } from "react";

const UserInput: FC = () => {
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <>
      <input placeholder="user input" type="text" onChange={handleChange} />
      <p>{input}</p>
    </>
  );
};

export default UserInput;
