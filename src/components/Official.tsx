import { FC, useState } from "react";

const Official: FC = () => {
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [adj, setAdj] = useState("");
  const [adv, setAdv] = useState("");

  const handleSubmit = async () => {
    event?.preventDefault();
    setNoun("");
    setVerb("");
    setAdj("");
    setAdv("");
  };

  // this method wouldn't work for me because I am using useState
  // const nounInput = document.getElementById("noun") as HTMLElement;

  const nounChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoun(event.target.value);
  };

  const verbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerb(event.target.value);
  };

  const adjChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdj(event.target.value);
  };

  const advChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAdv(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Noun" onChange={nounChange} />
        <input type="text" placeholder="Verb" onChange={verbChange} />
        <input type="text" placeholder="Adjective" onChange={adjChange} />
        <input type="text" placeholder="Adverb" onChange={advChange} />
      </form>

      <div>
        <p>Noun: {noun}</p>
        <p>Verb: {verb}</p>
        <p>Adj: {adj}</p>
        <p>Adv: {adv}</p>

        <p>
          There was once a {adj} {noun} that loved to {verb} {adv}.
        </p>
        <button type="submit">Reset</button>
      </div>
    </>
  );
};
export default Official;
