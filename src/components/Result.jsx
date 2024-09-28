import React from "react";

const Result = ({ userAnswers, quizQuestions, onRetry }) => {
  const calculateScore = () => {
    return quizQuestions.reduce((score, question, index) => {
      return userAnswers[index] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Quiz Completed!</h2>
      <p>Your score: {calculateScore()} out of {quizQuestions.length}</p>
      <button onClick={onRetry} style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}>Retry</button>
    </div>
  );
};

export default Result;
