import react, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from './NewUser.module.css';
import Wrapper from '../Helpers/Wrapper'

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHanlder = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ) {
        setError({
            title: 'Invalid Input',
            message: 'Please enter a valid name and age (non-empty values)'
        })
        return;
    }

    if (+enteredAge < 1) {
        setError({
            title: "Invalid age",
            message:
           "Please enter a valid age ( > 0)",
        });
        return;
    }
    props.onAddUser( enteredName, enteredAge )
    setEnteredName('');
    setEnteredAge('');
  };

  const errorHandle = () => {
      setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandle}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHanlder}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
