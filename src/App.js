import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hello";
  const name = "Hello";

  return (
  <div className="card">
    <div className="badge">
      <h1 key ={greeting}>{greeting}</h1>
    </div>
    <h1>I'm {name}</h1>

      <p className="top-border">Information Systems student</p>
      <p className="top-border">Niterói, Rio de Janeiro, Brazil</p>
      <p className="top-border">Find me on:</p>

  </div>
  );
}

export default App;
