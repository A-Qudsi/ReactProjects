import React, { useState } from 'react';

const BasicForm = (props) => {
  const [enteredFName, setEnteredFname] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const [enteredFNameIsTouched, setEnteredFNameIsTouched] = useState(false);
  const [enteredLNameIsTouched, setEnteredLNameIsTouched] = useState(false);
  const [EnteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

  const enteredFNameIsValid = enteredFName.trim() !== '';
  const enteredLNameIsValid = enteredLName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.includes('@'); 

  const enteredFNameIsInvalid = !enteredFNameIsValid && enteredFNameIsTouched
  const enteredLNameIsInvalid = !enteredLNameIsValid && enteredLNameIsTouched
  const enteredEmailIsInvalid = !enteredEmailIsValid && EnteredEmailIsTouched

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const enteredFNameChangeHandler = event => {
    setEnteredFname(event.target.value);
  }

  const enteredLNameChangeHandler = event => {
    setEnteredLName(event.target.value)
  }

  const enteredEmailChangeHandler = event => {
    setEnteredEmail(event.target.value)
  }

  const enteredFNameBlurHandler = (event) => {
    setEnteredFNameIsTouched(true);
  };

  const enteredLNameBlurHandler = (event) => {
    setEnteredLNameIsTouched(true);
  };

  const enteredEmailBlurHandler = (event) => {
    setEnteredEmailIsTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredFNameIsTouched(true);
    setEnteredLNameIsTouched(true);
    setEnteredEmailIsTouched(true);

    if (!formIsValid) {
      return;
    }

    setEnteredFname("");
    setEnteredLName('');
    setEnteredEmail('');
    setEnteredFNameIsTouched(false);
    setEnteredLNameIsTouched(false);
    setEnteredEmailIsTouched(false);
  }

  const FNameClass = enteredFNameIsInvalid ? 'form-control invalid' : 'form-control'
  const LNameClass = enteredLNameIsInvalid ? 'form-control invalid' : 'form-control'
  const EmailClass = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control'


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
