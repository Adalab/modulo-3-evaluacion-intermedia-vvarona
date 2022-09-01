import InputText from "./InputText";
import '../styles/App.scss'

function NewQuoteForm(prop) {

    return (
        <form className="form">
            <InputText
                labelText={'Quote: '}
                inputId={'quote'}
                inputValue={prop.quoteValue}
                onChange={prop.handleQuoteInput}
            />

            <InputText
                labelText={'Character: '}
                inputId={'character'}
                inputValue={prop.characterValue}
                onChange={prop.handleCharacterInput}
            />

            <button className="form-button"
                onClick={prop.handleAddQuoteButon}>
                Add New Quote
            </button>
        </form>
    );
}

export default NewQuoteForm;