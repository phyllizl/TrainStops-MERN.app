import React from "react";

//Sign Up Page

const SignUp = () => {

    return(
        <>
           <h1>Sign Up</h1>
           <form>
                <label for="username"> Username: </label>
                <input name="username" placeholder="username" /> <br />
                <label for="password"> Password: </label>
                <input password="password" placeholder="password" /> <br />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;