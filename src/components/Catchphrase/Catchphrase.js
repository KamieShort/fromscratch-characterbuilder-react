import React from 'react';
import './Catchphrase.css';

export default function Catchphrase({
  setCatchphrase,
  catchphrase,
  catchphrases,
  setCatchphrases,
}) {
  const saveCatchphrase = () => {
    setCatchphrases((prevState) => [...prevState, catchphrase]);
  };
  return (
    <>
      <label>
        Write your own Catchphrase:
        <input
          id="catchphrase"
          value={catchphrase}
          type="text"
          onChange={(e) => setCatchphrase(e.target.value)}
        />
        <button id="catchphrase-button" onClick={saveCatchphrase}>
          Add
        </button>
      </label>

      <ul>
        {catchphrases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
