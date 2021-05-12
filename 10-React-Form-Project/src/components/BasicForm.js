import React from "react";
import useInputs from "../hooks/use-inputs";

const BasicForm = () => {

  const {
    value: enteredFName,
    isValid: enteredFNameIsValid,
    hasErrors: enteredFNameIsInvalid,
    fieldChangeHandler: enteredFNameChangeHandler,
    fieldBlurHandler: enteredFNameBlurHandler,
    reset: fNameReset,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredLName,
    isValid: enteredLNameIsValid,
    hasErrors: enteredLNameIsInvalid,
    fieldChangeHandler: enteredLNameChangeHandler,
    fieldBlurHandler: enteredLNameBlurHandler,
    reset: lNameReset,
  } = useInputs((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasErrors: enteredEmailIsInvalid,
    fieldChangeHandler: enteredEmailChangeHandler,
    fieldBlurHandler: enteredEmailBlurHandler,
    reset: emailReset,
  } = useInputs((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    fNameReset();
    lNameReset();
    emailReset();
  };

  const FNameClass = enteredFNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const LNameClass = enteredLNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const EmailClass = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={FNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredFNameChangeHandler}
            onBlur={enteredFNameBlurHandler}
            value={enteredFName}
          />
          {enteredFNameIsInvalid && <p>Enter a First Name</p>}
        </div>
        <div className={LNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={enteredLNameChangeHandler}
            onBlur={enteredLNameBlurHandler}
            value={enteredLName}
          />
          {enteredLNameIsInvalid && <p>Enter a Last Name</p>}
        </div>
      </div>
      <div className={EmailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && <p>Enter a Valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
