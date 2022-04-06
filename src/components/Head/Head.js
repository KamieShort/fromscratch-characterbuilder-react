import React from 'react';

import './Head.css';

export default function Head(props) {
  const classes = `${props.head}`;
  return (
    <div className={classes}>
      <img
        style={{ height: '155px' }}
        src={`${process.env.PUBLIC_URL}/assets/head-${props.head}.png`}
      />
    </div>
  );
}
