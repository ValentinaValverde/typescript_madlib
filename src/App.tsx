import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      console.log("this works");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>madlib</h1>
      <UserInput />
      <button onClick={handleClick}>button</button>
      {loading && <p>Loading...</p>}
    </>
  );
}

export default App;
