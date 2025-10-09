import Quiz from "./components/Quiz";
function App() {
  const quiz = [
    {
      question: "What is the capital of France?",
      option1: "Berlin",
      option2: "Madrid",
      option3: "Paris",
      option4: "Rome",
      id: 1,
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      option1: "Earth",
      option2: "Mars",
      option3: "Jupiter",
      option4: "Saturn",
      id: 2,
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      option1: "Charles Dickens",
      option2: "William Shakespeare",
      option3: "Jane Austen",
      option4: "Mark Twain",
      id: 3,
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the boiling point of water at sea level?",
      option1: "90°C",
      option2: "100°C",
      id: 4,
      option3: "110°C",
      option4: "120°C",
      correctAnswer: "100°C",
    },
    {
      question: "What is the largest ocean on Earth?",
      option1: "Atlantic Ocean",
      option2: "Indian Ocean",
      id: 5,
      option3: "Arctic Ocean",
      option4: "Pacific Ocean",
      correctAnswer: "Pacific Ocean",
    },
  ];
  return (
    <>
      <Quiz data={quiz} />
    </>
  );
}

export default App;
