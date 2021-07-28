import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LogoutButton = (props) => {
  const [logout, setLogout] = useState("");
  let history = useHistory();
  const loggingOut = (event) => {
    event.preventDefault();
    fetch("/v1/session/logout", {
      method: "delete",
      body: JSON.stringify({}),
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
          return setLogout("Error in logging out user");
        } else {
          props.setLogState(null);
          return history.push("/");
        }
      });
  };
  return (
    <a href="/" class="navbar-item" onClick={loggingOut}>
      Log Out
      {logout}
    </a>
  );
};

export default LogoutButton;
