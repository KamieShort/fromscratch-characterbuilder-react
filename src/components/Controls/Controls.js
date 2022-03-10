import React from 'react';

export default function Controls({ setHead, setMiddle, setBottom }) {
  return (
    <div>
      <select
        onChange={(e) => {
          setHead(e.target.value);
        }}
      >
        <option value="bird">Bird</option>
        <option value="duck">Duck</option>
        <option value="dog">Dog</option>
        <option value="horse">Horse</option>
      </select>

      <select
        onChange={(e) => {
          setMiddle(e.target.value);
        }}
      >
        <option value="blue">Blue</option>
        <option value="dress">Fancy</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
      </select>

      <select
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      >
        <option value="leg">Single Leg</option>
        <option value="white">White Pants</option>
        <option value="blue">Blue Jeans</option>
      </select>

      <input id="catchphrase-input" />
      <button id="catchphrase-button">Add</button>
    </div>
  );
}
