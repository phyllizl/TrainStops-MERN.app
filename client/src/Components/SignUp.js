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
      <div className="has-text-centered is-size-4 has-text-weight-bold">
        <div className="py-2 my-2 ">
          <label>Sign Up</label>
        </div>
        <form className="field  is-centered" onSubmit={handleSubmit}>
          <label htmlFor="username"> Username: </label>
          <input
            className="input is-primary is-outlined"
            name="username"
            placeholder="username"
            id="username"
          />{" "}
          <br />
          <label htmlFor="password"> Password: </label>
          <input
            className="input is-primary is-outlined"
            type="password"
            password="password"
            placeholder="password"
            id="password"
          />
          <br />
          <br />
          <input
            className="button is-primary is-light is-outlined"
            type="submit"
            value="Sign Up"
          />
        </form>
        <a href="/login">Have an account? Click here to log in. </a>
        <br />
        {errorMessage}
      </div>
    </>
  );
};

export default SignUp;
