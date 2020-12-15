import React, { useState } from "react";
import data from "./data";
function App() {
  const [paras, setParas] = useState(0);
  const [textArray, setTextArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paras > 9) {
      setParas(9);
      alert("Max 9 Paragraphs limit Reached");
    } else if (paras < 0) {
      alert("Positive Number Accepted");
      setParas(0);
      setTextArray([]);
      return;
    }
    setTextArray(data.slice(0, paras));
  };
  return (
    <section className="section-center">
      <h3>Random Paragraph Generator</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={paras}
          onChange={(e) => setParas(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article>
        {textArray.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
