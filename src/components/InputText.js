function InputText(prop) {


    return (
        <>
            <label htmlFor={prop.inputId}>{prop.labelText}</label>
            <input
                type='text'
                id={prop.inputId}
                name={prop.inputId}
                value={prop.inputValue}
                onChange={prop.onChange}
            />
        </>
    )
}

export default InputText;