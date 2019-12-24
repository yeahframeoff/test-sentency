import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [apiText, setApiText] = useState('');
  
  useEffect( () => {
    fetch("/_api/").then(resp => resp.text()).then(setApiText);
  }, [apiText]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>The API bravely responds:</h1>
        <p>{apiText}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
