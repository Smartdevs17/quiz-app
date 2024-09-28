import React from 'react';
import Quiz from './Quiz';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Ethereum Quiz</h1>
      <Quiz />
    </div>
  );
}

export default Home;
