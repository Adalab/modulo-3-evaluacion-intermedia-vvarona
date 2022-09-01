function InputSelect(prop) {

    const array = prop.optionsArray;


    const mapedOptions = array.map((item, i) =>
        <option key={i} value={item} className="select-option">{item}</option>
    )

    return (
        <>
            <label htmlFor={prop.labelText} className={"select-label"}>{prop.text}</label>
            <select
                type="select"
                id={prop.labelText}
                value={prop.value}
                onChange={prop.onChange}
                className="select-input">

                <option className="select-option" value='all'>All</option>

                {mapedOptions}

            </select>
        </>
    )
}

export default InputSelect;