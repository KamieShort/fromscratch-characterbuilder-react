import React from 'react';

import './Middle.css';

export default function Middle(props) {
  const classes = `${props.middle}`;
  return (
    <div className={classes}>
      {props.middle}
      <img
        style={{ height: '150px' }}
        src={`${process.env.PUBLIC_URL}/assets/middle-${props.middle}.png`}
      />
    </div>
  );
}
