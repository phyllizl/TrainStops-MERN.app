import React from "react";

//Sign Up Page

const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form action="/v1/users/" method="POST">
        <label for="username"> Username: </label>
        <input name="username" placeholder="username" id="username" /> <br />
        <label for="password"> Password: </label>
        <input password="password" placeholder="password" id="password" />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUp;
