import React, { useState } from 'react';
import './Main.css';

import Controls from '../components/Controls/Controls';
import Head from '../components/Head/Head';
import Middle from '../components/Middle/Middle';
import Bottom from '../components/Bottom/Bottom';
import Catchphrase from '../components/Catchphrase/Catchphrase';

import background from '../background.jpg';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('dress');
  const [bottom, setBottom] = useState('leg');
  const [catchphrases, setCatchphrases] = useState([]);
  const [catchphrase, setCatchphrase] = useState('');

  return (
    <main className="main" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Controls setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} />
        <Head head={head} />
        <Middle middle={middle} />
        <Bottom bottom={bottom} />
        <Catchphrase
          catchphrase={catchphrase}
          catchphrases={catchphrases}
          setCatchphrase={setCatchphrase}
          setCatchphrases={setCatchphrases}
        />
      </div>
    </main>
  );
}
