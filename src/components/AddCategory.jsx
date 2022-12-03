import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {

        // Detecta el cambio del input
        setInputValue(event.target.value);
    }

    const onSubmitInput = (event) => {
        event.preventDefault();

        // Validacion
        if(inputValue.trim().length <= 1) return; 

        // Se utiliza la props
        onNewCategory(inputValue.trim())

        // Se limpia el input después que se guarde el valor 
        setInputValue('');
    }  

    return (
        <form onSubmit={ onSubmitInput}>
            <input
            type = "text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ (event) => onInputChange(event)}
            />
        </form>
    )
}
