import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const containerRef = useRef();

  const getRandom = (num) => {
    return Math.floor(Math.random() *  num);
  }

  const handleKey = (e) => {
    const element = document.createElement('span');
    element.innerHTML = e.key;
    element.style.animation = "pop 3s forwards"
    element.style.left= `${ getRandom(window.innerWidth) - element.style.width }px`;
    element.style.top = `${ getRandom(window.innerHeight) - element.style.height }px`;
    containerRef.current.appendChild(element);
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKey, false);
    return () => {
        window.removeEventListener('keydown', handleKey, false);
    };
  })
  
  return (
    <div className="App">
      <div className = "container" ref = { containerRef }>
      </div>
    </div>
  );
}

export default App;
