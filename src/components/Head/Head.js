import React from 'react';

import './Head.css';

export default function Head(props) {
  const classes = `head ${props.head}`;
  return (
    <div className={classes}>
      {props.head}
      <img style={{ height: '100px' }} src={`${process.env.PUBLIC_URL}/head-${props.head}.png`} />
    </div>
    // <div className="head">
    //   <img alt={props.name} src={`${process.env.PUBLIC_URL}/assets/Headimages${props.name}.png`} />
    // </div>
  );
}
