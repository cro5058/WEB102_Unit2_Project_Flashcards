import './App.css'
import { useState } from 'react'
import cardData from './card_data.jsx'

const App = () => {

  // Return the contents of the page
  return (
    <div className='App'>

      <div className='header'>
        <h1 >Learn Food in Spanish!</h1>
        <br />
        <h2 className='description'>A flashcard set to help you learn the Spanish names of a few foods.</h2>
        <h2>Number of cards: { cardData.length }</h2>
      </div>


    </div>
  )
}

// Make it so that the App is importable elsewehere
export default App
