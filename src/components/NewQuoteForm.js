import InputText from "./InputText";

function NewQuoteForm(prop) {


    return (
        <form>
            <InputText
                labelText={'Frase: '}
                inputId={'quote'}
                inputValue={prop.quoteInput}
                onChange={prop.handleQuoteInput}
            />

            <InputText
                labelText={'Personaje: '}
                inputId={'character'}
                inputValue={prop.characterInput}
                onChange={prop.handleCharacterInput}
            />

            <button
                onClick={prop.handleAddQuoteButon}>
                Agregar Nueva frase
            </button>
        </form>
    );
}

export default NewQuoteForm;