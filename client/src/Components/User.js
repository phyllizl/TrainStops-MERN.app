import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//This will be the User's Profile page when they log in. We will see all the User's reviews here with their crud functionalities.

const User = () => {
  const params = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(params.userid);
    const callGetDetails = async () => {
      try {
        const userFetch = await fetch(`/v1/users/${params.userid}`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        console.log(userFetch);
        setUser(userFetch);
      } catch (err) {
        console.log(err);
      }
    };
    callGetDetails();
  }, [params.userid]);

  return (
    <>
      <h1> User Profile </h1>
      {user.username}
    </>
  );
};

export default User;
