import InputText from "./InputText";


function FilterForm(prop) {

    return (
        <>
            <InputText
                labelText={'Filtro: '}
                inputId={'filter'}
                inputValue={prop.filterQuote}
                onChange={prop.handleFilterInput}
            />
        </>


    );
}

export default FilterForm;