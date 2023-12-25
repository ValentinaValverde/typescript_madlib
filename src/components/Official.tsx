import { FC, useState } from "react";

const Official: FC = () => {
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [adj, setAdj] = useState("");
  const [adv, setAdv] = useState("");

  const handleSubmit = async () => {
    event?.preventDefault();
    setNoun("noun");
    setVerb("verb");
    setAdj("adj");
    setAdv("adv");
  };

  // this method wouldn't work for me because I am using useState
  // const nounInput = document.getElementById("noun") as HTMLElement;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Noun" id="noun" />
        <input type="text" placeholder="Verb" value="verb" />
        <input type="text" placeholder="Adjective" value="adj" />
        <input type="text" placeholder="Adverb" value="adv" />

        <button type="submit">Submit</button>
      </form>

      <div>
        <p>Noun: {noun}</p>
        <p>Verb: {verb}</p>
        <p>Adj: {adj}</p>
        <p>Adv: {adv}</p>
      </div>
    </>
  );
};
export default Official;
