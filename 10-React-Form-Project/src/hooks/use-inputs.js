import {useState} from 'react'

const useInputs = (validateField) => {

    const [enteredInput, setEnteredInput] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const inputFieldValid = validateField(enteredInput);
    const hasErrors = !inputFieldValid && isTouched;

    const fieldChangeHandler = (event) => {
        setEnteredInput(event.target.value);
    }

    const fieldBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setIsTouched(false);
        setEnteredInput('');
    };

    return {
      value: enteredInput,
      isValid: inputFieldValid,
      hasErrors,
      fieldChangeHandler,
      fieldBlurHandler,
      reset,
    };

}

export default useInputs