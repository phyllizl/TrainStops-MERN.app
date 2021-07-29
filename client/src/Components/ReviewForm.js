import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoggedContext } from "../App";

const ReviewForm = ({
  placeId,
  placeName,
  fetchReviews,
  setFetchReviews,
  queryType,
}) => {
  const [canReview, setCanReview] = useState(true);
  const loggedContext = useContext(LoggedContext);
  console.log("context", loggedContext);
  const history = useHistory();
  console.log("fetchreviews", fetchReviews);

  useEffect(() => {
    fetch(`/v1/reviews/${queryType}/${placeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in network");
        }
      })
      .then((resJson) => {
        //console.log(resJson);
        resJson.filter((u) => {
          if (u.user_id === loggedContext?._id) {
            setCanReview(false);
            return true;
          } else {
            setCanReview(true);
            return false;
          }
        });
      })
      .catch((err) => console.error({ Error: err }));
  }, [loggedContext, queryType, placeId, fetchReviews]);

  const handleReview = (e) => {
    e.preventDefault();
    //console.log(e.target.elements.review.value);
    const inputReview = e.target.elements.review.value;
    const postReview = {
      user_id: loggedContext?._id,
      location_id: placeId,
      username: loggedContext?.username,
      location_name: placeName,
      review: inputReview,
    };
    console.log("post rev userid", postReview.userId);
    fetch(`/v1/reviews`, {
      method: "POST",
      body: JSON.stringify(postReview),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in network");
        }
      })
      .then((resJson) => {
        //console.log(resJson);
        //console.log("fetchreviews", fetchReviews);
        setFetchReviews([...fetchReviews, resJson]);
        return history.push(`/location/${placeId}`);
      })
      .catch((err) => console.error({ Error: err }));
  };

  return (
    <div className="block">
      <div className="card-content">
        <div className="content">
          <h1>Reviews</h1>
          <form onSubmit={handleReview}>
            <div className="block">
              <label htmlFor="review">How did you like this place?</label>{" "}
              <br />
              <textarea
                className="textarea is-warning"
                type="textfield"
                name="review"
                id="review"
                placeholder="Type something"
              />
            </div>
            <div className="block">
              {canReview ? (
                <button className="button is-link is-outlined is-warning">
                  Post Review
                </button>
              ) : (
                <button
                  className="button is-link is-outlined is-warning"
                  disabled
                >
                  Post Review
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
