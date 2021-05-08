import React, {useRef} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {

  const amountInputRef = useRef();

  const submiteHanlder = event => {
    event.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={submiteHanlder}>
      <Input
        ref = {amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
