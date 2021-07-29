import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Sign Up Page

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/v1/users/new", {
      method: "POST",
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Error in network");
      })
      .then((resJson) => {
        //console.log(resJson.error);
        if (resJson.error) {
          return setErrorMessage("Username is already in used.");
        } else {
          return history.push("/");
        }
      });
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label for="username"> Username: </label>
        <input name="username" placeholder="username" id="username" /> <br />
        <label for="password"> Password: </label>
        <input
          type="password"
          password="password"
          placeholder="password"
          id="password"
        />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <a href="/login">Have an account? Click here to log in. </a>
      <br />
      {errorMessage}
    </>
  );
};

export default SignUp;
