import { FC, useState } from "react";

const Official: FC = () => {
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [adj, setAdj] = useState("");
  const [adv, setAdv] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log("this works");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      event?.preventDefault();
      //   setInput("button clicked!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="text" />
        <button>Submit</button>
        {loading && <p>Loading...</p>}
      </form>

      <div>
        <p>Noun: </p>
        <p>Verb: </p>
        <p>Adj: </p>
        <p>Adv: </p>
      </div>
    </>
  );
};
export default Official;
