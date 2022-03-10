import React from 'react';

import './Head.css';

export default function Head(props) {
  const classes = `head ${props.type}`;
  return (
    <div className={classes}>
      {props.type}
      <img
        style={{ height: '150px' }}
        src={`${process.env.PUBLIC_URL}/Headimages-${props.type}.png`}
      />
    </div>
  );
}
