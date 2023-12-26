import { FC, useState } from "react";

const MadLib: FC = () => {
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
      <form onSubmit={handleSubmit} className="form">
        <div className="container">
          <input
            type="text"
            placeholder="Noun"
            onChange={nounChange}
            className="input"
          />
          <input
            type="text"
            placeholder="Verb"
            onChange={verbChange}
            className="input"
          />
          <input
            type="text"
            placeholder="Adjective"
            onChange={adjChange}
            className="input"
          />
          <input
            type="text"
            placeholder="Adverb"
            onChange={advChange}
            className="input"
          />
        </div>

        <div className="bottom">
          {/* add className="hidden" to the p tag below */}
          <p>
            There was once a {adj} {noun} that loved to {verb} {adv}.
          </p>

          <button type="submit" className="button">
            Reset
          </button>
        </div>
      </form>
    </>
  );
};
export default MadLib;
