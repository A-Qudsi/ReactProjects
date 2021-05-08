import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.includes('@')}
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6}
  }

  if (action.type === 'PASSWORD_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    //this tehcnially triggers on every keystroke. What we may want to do is check when the user stops typing. this is called debouncing, so we're not making sure we're not checking every character the user adds we do this by adding setTimeout

    return () => {
      clearTimeout(identifier);
    };

    //This is called a cleanup fnction This will run as cleanup process before useEffect executes this function the next time. Whenever this useEffect function runs before it runs, except for the very first time when it runs, this clenaup function will run. And in addition the cleanup function will run whenever the component you're specifyling the effect in unmounts from the DOM so whenever the component is reused.

    //We do this to make sure we clear the timeout before we set a new one. So the setTimeout only runs once.
  }, [emailIsValid, passwordIsValid]);

  // add as dependecies as what we're using sidefeffcts in our function. we are using setFormIsvalid(), entered email, enteredpassword. Make sure not to execute the functions. Technically we can ommit setFormIsValid since it will never change since its the second variable in useState() which never changes.

  //Exceptions to what dependecies we add to useEffect. You don't need to add state updating functions. React guarantees that those functions never change -> setFormIsValid, you could but since it never changes it won't do anything.

  //You also don't need to add "built-in" APIs or functions like .fetch(), localstarge, etc (functions and features built-into the browswer and hence available globally). These browswer APIs/ global functions are not related to the React component render cycle and they also never change

  //You also don't need to add vairables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function into a separate file). Such functions or variables are not created inside of a component function and hence changing them won't affect your components (components won't be revaluated if such variables or functions change and vice versa)

  // So long story short. You must add all 'things' you use in your effect function if those 'things' could change because your component (or some parent component ) re-rendered. That's why variables or state defined in component functions, props, or functions defined in component function have to be added as dependencies!

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value })

    // setFormIsValid(
    //   emailState.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'PASSWORD_INPUT', val: event.target.value})

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'PASSWORD_BLUR'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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

//useReducer const[state, dispatchFn] = useReducer(reducerFn, initialState, initFn);
//that state snapshot used in the component re-render/re-evaluation cycle. dispatchFN is a function that can be used to dispatch a new action( i.e. trigger an update of the state)

//reducerFn (prevState, action) => newState. A function that is triggered automatically once an action is dispatched (via dispatchFn()) = it receives the latest state snapshot and should return the new, updated state.
// initialState, and  initFn is a function to set the initial state programmically.
