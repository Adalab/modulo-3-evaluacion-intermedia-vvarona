import InputSelect from "./InputSelect";
import InputText from "./InputText";


function FilterForm(prop) {

    return (
        <div className="search-section">
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

        </div>


    );
}

export default FilterForm;

