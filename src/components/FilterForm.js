import InputSelect from "./InputSelect";
import InputText from "./InputText";


function FilterForm(prop) {

    return (
        <>
            <InputText
                labelText={'Search: '}
                inputId={'filter'}
                inputValue={prop.filterQuote}
                onChange={prop.handleFilterInput}
            />

            <InputSelect

                text={"By Character: "}
                type="select"
                id={'filterByCharacter'}
                value={prop.value}
                onChange={prop.onChange}
                optionsArray={prop.optionsArray}

            />

        </>


    );
}

export default FilterForm;

