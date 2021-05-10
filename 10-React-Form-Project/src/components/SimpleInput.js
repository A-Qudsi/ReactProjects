import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const nameInputRef = useRef("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputisInvalid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  // useEffect(() => {
  if (enteredNameIsValid) {
    // && enteredAgeIsValid if we had)
    formIsValid = true;
  }
  // }, [enteredNameIsValid]); //enteredAgeISValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    setEnteredName("");
    setEnteredNameTouched(false);
    // nameInputRef.current.value = ''; // => Not ideal. don't manipulate the DOM.
  };

  //we use either or the useRef or the useState. the useState keeps track of every keystroke. To reset the field we can just call on setEnteredName and assign it an empty string. With useRef we can do on line 20 however we're manipulating the DOM.

  const nameInputClasses = !nameInputisInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputisInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
