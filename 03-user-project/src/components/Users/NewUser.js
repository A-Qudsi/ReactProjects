import react, { useState } from "react";
import Card from "../UI/Card";
import classes from "./NewUser.module.css";
import Button from "../UI/Button";

const NewUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHanlder = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ) {
        return;
    }

    if (+enteredAge < 1) {
        return;
    }
    props.onAddUser( enteredName, enteredAge )
    setEnteredName('');
    setEnteredAge('');
  };

  return (
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
          min="1"
          value={enteredAge}
          onChange={ageChangeHanlder}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUser;
