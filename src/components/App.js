import { useEffect, useState } from 'react';
import '../styles/App.scss';
import NewQuoteForm from './NewQuoteForm';
import callToApi from '../services/Fetch';
import FilterForm from './FilterForm';
import logo from '../images/friends_logo.png';

function App() {
    const [quoteData, setQuoteData] = useState([]);
    const [quoteInput, setQuoteInput] = useState('');
    const [characterInput, setCharacterInput] = useState('');
    const [filterQuote, setFilterQuote] = useState('');
    const [charactersOptions, setCharacterOptions] = useState('all')

    useEffect(() => {
        callToApi()
            .then((data) => {
                setQuoteData(data);
            })
    }, [])

    const createNewQuote = (quoteInput, characterInput) => {
        return ({
            quote: quoteInput,
            character: characterInput
        })
    };

    const listOfCharacter = (list) => {
        const characters = list.map((item) => item.character)
        const noRepeatList = new Set(characters);
        const result = Array.from(noRepeatList)

        return result

    }

    const handleCharacterSelect = (ev) => {
        setCharacterOptions(ev.target.value)
    }

    const handleQuoteInput = (ev) => {
        setQuoteInput(ev.target.value);
    }

    const handleCharacterInput = (ev) => {
        setCharacterInput(ev.target.value);
    }

    const handleFilterInput = (ev) => {
        setFilterQuote(ev.target.value);
    }

    const cleanInput = () => {
        setCharacterInput('');
        setQuoteInput('');
    }


    const handleAddQuoteButon = (ev) => {
        ev.preventDefault();

        if (quoteInput !== "" && characterInput !== "") {
            const newQuote = createNewQuote(quoteInput, characterInput);
            setQuoteData([...quoteData, newQuote])
            cleanInput()
        }

    }


    //hacer un doble filtrado para el filtro del select con una comparacion ===

    const filterByQuote = (quoteList) => {
        return (
            quoteList.filter((item) => item.quote.toLowerCase().includes(filterQuote.toLowerCase())))
            .filter((item) => {
                if (charactersOptions === 'all') {
                    return true
                } else {
                    return (
                        item.character.toLowerCase() === charactersOptions.toLowerCase())
                }
            })
    }

    const filteredByText = filterByQuote(quoteData)

    const renderQuoteData = filteredByText.map((item, index) => {

        return (<li className='quote-item' key={index}>
            <section>
                <p className='quote-item-text'>"{item.quote}"</p>
                <span className='quote-item-character'>- {item.character}</span>
            </section>
        </li>
        );
    });

    return (
        <div className="App">
            <header>
                <img
                    src={logo}
                    alt='Friends logo'
                    className='header-logo'
                />
                <h2 className='header-subtitle'>Remember all your favorite quotes!</h2>
            </header>
            <FilterForm
                handleFilterInput={handleFilterInput}
                filterQuote={filterQuote}

                value={charactersOptions}
                onChange={handleCharacterSelect}
                optionsArray={listOfCharacter(quoteData)}
            />
            <section>
                <ul className='quote-list'>
                    {renderQuoteData}
                </ul>
            </section>
            <NewQuoteForm
                handleAddQuoteButon={handleAddQuoteButon}
                handleCharacterInput={handleCharacterInput}
                handleQuoteInput={handleQuoteInput}
                quoteValue={quoteInput}
                characterValue={characterInput}
            />
        </div>
    );
}

export default App;
