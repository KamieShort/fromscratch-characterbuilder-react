import React from 'react';
import './Catchphrase.css';

export default function Catchphrase({ setCatchphrase }) {
  const saveCatchphrase = () => {
    setCatchphrase((prevState) => [...prevState, Catchphrase]);

    setCatchphrase('');

    return (
      <div>
        <input value={Catchphrase} type="text" onChange={(e) => setCatchphrase(e.target.value)} />
        <button onClick={saveCatchphrase}>Add</button>
        <ul>
          {Catchphrase.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
}
