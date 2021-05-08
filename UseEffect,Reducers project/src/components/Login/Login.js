import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
      setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  // add as dependecies as what we're using sidefeffcts in our function. we are using setFormIsvalid(), entered email, enteredpassword. Make sure not to execute the functions. Technically we can ommit setFormIsValid since it will never change since its the second variable in useState() which never changes.

  //Exceptions to what dependecies we add to useEffect. You don't need to add state updating functions. React guarantees that those functions never change -> setFormIsValid, you could but since it never changes it won't do anything.
  
  //You also don't need to add "built-in" APIs or functions like .fetch(), localstarge, etc (functions and features built-into the browswer and hence available globally). These browswer APIs/ global functions are not related to the React component render cycle and they also never change

  //You also don't need to add vairables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function into a separate file). Such functions or variables are not created inside of a component function and hence changing them won't affect your components (components won't be revaluated if such variables or functions change and vice versa)

  // So long story short. You must add all 'things' you use in your effect function if those 'things' could change because your component (or some parent component ) re-rendered. That's why variables or state defined in component functions, props, or functions defined in component function have to be added as dependencies!


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
