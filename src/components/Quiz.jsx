import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import quizQuestions from "../quiz-question";
import "../styles/Quiz.css";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
  };

  if (isQuizCompleted) {
    return <Result userAnswers={userAnswers} quizQuestions={quizQuestions} onRetry={handleRetry} />;
  }

  return (
    <div>
      <Question
        questionData={quizQuestions[currentQuestionIndex]}
        currentIndex={currentQuestionIndex}
        totalQuestions={quizQuestions.length}
        onAnswerSelect={handleAnswerSelect}
        selectedAnswer={userAnswers[currentQuestionIndex]}
      />
      <div className="button-container">
        <button 
          className="quiz-button" 
          onClick={handlePrevious} 
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button 
          className="quiz-button" 
          onClick={handleNext}
        >
          {currentQuestionIndex === quizQuestions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
