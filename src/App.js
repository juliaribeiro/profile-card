import React from 'react';
import Icon from './components/Icon';
import './App.css';
import { useState } from 'react';

function App() {
  const greeting = "Hello";
  const name = "Julia";

  const [ displayWord, setDisplayWord ] = useState (greeting);

  return (<div className="card">
    <div className="badge">
      <h1 key ={displayWord}>{displayWord}</h1>
    </div>
    <h1>I'm {name}</h1>

      <p className="top-border">Information Systems student</p>
      <p className="top-border">Niterói, Rio de Janeiro, Brazil</p>
      <p className="top-border">Find me on:</p>

      <Icon name="github" link ="https://github.com/juliaribeiro"
        onMouseOverEvent={(param) => setDisplayWord(param)}
        onMouseLeaveEvent={() => {setDisplayWord(greeting)}}
      />
      <Icon name="linkedIn" link ="https://www.linkedin.com/in/julia-almeida-matos/"
      onMouseOverEvent={(param) => setDisplayWord(param)}
      onMouseLeaveEvent={() => {setDisplayWord(greeting)}}
      />
      

  </div>
  );
}

export default App;
