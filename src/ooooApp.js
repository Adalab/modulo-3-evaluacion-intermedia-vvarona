import { useState } from 'react';
import './styles/App.css';
import QuotesData from "./quoteData.json"

function App() {

  const [quoteData, setQuoteData] = useState(QuotesData);
  const [newQuote, setNewQuote] = useState({
    quote:'',
    character:''
  });
  
  const renderQuoteData = quoteData.map((item, index) =>{
    return (<li className='quote-item' key={index}>
      <p className='quote-item-text'>"{item.quote}"</p>
      <span className='quote-item-character'>- {item.character}</span>
    </li>
    );
  });

  const handleSubmit = (ev) => {
    ev.preventDefault()
    //setNewQuote({...})
  }

  const handleNewQuoteInput = (ev) => {
    ev.preventDefault()
    const inputValue = ev.target.id.value
    setNewQuote([...{inputValue}])
  }

  return (
    <div className="App">
      <header>
        <h1 className='header-title'>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <ul className='quote-list'>
            {renderQuoteData}
          </ul>
        </section>
        {/* <section>
          <h3>Añadir una nueva frase</h3>
          <form>
            <label htmlFor='quote'>Frase:</label>
            <input
              type='text'
              name='quote'
              id='quote' 
              title='Escribe aquí una nueva frase'
              value={newQuote.quote}
              onChange={handleNewQuoteInput}
            />
            <label htmlFor='character'>Personaje:</label>
            <input
              type='text'
              name='character'
              id='character' 
              title='Escribe el personaje de la frase'
              value={newQuote.character}
              onChange={handleNewQuoteInput}
            />
            <input 
              className='form-button'
              type='submit' 
              value='Añadir la nueva frase' 
              onClick={handleSubmit}
            />
          </form>
        </section> */}
      </main>
    </div>
  );
}

export default App;
