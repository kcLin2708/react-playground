import React, { useState, useRef } from "react";
import "./style.css";

export default function App() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const emailRef = useRef();

  const updateEmailHandler = (event) => {
    //console.log(event.target.value);
    const enteredEmail = emailRef.current.value;
    console.log(enteredEmail);
    setEnteredEmail(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault;
    const enteredEmail = emailRef.current.value;
    // console.log(enteredEmail)
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Your email </label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          onChange={updateEmailHandler}
        />
        <button> Save</button>
      </form>
    </div>
  );
}
