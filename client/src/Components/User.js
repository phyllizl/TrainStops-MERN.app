import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Reviews from "./Reviews.js";

//This will be the User's Profile page when they log in. We will see all the User's reviews here with their crud functionalities.

const User = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [fetchReviews, setFetchReviews] = useState([]);

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
      <div class="card">
        <header class="card-header">
          <p class="card-header-title"> User Profile </p>
        </header>

        <div class="card-content">
          <p class="title"> Hi {user.username}!</p>
          <p class="card-header-title"> Reviews </p>
          <p class="subtitle">
            <Reviews
              queryType="users"
              searchId={params.userid}
              fetchReviews={fetchReviews}
              setFetchReviews={setFetchReviews}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default User;
