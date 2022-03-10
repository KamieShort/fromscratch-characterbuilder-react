import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Main from './views/Main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
