import React from 'react';

import './Bottom.css';

export default function Bottom(props) {
  const classes = `${props.bottom}`;
  return (
    <div className={classes}>
      {props.bottom}
      <img
        style={{ height: '160px' }}
        src={`${process.env.PUBLIC_URL}/assets/bottom-${props.bottom}.png`}
      />
    </div>
  );
}
