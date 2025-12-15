import { useEffect, useState } from "react";
let Quiz = ({ data }) => {
  const [Count, Satecount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [finished, setFinished] = useState(false);
  const [Score, SateScore] = useState(0);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === data[Count].correctAnswer) {
      SateScore(Score + 1);
    }
  };
  const getOptionStyle = (option) => {
    if (!selectedOption) return {};

    if (option === data[Count].correctAnswer) {
      return { backgroundColor: "lightgreen" };
    }

    if (option === selectedOption) {
      return { backgroundColor: "lightcoral" };
    }

    return {};
  };
  let Next = () => {
    if (Count < data.length - 1) {
      Satecount(Count + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };
  setTimeout(() => {
    Count < data.length - 1 ? Satecount(Count + 1) : setFinished(true);
  }, 10000);
  if (finished) {
    if (finished) {
      return (
        <div
          style={{
            width: "300px",
            margin: "100px auto",
            padding: "20px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>🎉 Quiz Finished</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>
            Your Score: {Score} : from at {data.length}
          </p>
        </div>
      );
    }
  }
  return (
    <>
      <div id="quiz-container">
        <h1 id="quiz-title">Quiz App</h1>

        <div id="question-box">
          <p id="question-text">{data[Count].question}</p>
          <ul id="options-list">
            <li
              id="option1"
              onClick={() => handleAnswer(data[Count].option1)}
              style={getOptionStyle(data[Count].option1)}
            >
              {data[Count].option1}
            </li>
            <li
              id="option2"
              onClick={() => handleAnswer(data[Count].option2)}
              style={getOptionStyle(data[Count].option2)}
            >
              {data[Count].option2}
            </li>
            <li
              id="option3"
              onClick={() => handleAnswer(data[Count].option3)}
              style={getOptionStyle(data[Count].option3)}
            >
              {data[Count].option3}
            </li>
            <li
              id="option4"
              onClick={() => handleAnswer(data[Count].option4)}
              style={getOptionStyle(data[Count].option4)}
            >
              {data[Count].option4}
            </li>
          </ul>
        </div>

        <button id="next-btn" onClick={Next}>
          Next
        </button>
        <p id="score-box">{Score}</p>
      </div>
    </>
  );
};
export default Quiz;
