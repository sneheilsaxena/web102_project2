
import './Flashcard.css';

const Flashcard = ({ text, onClick, flipped }) => {
  return (
    <div className={\`flashcard \${flipped ? 'flipped' : ''}\`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Flashcard;
