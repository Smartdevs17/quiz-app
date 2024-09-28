import '../styles/Question.css';

const Question = ({ questionData, currentIndex, totalQuestions, onAnswerSelect, selectedAnswer }) => {
  return (
    <div className="questionCard">
      <h3>
        Question {currentIndex + 1} of {totalQuestions}
      </h3>
      <p>{questionData.question}</p>
      <div className="options">
        {questionData.options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
            />
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
