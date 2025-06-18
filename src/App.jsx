
import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard.jsx';

const cardSet = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: '2 + 2 = ?', answer: '4' },
  { question: 'Largest planet in our solar system?', answer: 'Jupiter' },
  { question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
  { question: 'H2O is commonly known as?', answer: 'Water' }
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = cardSet[currentIndex];

  const handleFlip = () => setShowAnswer(!showAnswer);

  const handleNext = () => {
    let next = Math.floor(Math.random() * cardSet.length);
    if (cardSet.length > 1) {
      while (next === currentIndex) {
        next = Math.floor(Math.random() * cardSet.length);
      }
    }
    setCurrentIndex(next);
    setShowAnswer(false);
  };

  return (
    <div className="App">
      <header>
        <h1>General Knowledge Flashcards</h1>
        <p>A quick way to test yourself on assorted trivia.</p>
        <p>Total cards: {cardSet.length}</p>
      </header>

      <Flashcard
        text={showAnswer ? currentCard.answer : currentCard.question}
        onClick={handleFlip}
        flipped={showAnswer}
      />

      <button className="next" onClick={handleNext}>Next random card</button>
    </div>
  );
};

export default App;
