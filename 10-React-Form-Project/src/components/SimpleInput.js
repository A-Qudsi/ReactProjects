import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState('')
  // const nameInputRef = useRef("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const [formIsValid, setFormIsValid] = useState(false);

  const EnteredEmailIsValid =
    enteredEmail.includes("@") &&
    enteredEmail.split("@").length === 2 &&
    enteredEmail.split("@")[1].includes('.');
  const emailInputIsInvalid = !EnteredEmailIsValid && enteredEmailTouched;

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  // useEffect(() => {
  if (enteredNameIsValid && EnteredEmailIsValid) {
    // && enteredAgeIsValid if we had)
    formIsValid = true;
  }
  // }, [enteredNameIsValid]); //enteredAgeISValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = event => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true)

    if (!enteredNameIsValid || !enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail('')
    setEnteredEmailTouched(false);
    // nameInputRef.current.value = ''; // => Not ideal. don't manipulate the DOM.
  };

  //we use either or the useRef or the useState. the useState keeps track of every keystroke. To reset the field we can just call on setEnteredName and assign it an empty string. With useRef we can do on line 20 however we're manipulating the DOM.

  const nameInputClasses = !nameInputIsValid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
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
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please Enter a Valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
