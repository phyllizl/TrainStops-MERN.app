import React from "react";

//This will be the Log In page

const LogIn = () => {

    return(
        <>
            <h1> Log In </h1>
            <form>
                <label for="username"> Username: </label>
                <input name="username" placeholder="username" /> <br />
                <label for="password"> Password: </label>
                <input password="password" placeholder="password" /> <br />
                <button>Log in</button>
            </form>
        </>
    )
}

export default LogIn;