import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Reviews from "./Reviews.js";
import { LoggedContext } from "../App";
import { useContext } from "react";
//This will be the User's Profile page when they log in. We will see all the User's reviews here with their crud functionalities.

const User = (props) => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [fetchReviews, setFetchReviews] = useState([]);
  const loggedContext = useContext(LoggedContext);

  useEffect(() => {
    //console.log(params.userid);
    const callGetDetails = async () => {
      try {
        const userFetch = await fetch(`/v1/users/${params.userid}`).then(
          (response) => response.json(),
          (err) => console.log(err)
        );
        //console.log(userFetch);
        setUser(userFetch);
      } catch (err) {
        console.log(err);
      }
    };
    callGetDetails();
  }, [params.userid]);

  return (
    <>
      <div className="block">
        {/* <section class="section"> */}
        <div className="container">
          {loggedContext ? (
            <>
              <div className="title"> Hi {user.username}!</div> <br />
              <div className="subtitle"> Your Reviews: </div>
              <div className="container">
                <Reviews
                  queryType="users"
                  searchId={params.userid}
                  fetchReviews={fetchReviews}
                  setFetchReviews={setFetchReviews}
                />
              </div>
            </>
          ) : (
            <a href="/login">Please log in</a>
          )}
        </div>
        {/* </section> */}
      </div>
    </>
  );
};

export default User;
