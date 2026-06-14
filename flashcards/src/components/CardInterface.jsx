import { useState } from 'react';
import cardData from '../card_data.jsx';

const CardInterface = () => {
  // Set the card to be the starter card initially
  const [content, setContent] = useState({question: "Start!", answer: "Press the 'next' button to start!"});

  // Determine whether a card is flipped or not
  const [flipped, setFlipped] = useState(false);

  // Function to choose the new card
  const newCard = () => {
    let newIndex = Math.floor(Math.random() * cardData.length);
    setContent(cardData[newIndex]);
    setFlipped(false);
  };

  const unflippedCard = (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <h1>{content.question}</h1>
    </div>
  );

  const flippedCard = (
    <div className="card flipped" onClick={() => setFlipped(!flipped)}>
        <h1>{content.answer}</h1>
    </div>
  );

  return (
    <div>
      {flipped ? flippedCard : unflippedCard}
      {/* Button to go to the next card */}
      <button onClick={newCard}>Next card</button>
    </div>
  );
}

export default CardInterface;