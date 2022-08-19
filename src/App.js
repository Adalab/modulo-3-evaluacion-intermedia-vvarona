import { useState } from 'react';
import './App.css';
import QuotesData from "./quoteData.json"

function App() {

  const [quoteData, setQuoteData] = useState(QuotesData);
  
  const renderQuoteData = quoteData.map((item, index) =>{
    return (<li className='quoteItem' key={index}>
      <p className='quoteItemText'>"{item.quote}"</p>
      <span className='quoteItemCharacter'>- {item.character}</span>
    </li>
    );
  });

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <ul>
            {renderQuoteData}
          </ul>
        </section>
        <section>
          <h3>Añadir una nueva frase</h3>
          <form>
            <label htmlFor='newQuoteInput'>Frase:</label>
            <input
              type='newQuoteInput'
              name='newQuoteInput'
              id='newQuoteInput' 
              title='Escribe aquí una nueva frase'
              //onChange={handleNewQuoteInput}
            />
            <label htmlFor='newCharacterInput'>Personaje:</label>
            <input
              type='newCharacterInput'
              name='newCharacterInput'
              id='newCharacterInput' 
              title='Escribe el personaje de la frase'
              //onChange={handleNewQuoteInput}
            />
            <input 
              type='submit' 
              value='Añadir la nueva frase' 
              onClick={handleSubmit}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
