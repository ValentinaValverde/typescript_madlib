import { FC, useState } from "react";

const UserInput: FC = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      console.log("this works");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      event?.preventDefault();
      setInput("you've clicked me!");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <>
      <form>
        <input placeholder="user input" type="text" onChange={handleChange} />
        <button onClick={handleClick}>click me!</button>
        {loading && <p>Loading...</p>}
        <p>{input}</p>
      </form>
    </>
  );
};

export default UserInput;
