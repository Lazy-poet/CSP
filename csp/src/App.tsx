import React from 'react';
import { csp as CSP } from './container/csp';
import './Styles/App.css';
import './Styles/global.css';

function App() {
  return (
    <>
    <div className="App">
      <CSP />
    </div>
    <h1 className="error">Web not available on smaller screens. Please switch to a desktop</h1>
    </>
  );
}

export default App;
