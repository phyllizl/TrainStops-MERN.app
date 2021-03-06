import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//This will be the Log In page

const LogIn = (props) => {
  const [errorMessage, setErrorMessage] = useState("");

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
          //console.log(resJson);
          props.setLogState(resJson);
          return history.push("/");
        }
      });
  };
  return (
    <div className="block">
      <div className="has-text-centered is-size-4 has-text-weight-bold">
        <div className="py-2 my-2 ">
          <label> Log In </label>
        </div>
        <div className="column is-4 is-offset-4">
          <form onSubmit={handleSubmit}>
            <div className="block">
              <label htmlFor="username"> Username: </label>
              <input
                className="input is-primary is-outlined"
                name="username"
                placeholder="username"
                id="username"
              />
            </div>
            <div className="block">
              <label htmlFor="password"> Password: </label>
              <input
                className="input is-primary is-outlined"
                type="password"
                password="password"
                placeholder="password"
                id="password"
              />
            </div>
            <input
              className="button is-primary is-light is-outlined"
              type="submit"
              value="Log in"
            />
          </form>
        </div>

        <a href="/signup">Don't have an account? Sign up. </a>
        <br />
        {errorMessage}
      </div>
    </div>
  );
};

export default LogIn;
