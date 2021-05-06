import react, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./NewUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {

  const nameInputRef = useRef(); //always  is an object, which always has a current prop and that current prop holds the actual value that ref is connected with. By default, it is undefined as soon as the code runs because of the ref prop the nameInput ref is connected to that input and hence, its actually the input which is being stored as a value in the current prop.
  const ageInputRef = useRef();

  //By using ref we can get the value of the input and would no longer need the useState to keep track of the values.

//   const [enteredName, setEnteredName] = useState(""); 
//   const [enteredAge, setEnteredAge] = useState("");

// Ref is now handling the value and onChange to keep track of all the values.

  const [error, setError] = useState();

//   const usernameChangeHandler = (event) => {
//     setEnteredName(event.target.value);
//   };

//   const ageChangeHanlder = (event) => {
//     setEnteredAge(event.target.value);
//   };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = (nameInputRef.current.value) 
    const enteredUserAge = (ageInputRef.current.value) 

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    // setEnteredName("");
    // setEnteredAge("");

    //IMPORTANT: To reset the fields values since we're no longer using useState we can't use the functions above instead, we can manipulate the DOM without React. You usually shouldn't do that and you typically don't do that but if you just wanna reset the value entered by a user, it is something thats okay.

    nameInputRef.current.value='';
    ageInputRef.current.value='';

    //If you just want to read values useRef is better since it is cleaner and less code. but going with any other method is okay.
  };

  const errorHandle = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredName}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
            // this is now uncontrolled components because it is not being kept in state. The value isn't being controlled with state or react.
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHanlder}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
