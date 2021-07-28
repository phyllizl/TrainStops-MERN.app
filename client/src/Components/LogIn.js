import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoggedContext } from "../App";
//This will be the Log In page

const LogIn = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const loggedContext = useContext(LoggedContext);
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/v1/session", {
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
          return setErrorMessage(
            "Error logging in! Please provide correct username and password."
          );
        } else {
          console.log(resJson);
          props.setLogState(resJson);
          return history.push("/");
        }
      });
  };
  return (
    <>
      <h1> Log In </h1>
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
        <input type="submit" value="Log in" />
      </form>
      <a href="/">Back to main</a>
      {errorMessage}
    </>
  );
};

export default LogIn;
