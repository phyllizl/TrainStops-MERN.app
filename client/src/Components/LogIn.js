import React from "react";
import { useHistory } from "react-router-dom";

//This will be the Log In page

const LogIn = () => {
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/v1/users", {
      method: "POST",
      body: JSON.stringify({
        username: event.target.username.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        return history.push("/");
      }
      throw new Error("Error in network");
    });
  };
  return (
    <>
      <h1> Log In </h1>
      <form onSubmit={handleSubmit}>
        <label for="username"> Username: </label>
        <input name="username" placeholder="username" id="username" /> <br />
        <label for="password"> Password: </label>
        <input password="password" placeholder="password" id="password" />
        <br />
        <input type="submit" value="Log in" />
      </form>
      <a href="/">Back to main</a>
    </>
  );
};

export default LogIn;
