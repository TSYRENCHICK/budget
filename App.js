import React, { useState } from 'react';
import './App.css';

function App() {
  const [hearts, setHearts] = useState(0);

  const handleClick = () => {
    if (hearts < 5) {
      setHearts(hearts + 1);
    }
  };

  return (
    <div className="container">
      {hearts < 5 ? (
        <button className="heartButton" onClick={handleClick}>
          <span role="img" aria-label="heart">❤️</span>
        </button>
      ) : (
        <div className="centered">
          <span role="img" aria-label="broken heart">💔</span>
          <h1 className="message">Катя, я люблю тебя!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
