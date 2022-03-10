import React, { useState } from 'react';
import './Main.css';

import Controls from '../components/Controls/Controls';
import Head from '../components/Head/Head';
// import Middle from '../components/Middle/Middle';
// import Bottom from '../components/Bottom/Bottom';
// import Catchprase from '../components/Catchphrase/Catchphrase';

// import Footer from '../components/Footer/Footer';

import background from '../background.jpg';

export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('middle');
  const [bottom, setBottom] = useState('bottom');
  const [catchphrase, setCatchprase] = useState('');

  return (
    <main className="main" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Controls setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} />
        <Head head={head} />
        {/* <Middle middle={middle} /> */}
        {/* <Bottom bottom={bottom} /> */}
        {/* <Catchprase catchphrase={catchphrase} setCatchprase={setCatchprase} /> */}
      </div>
    </main>
  );
}
