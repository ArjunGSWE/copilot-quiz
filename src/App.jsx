import React, { useState } from "react";
import questions from "./questions";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      <h1>Science Instruments Quiz</h1>
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {current + 1} of {questions.length}</h2>
          <p>{questions[current].question}</p>
          <div className="options">
            {questions[current].options.map((option, idx) => (
              <button
                key={idx}
                className={selected === option ? "selected" : ""}
                onClick={() => handleOptionClick(option)}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-btn"
            onClick={handleNext}
            disabled={selected === null}
          >
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
