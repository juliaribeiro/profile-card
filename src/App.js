import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Hello";
  const name = "Hello";

  return (<>
    <div className="badge">
      <h1 key ={greeting}>{greeting}</h1>
    </div>
      
     </>
  );
}

export default App;
