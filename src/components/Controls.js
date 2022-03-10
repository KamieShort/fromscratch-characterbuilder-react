import React from 'react';

export default function Controls({ setHead, setMiddle, setBottom }) {
  return (
    <div>
      <select>
        <option img src="./../../public/assets/doghead.png" value="dog">
          Dog Head
        </option>
      </select>
    </div>
  );
}
