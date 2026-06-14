import './App.css';
import { useState } from 'react';
import Card from './components/Card.jsx';
import cardData from './card_data.jsx';

const App = () => {
  // Set the card to be the starter card initially
  const [content, setContent] = useState({question: "Start!", answer: "Press the 'next' button to start!"});

  // Determine whether a card is flipped or not
  const [flipped, setFlipped] = useState(false);

  const newCard = () => {
    let newIndex = Math.floor(Math.random() * cardData.length);
    setContent(cardData[newIndex]);
    setFlipped(false);
  }

  // Return the contents of the page
  return (
    <div className='App'>

      {/* Header for the app */}
      <div className='header'>
        <h1 >Learn Food in Spanish!</h1>
        <br />
        <h2 className='description'>A flashcard set to help you learn the Spanish names of a few foods.</h2>
        <h2>Number of cards: { cardData.length }</h2>
      </div>

      {/* Card with question and answer */}
      <Card content={content} onClick={() => setFlipped(!flipped)}/>

      {/* Button to go to the next card */}
      <button onClick={newCard}>Next card</button>

    </div>
  )
}

// Make it so that the App is importable elsewehere
export default App
