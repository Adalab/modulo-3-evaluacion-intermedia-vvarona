import InputText from "./InputText";
import '../styles/App.scss'

function NewQuoteForm(prop) {

    return (
        <form className="form">
            <InputText
                labelText={'Frase: '}
                inputId={'quote'}
                inputValue={prop.quoteValue}
                onChange={prop.handleQuoteInput}
            />

            <InputText
                labelText={'Personaje: '}
                inputId={'character'}
                inputValue={prop.characterValue}
                onChange={prop.handleCharacterInput}
            />

            <button className="form-button"
                onClick={prop.handleAddQuoteButon}>
                Agregar Nueva frase
            </button>
        </form>
    );
}

export default NewQuoteForm;